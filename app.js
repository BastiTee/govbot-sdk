var restify = require('restify');
var builder = require('botbuilder');
var config = {"variables": require('dotenv').config()};
const path = require('path');
const minimist = require('minimist');

//=========================================================
var defaultBotPath = './additional_bots/botSdkDemo'; // Bot path
//=========================================================
// Resolve cmd-line args and bot path

const showHelp = function() {
    console.log('Usage:');
    console.log('');
    console.log('    node [NODE_OPTS...] app.js [OPTIONS...]');
    console.log('');
    console.log('Optional arguments:');
    console.log('');
    console.log('    -b BOTPATH      Path to expert bot (default: ' +
        defaultBotPath + ')');
};
const argv = minimist(process.argv.slice(2));
if (argv.h !== undefined) {
    showHelp();
    process.exit(0);
}
var botPath = argv.b === undefined || argv.b == '' ? defaultBotPath : argv.b
botPath = botPath.replace(/\/+$/, '') // Remove pending folder slashes
var botName = path.basename(botPath);
console.log('Active bot: ' + botName + ' @ ' + botPath);

//=========================================================
// Bot Setup
//=========================================================
var govBotSdkVersion = "0.1.0";

// Create connector
var connector = new builder.ChatConnector();

// Setup Restify Server
var server = restify.createServer();
server.listen(config.port || config.variables.port || config.variables.PORT || 3978, function () {
  console.log('GovBotSDK (V %s) listening to %s', govBotSdkVersion, server.url);
});
server.post('/msg', connector.listen());

// Load shared functions
var shared = require('./modules/sharedFunctions');
var translator = require('./modules/translator');
var messageConverter = require('./modules/messageConverter');

// Load modules
var userDataManager = require('./modules/userDataManager');

//=========================================================
// Bots interceptor include
//=========================================================
var govBotInterceptor = require('./modules/govBotInterceptor');

// Create chat bot
var bot = new builder.UniversalBot(connector);
bot.use(govBotInterceptor);

// Load botbuilder extensions
var botbuilder_consts = require('botbuilder/lib/consts');
var botbuilder_logger = require('botbuilder/lib/logger');


//=========================================================
// SDK DemoBot include
//=========================================================
var aktiveBotModule = require(botPath + '/main');
console.log('Include ' +botName + ' on ' + '/' + botName);
bot.dialog('/' + botName , aktiveBotModule);

//=========================================================
// Bots Dialogs
//=========================================================
bot.dialog('/', function (session, args) {
  shared.log('Route: /');

if (session.message.text == "--reset--") {
    // reset bots userData
    var msg = userDataManager.reset(session);
    session.send(msg);
    session.replaceDialog('/');
  } else {
    var chatMessage = session.message.text;

    askExpert(botName, session)
  }
});


function askExpert(botName, session) {
  shared.log("beginDialog /" + botName);
  session.beginDialog('/' + botName);
}
