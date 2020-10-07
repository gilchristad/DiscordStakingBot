var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const fs = require('fs');
var stats = require('./stats.json')

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var staker = args[0];
        var cmd = args[1];
        
        let rawdata = fs.readFileSync('stats.json');
        let jsondata = JSON.parse(rawdata);

        switch (staker) {
            case 'cleffs':
                if (cmd.substring(0, 1) == 'w') {
                    amount = parseInt(cmd.substring(1));
                    cmd = "win";
                }
                else if (cmd.substring(0, 1) == "l") {
                    amount = parseInt(cmd.substring(1));
                    cmd = "lose";
                }
                switch(cmd){
                    case 'today':
                        today = jsondata.cleffs.today;
                        bot.sendMessage({
                            to: channelID,
                            message: `Cleffs' total for the day is ${today}M`
                        });
                        break;
                    case 'total':
                        total = jsondata.cleffs.total;
                        bot.sendMessage({
                            to: channelID,
                            message: `Cleffs' all time total is ${total}M`
                        });
                        break;
                    case 'win':
                        
                        newtotal = jsondata.cleffs.total + amount;
                        newtoday = jsondata.cleffs.today + amount;
                        jsondata.cleffs.total = newtotal;
                        jsondata.cleffs.today = newtoday;
                        data = JSON.stringify(jsondata);
                        fs.writeFileSync('stats.json', data);
                        bot.sendMessage({
                            to: channelID,
                            message: `Cleffs wins POGGERS`
                        });
                        break;
                    case 'lose':
                        newtotal = jsondata.cleffs.total - amount;
                        newtoday = jsondata.cleffs.today - amount;
                        jsondata.cleffs.total = newtotal;
                        jsondata.cleffs.today = newtoday;
                        data = JSON.stringify(jsondata);
                        fs.writeFileSync('stats.json', data);
                        bot.sendMessage({
                            to: channelID,
                            message: `Cleffs loses PepeHands`
                        });
                        break;
                }
                break;
            case 'jez':
                if (cmd.substring(0, 1) == 'w') {
                    amount = parseInt(cmd.substring(1));
                    cmd = "win";
                }
                else if (cmd.substring(0, 1) == "l") {
                    amount = parseInt(cmd.substring(1));
                    cmd = "lose";
                }
                switch (cmd) {
                    case 'today':
                        
                        today = jsondata.jez.today;
                        bot.sendMessage({
                            to: channelID,
                            message: `Jez's total for the day is ${today}M`
                        });
                        break;
                    case 'total':
                        total = jsondata.jez.total;
                        bot.sendMessage({
                            to: channelID,
                            message: `Jez's all time total is ${total}M`
                        });
                        break;
                    case 'win':
                        newtotal = jsondata.jez.total + amount;
                        newtoday = jsondata.jez.today + amount;
                        jsondata.jez.total = newtotal;
                        jsondata.jez.today = newtoday;
                        data = JSON.stringify(jsondata);
                        fs.writeFileSync('stats.json', data);
                        bot.sendMessage({
                            to: channelID,
                            message: `Jez wins POGGERS`
                        });
                        break;
                    case 'lose':
                        newtotal = jsondata.jez.total - amount;
                        newtoday = jsondata.jez.today - amount;
                        jsondata.jez.total = newtotal;
                        jsondata.jez.today = newtoday;
                        data = JSON.stringify(jsondata);
                        fs.writeFileSync('stats.json', data);
                        bot.sendMessage({
                            to: channelID,
                            message: `Jez loses PepeHands`
                        });
                        break;
                }
                break;
            case 'licbo':
                if (cmd.substring(0, 1) == 'w') {
                    amount = parseInt(cmd.substring(1));
                    cmd = "win";
                }
                else if (cmd.substring(0, 1) == "l") {
                    amount = parseInt(cmd.substring(1));
                    cmd = "lose";
                }
                switch (cmd) {
                    case 'today':
                        today = jsondata.licbo.today;
                        bot.sendMessage({
                            to: channelID,
                            message: `Licbo's total for the day is ${today}M`
                        });
                        break;
                    case 'total':
                        total = jsondata.licbo.total;
                        bot.sendMessage({
                            to: channelID,
                            message: `Licbo's all time total is ${total}M`
                        });
                        break;
                    case 'win':
                        newtotal = jsondata.licbo.total + amount;
                        newtoday = jsondata.licbo.today + amount;
                        jsondata.licbo.total = newtotal;
                        jsondata.licbo.today = newtoday;
                        data = JSON.stringify(jsondata);
                        fs.writeFileSync('stats.json', data);
                        bot.sendMessage({
                            to: channelID,
                            message: `Licbo wins POGGERS`
                        });
                        break;
                    case 'lose':
                        newtotal = jsondata.licbo.total - amount;
                        newtoday = jsondata.licbo.today - amount;
                        jsondata.licbo.total = newtotal;
                        jsondata.licbo.today = newtoday;
                        data = JSON.stringify(jsondata);
                        fs.writeFileSync('stats.json', data);
                        bot.sendMessage({
                            to: channelID,
                            message: `Licbo loses PepeHands`
                        });
                        break;
                }
                break;
            case 'carter':
                if (cmd.substring(0, 1) == 'w') {
                    amount = parseInt(cmd.substring(1));
                    cmd = "win";
                }
                else if (cmd.substring(0, 1) == "l") {
                    amount = parseInt(cmd.substring(1));
                    cmd = "lose";
                }
                switch (cmd) {
                    case 'today':
                        today = jsondata.carter.today;
                        bot.sendMessage({
                            to: channelID,
                            message: `Carter's total for the day is ${today}M`
                        });
                        break;
                    case 'total':
                        total = jsondata.carter.total;
                        bot.sendMessage({
                            to: channelID,
                            message: `Carter's all time total is ${total}M`
                        });
                        break;
                    case 'win':
                        newtotal = jsondata.carter.total + amount;
                        newtoday = jsondata.carter.today + amount;
                        jsondata.carter.total = newtotal;
                        jsondata.carter.today = newtoday;
                        data = JSON.stringify(jsondata);
                        fs.writeFileSync('stats.json', data);
                        bot.sendMessage({
                            to: channelID,
                            message: `Carter wins POGGERS`
                        });
                        break;
                    case 'lose':
                        newtotal = jsondata.carter.total - amount;
                        newtoday = jsondata.carter.today - amount;
                        jsondata.carter.total = newtotal;
                        jsondata.carter.today = newtoday;
                        data = JSON.stringify(jsondata);
                        fs.writeFileSync('stats.json', data);
                        bot.sendMessage({
                            to: channelID,
                            message: `Carter loses PepeHands`
                        });
                        break;
                }
                break;
        }
    }
});