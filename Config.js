const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "16469305635"
global.ownername = "Ryuga"
global.ytname = "YT: ---"
global.socialm = "GitHub: ----"
global.location = "Indian"

global.ownername = 'Ryuga' //owner name
global.botname = 'Coral Q' //name of the bot

//sticker details
global.stickername = 'Coral Q Bot Stickers'
global.packname = 'Sticker By'
global.author = 'Ryuga'
//console view/theme
global.themeemoji = '🧩'
global.wm = "Ryuga"

//theme link
global.link = 'https://chat.whatsapp.com/FR4Md2zpt1Q7AMBNdl1N39'

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
