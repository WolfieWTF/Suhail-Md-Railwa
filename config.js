const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "2348129859507"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Suhail_Md:Suhail_Md@cluster1.0tlyzhm.mongodb.net/?retryWrites=true&w=majority"
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-g1y0.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,2348129859507";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348129859507";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Wolfie-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "Wolfie",
  ownername:process.env.OWNER_NAME|| "Wisdom",


  sessionName:process.env.SESSION_ID|| "SESSION_01_01_20_24_eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0l2enFIaENFeE9Dd1o2eW54M1cxUE5zb2pncFg4UjB1Ymk4WVJwYnBHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUlZdE4xclltdEs0N0lYQkFrZDJIejBwdTFYclV5NGRtYnM2OGNQaWVYbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RWRxMUhObGhBZ0g2VmNwNnEvTFptM0tUZ3JhRXJHNzRNSHhDb1JocGs4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2eDFrbm0relR6QXBGYnM5OXRQKzlMYjVRcUFBUmpHMGZ5c0dwSUJYTmxnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtPN3dsODNQUTlaSDlPUmVPTE1ZS0dSWVYvM0JDM2dtV1h4ZEFVc2xmbk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkE4dWd5K2Qzc1p4MlFNQUEyM1RzaEV4L2hRV05ONlJBNlovTDVQaTJLRzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUNDcjdSeHJ2ZzhmdWVHNGVtUWJZRmtxTTg1QkZRaGRIKzdIS0JiallGcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHNrcVRucUNleXFHK0dodW9oUUoxRzlQNGNkR1A0SHFBYkxobi92Y1p6QT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRHaFF2dU1obzh2RFZOdHh1VjlwdjhFSG9WM0xLbHZob21RVmhCTEF2QXNHU2N1cFM2cUtxRlhxWmdieGhFNVlMSVlBcjFCZjZHRXNJV3RPalBoa2pRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJqd0Voc3FOdGhTVVhXUnZKbjVMajQ0UERqT2ppS0pXczZ0V1NweUlzNXVRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvSmNaN3V5c1FLLVIzQTBMMU4tUjh3IiwicGhvbmVJZCI6ImYyMjI4MTk2LTA0MWMtNGE3Zi04ZWFmLTJiNTEzNWY5MzRkNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUWnE3NThRcXF0aDMzNzM3dk5jSi8weTV6d2M9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEvdGNvZUIzeWdiend1anNoN1djb0tPc09ybz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x5SHZjY0JFTVBNODZ3R0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTGZ0UTNUemdtQjYxRFJVUFp0QmxweVV6aWJDdUdqazdDT2xqZjlBRVNBdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRHA5SDkzZlZQcVJRZDNYeEpmTUd1WElGOFZlcW1QUmVxWFpibzVvcHZoZWhUWnB5NlVyUlh2OXp4MnFQUDZTZ25sOGp2VjJZcENYNDVTdldCdnVuQ0E9PSIsImRldmljZVNpZ25hdHVyZSI6IjVVQXkrdEtjamF5R0hRR1dTSXhQbm9tMVdSZnh5UWVNeFd0dFViajI3TzY4bElmTHFDZUJZMi9jWHVSTGR0NlJRS2twTjVSQlRhem9sZktWbko0eGp3PT0ifSwibWUiOnsiaWQiOiIyMzQ4MTI5ODU5NTA3OjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2ZkvCdnpfwnZmH8J2ZgfCdnpjwnZ6i8J2ZkvCdmY/wnZmB8J+QuiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTI5ODU5NTA3OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzM3VU4wODRKZ2V0UTBWRDJiUVphY2xNNG13cmhvNU93anBZMy9RQkVnTSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcwNDc4MTM4M30=",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
