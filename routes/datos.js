const ytdl = require('ytdl-core');
const yts = require('yt-search');
const axios = require('axios');
const cheerio = require('cheerio');
const got = require('got')

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return 'n/a';
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
      if (i === 0) resolve(`${bytes} ${sizes[i]}`);
      resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
};

function ytMp4(url) {
    return new Promise(async(resolve, reject) => {
        ytdl.getInfo(url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
                    let { qualityLabel, contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        video: item.url,
                        quality: qualityLabel,
                        size: bytes
                    };
                };
            };
            let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = getUrl.videoDetails.viewCount;
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({
                title,
                result: tinyUrl,
                quality: resultFix[0].quality,
                size: resultFix[0].size,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            });
        }).catch(reject);
    });
};

function ytMp3(url) {
    return new Promise((resolve, reject) => {
        ytdl.getInfo(url).then(async(getUrl) => {
            let result = [];
            for(let i = 0; i < getUrl.formats.length; i++) {
                let item = getUrl.formats[i];
                if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
                    let { contentLength } = item;
                    let bytes = await bytesToSize(contentLength);
                    result[i] = {
                        audio: item.url,
                        size: bytes
                    };
                };
            };
            let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
            let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
            let tinyUrl = tiny.data;
            let title = getUrl.videoDetails.title;
            let desc = getUrl.videoDetails.description;
            let views = getUrl.videoDetails.viewCount;
            let likes = getUrl.videoDetails.likes;
            let dislike = getUrl.videoDetails.dislikes;
            let channel = getUrl.videoDetails.ownerChannelName;
            let uploadDate = getUrl.videoDetails.uploadDate;
            let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
            resolve({
                title,
                result: tinyUrl,
                size: resultFix[0].size,
                thumb,
                views,
                likes,
                dislike,
                channel,
                uploadDate,
                desc
            });
        }).catch(reject);
    });
}

function ytPlay(query) {
    return new Promise((resolve, reject) => {
        yts(query).then(async(arama) => {
            // let result = getData.videos.slice( 0, 5 );
            var mesaj = '';
            arama.all.map((video) => {
                mesaj += '*' + video.title + '* - ' + video.url + '\n'
            });
            resolve(mesaj);
        }).catch(reject);
    });
};

async function igDownloader(Link) {
  const hasil = []
  const Form = {
    url: Link,
    submit: ""
  }
  await axios(`https://downloadgram.org/`, {
    method: "POST",
    data:  new URLSearchParams(Object.entries(Form)),
    headers: {
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-US,en;q=0.9,id;q=0.8",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
      "cookie": "_ga=GA1.2.1695343126.1621491858; _gid=GA1.2.28178724.1621491859; __gads=ID=8f9d3ef930e9a07b-2258e672bec80081:T=1621491859:RT=1621491859:S=ALNI_MbqLxhztDiYZttJFX2SkvYei6uGOw; __atuvc=3%7C20; __atuvs=60a6eb107a17dd75000; __atssc=google%3B2; _gat_gtag_UA_142480840_1=1"
    },
    referrerPolicy: "strict-origin-when-cross-origin",
  }).then(async res => {
    const $ = cheerio.load(res.data)
    let url = $('#downloadBox').find('a').attr('href');
    await axios(Link, {
      method: "GET",
      data: null,
      headers: {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-US,en;q=0.9,id;q=0.8",
        "cache-control": "max-age=0",
        "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
        "cookie": "ig_did=08A3C465-7D43-4D8A-806A-88F98384E63B; ig_nrcb=1; mid=X_ipMwALAAFgQ7AftbrkhIDIdXJ8; fbm_124024574287414=base_domain=.instagram.com; shbid=17905; ds_user_id=14221286336; csrftoken=fXHAj5U3mcJihQEyVXfyCzcg46lHx7QD; sessionid=14221286336%3A5n4czHpQ0GRzlq%3A28; shbts=1621491639.7673564; rur=FTW"
      },
      referrerPolicy: "strict-origin-when-cross-origin"
    }).then(respon => {
      const ch = cheerio.load(respon.data)
      let title = ch('title').text().trim()
      const result = {
        status: true,
        result: {
          link: url,
          desc: title
        }
      }
      hasil.push(result)
    })
  })
  return hasil[0]
}

let getCookies = {
    "cookie": 'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
}

if (!getCookies.cookie) getCookies = {}

async function tiktok(url) {
    return new Promise (async (resolve, reject) => {
        try {
            let RegToktok = url.match(/(?:http(?:s|):\/\/|)(?:www\.|)tiktok.com\/@([-_0-9A-Za-z]{3,14})\/video\/([0-9]{8,50})(?:\?is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=(?:[0-9]{8,50}))|(?:http(?:s|):\/\/|)(?:vt\.tiktok\.com\/([-_0-9A-Za-z]{3,14}))/g)
            if (!RegToktok) return reject(new Error(String('Url Invalid')))
            const data = await axios({
                url: "https://musicaldown.com/id",
                method: "GET",
                headers: {
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
                }
            })
            const $ = cheerio.load(data.data)
            let FORM = {
                [`${$("#link_url").attr("name")}`]: url,
                [`${$("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name")}`]: $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value"),
                verify: $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value")
            }
            const getPost = await axios({
                url: "https://musicaldown.com/id/download",
                method: "POST",
                headers: {
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36',
                    "cookie": data.headers["set-cookie"].join("")
                },
                data: new URLSearchParams(Object.entries(FORM))
            })
            const c = cheerio.load(getPost.data)
            const Format = {
                nowm: c("body > div.welcome.section > div").find("div:nth-child(2) > div.col.s12.l8 > a:nth-child(4)").attr("href"),
                mp4: c("body > div.welcome.section").find("div > div:nth-child(2) > div.col.s12.l8 > a:nth-child(6)").attr("href"),
                original: c("body > div.welcome.section > div").find("div:nth-child(2) > div.col.s12.l8 > a:nth-child(8)").attr("href")
            }
            return resolve(Format)
        } catch(err) {
            throw reject(new Error(String(err)))
        }
    })
}




module.exports = { ytMp4, ytMp3, ytPlay, igDownloader, tiktok };