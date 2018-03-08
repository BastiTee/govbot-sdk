# GovBot-SDK [![node: v6.11.x](https://img.shields.io/badge/node-v6.11.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/) [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](http://www.gnu.org/licenses/agpl-3.0) 
Das GovBot-SDK stellt eine Entwicklungsumgebung für den [GovBot](https://www.govbot.io) bereit,  
in der eigene Bot-Experten getestet und entwickelt werden können. Chatbots die mit diesem SDK entwickelt wurden können hinterher mit in den GovBot integriert werden.

## Installation und erster Start
``` 
$ git clone https://github.com/GovBotIO/govbot-sdk.git
$ cd govbot-sdk
$ npm install 
$ mv .env.demo .env
``` 
Das SDK wird mit folgendem Aufruf gestartet:
```
$ node --debug app.js
```

## Entwicklungsbereich
Der Expertenbot kann in "./additional_bots" analog zum "botSdkDemo" angelegt werden.
Der Name des aktiven Bots wird in der ./app.js in Zeile 6 festgelegt und entspricht dem Ordnernamen unter "./additional_bots".  


## Entwickler-Tools
#### BotFramework-Emulator ([Download](https://github.com/Microsoft/BotFramework-Emulator)):
##### Konfiguration: 
- Bot Endpoint URL: `http://localhost:3978/msg`
- App ID: -leer lassen-
- App Password: -leer lassen-
- Locale: `de`

Wenn das Betriebssystem zur Entwicklung eine andere Systemsprache außer de_DE nutzt, muss das Locale auf `de` gesetzt werden, da sonst ein Microsoft Translation Key (MICROSOFT_BING_TRANSLATE_KEY_1) notwendig ist, um die Anfragen zu übersetzen.

## Weitere Informationen
Weitere nützliche Informationen befinden sich im Ordner "./Doku".

## License
Dieses Projekt steht unter der [AGPL v3 license](http://www.gnu.org/licenses/agpl-3.0)
##
