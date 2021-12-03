__path = process.cwd()
var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
  console.log('')
}

var router  = express.Router();

var creator = "@Ian"
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var ig = require('insta-fetcher');
var dbot = require('dbot-api');


var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var { Base, Gempa } = require('./../lib');
var { ytMp4, ytMp3, ytPlay, igDownloader, tiktok } = require('./datos.js')
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";


loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Problemas con apikey',
        getApikey: 'Apikey??? Contact Me On WhatsApp'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Problemas con url'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Problemas con text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Problemas con text2'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Problemas con text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Problemas con theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Problemas con username'
    },
    notheme: {
      status: false,
        creator: `${creator}`,
        code: 406,
        message: 'El tema no está disponible, ingrese a texmaker y cambie la url.'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Apikey??? Contact Me On WhatsApp'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, tal vez tu enlace no sea válido.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'Problemas con status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'Tal vez estamos en mantenimiento'
    }
}

const listkey = ["DrkBot", "ianvanh"];

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------DrkBot'+'Ian-VanH';
        
router.get('/cekapikey', async (req, res, next) => {
  var apikeyInput = req.query.apikey
  if(!apikeyInput) return res.json(loghandler.notparam)
  a = await cekApiKey(apikeyInput)
  if (a) {
  json = JSON.stringify({
    status: true,
    creator: creator,
    result: {
            status:a.status,
      id: a._id,
      apikey: a.apikey,
      more_info: {
        email: a.email,
        nomor_hp: a.nomor_hp,
        name: a.name,
        age: a.age,
        country: a.country,
        exp:a.exp,
      },
    },
    message: `jangan lupa follow ${creator}`
  })
} else {
  json = JSON.stringify({
    status: false
  })
}
res.send(JSON.parse(json))
})

router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'DrkBot') return res.json(loghandler.invalidKey)

    try {
        zahirr.insert({
          status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'Datos agregados con éxito, status : ' + status + ', Apikey : ' + apikeyInput + ', Email : ' + email + ', Número de teléfono móvil : ' + nomorhp + ', Nombre :  ' + name + ', Edad : ' + age + ', Pais : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/remove', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'DrkBot') return res.json(loghandler.invalidKey)

    try {
        zahirr.remove({
            status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
             res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'Datos eliminados con éxito, status : ' + status + ', Apikey : ' + apikeyInput + ', Email : ' + email + ', Número de teléfono móvil : ' + nomorhp + ', Nombre :  ' + name + ', Edad : ' + age + ', Pais : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

/*=====> INICIO <=====*/

router.get('/new/ytv', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!url) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    ytMp4(url)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/new/yta', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!url) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    ytMp3(url)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/new/ytplay', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            name = req.query.query
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!name) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    ytPlay(name)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/new/igdown', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!url) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    igDownloader(url)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/new/tiktok', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!url) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    tiktok(url)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/new/wallpaper', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            name = req.query.query
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!name) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    dbot.wallpaper(name)
        .then(result => {
            const wall_a = Math.floor(result.length*Math.random());
            res.json({
                status : true,
                creator : `${creator}`,
                result : result[wall_a]
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

/*##################### New Commands #####################*/


router.get('/dbot/down/2igstalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!username) return res.json({ status : false, creator : `${creator}`, message : "Problemas con username"})

    ig.fetchUser(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/dbot/down/igstalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!username) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    dbot.igstalk(username)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/dbot/down/mediafire', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!url) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    dbot.mediafire(url)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/dbot/down/igdl', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!url) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    dbot.igdl(url)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result[0]
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/dbot/down/youtube', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!url) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    dbot.youtube(url)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/dbot/down/twitter', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.query
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!url) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    dbot.twitter(url)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

// router.get('/dbot/down/fbdown', async (req, res, next) => {
//         var apikeyInput = req.query.apikey,
//             url = req.query.url
            
//   if(!apikeyInput) return res.json(loghandler.notparam)
//   if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
//   if (!url) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

//     dbot.fbdown(url)
//         .then(result => {
//             res.json({
//                 status : true,
//                 creator : `${creator}`,
//                 result : result
//             })
//         }).catch(e => {
//             res.json({
//                 status : false,
//                 creator : `${creator}`,
//                 message : "error, parece que tenemos un error."
//             })
//         })
// })

router.get('/dbot/search/liric', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            name = req.query.query
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!name) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    dbot.liric(name)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/dbot/search/playstore', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            name = req.query.query
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!name) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    dbot.playstore(name)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/dbot/search/pinterest', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            name = req.query.query
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
  if (!name) return res.json({ status : false, creator : `${creator}`, message : "Ingrese una url valida."})

    dbot.pinterest(name)
        .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})

router.get('/tiktok', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     dbot.ttdownloader(url)
         .then(result => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : result
            })
        }).catch(e => {
            res.json({
                status : false,
                creator : `${creator}`,
                message : "error, parece que tenemos un error."
            })
        })
})
/*##################### End #####################*/

router.get('/tiktod/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)

    TikTokScraper.getUserProfileInfo(username, options)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, parece que tenemos un error."
             })
         })
})


router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "Problemas con query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `no te olvides de seguir a ${creator}`
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})


router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `no te olvides de seguir a ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/base', async (req, res, next) => {
  var type = req.query.type,
    encode = req.query.encode,
    decode = req.query.decode,
    apikeyInput = req.query.apikey;
    if (!apikeyInput) return res.json(loghandler.notparam)
    if (apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
    if (!type) return res.json({status: false, creator, code: 404, message: 'Problemas con type, type yang tersedia : base64 , base32'})
    if (type == 'base64' && encode){
        Base("b64enc", encode)
        .then(result => {
          res.json({
            status:true,
            creator: `${creator}`,
            result
          })
        })
      } else if (type == 'base64' && decode){
        Base("b64dec", decode)
        .then(result => {
          res.json({
            status: true,
            creator: `${creator}`,
            result
          })
        })
      } else if (type == 'base32' && encode){
        Base('b32enc', encode)
        .then(result => {
          res.json({
            status:true,
            creator: `${creator}`,
            result
          })
        })
      } else if (type == 'base32' && decode){
        Base('b32dec', decode)
        .then(result => {
          res.json({
            status:true,
            creator: `${creator}`,
            result
          })
        })
      } else if(!(encode || decode)){
        res.json({
          status:false,
          creator: `${creator}`,
          message: "tambahkan parameter encode/decode"
        })
      } else {
        res.json(loghandler.error)
      }
})

router.get('/nulis', async (req, res, next) => {
  var apikeyInput = req.query.apikey,
            text = req.query.text
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
    if (!text) return res.json({ status : false, creator : `${creator}`, message : "Entrada de texto invalida"})

       fetch(encodeURI(`http://salism3.pythonanywhere.com/write/?text=${text}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
          if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=93f5c8966cfaf3ca19051ee9f85c14f3&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                  console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'google-suggestion') {
          if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
          if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                  console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'battlefield') {
          if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                  console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/metallic', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'neon' && theme != 'glow') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'neon') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                  console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'glow') {
            request.post({
                url: "https://photooxy.com/other-design/create-metallic-text-glow-online-188.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/alam', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'summer' && theme != 'flower') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'summer') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                  console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'flower') {
            request.post({
                url: "https://photooxy.com/art-effects/flower-typography-text-effect-164.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/random', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'text-burn' && theme != 'art-quote') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'text-burn') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                  console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'art-quote') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/roses', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'wooden-boarch' && theme != 'golden') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'wooden-boarch') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                  console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'golden') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `no te olvides de seguir a ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'La URL desaparecerá después de 2 minutos.'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/github/stalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "Entrada de texto invalida"})

       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
              author: 'Ian',
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})
router.get('/repository/stalk', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            username = req.query.username
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
    if (!username) return res.json({ status : false, creator : `${creator}`, message : "Ingrese el nombre del repositorio que desea encontrar"})

       fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/searchrepo?q=${username}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
              author: 'Ian',
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})

router.get('/youtube/mp3', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Entrada de texto invalida"})

       fetch(encodeURI(`https://api.zeks.me/api/ytmp3?apikey=xMYCfgmBHH7dR6S87KJet1zUXa1&url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
              author: 'Ian',
              ian: result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})

router.get('/youtube/mp4', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Entrada de texto invalida"})

       fetch(encodeURI(`https://api.zeks.me/api/ytmp4?apikey=xMYCfgmBHH7dR6S87KJet1zUXa1&url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
              author: 'Ian',
              ian: result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})

router.get('ss', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            url = req.query.url
            
  if(!apikeyInput) return res.json(loghandler.notparam)
  if(apikeyInput != 'DrkBot') return res.json(loghandler.invalidKey)
    if (!url) return res.json({ status : false, creator : `${creator}`, message : "Entrada de texto invalida"})

       fetch(encodeURI(`https://api.apiflash.com/v1/urltoimage?access_key=9260ae15ebae448692cae6a5809c6e85&full_page=true&format=png&response_type=json&url=${url}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
              author: 'Ian',
                 result
             })
         })
         .catch(e => {
          res.json(loghandler.error)
})
})

/*=====> FIN <=====*/

module.exports = router
