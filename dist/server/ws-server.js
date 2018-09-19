"use strict";
/**
 * @name ws-server Instanciation d'un serveur websocket sur un serveur http
 */
Object.defineProperty(exports, "__esModule", { value: true });
// Importation des packages  nécessaires
const express = require("express"); // Framework NodeJS
const http = require("http"); // Module serveur HTTP
const WebSocket = require("ws"); // Module serveur websocket
// Initialisation d'une nouvelle application Express
const app = express();
// Initialise un serveur HTTP (support de communication avec le client)
const server = http.createServer(app);
// Initialise une instance de Websocket 
const wss = new WebSocket.Server({ server });
// le serveur websocket ecoute certains evenements...
wss.on('connection', (ws) => {
    // La connexion est okay, on envoi un simple message
    ws.on('message', (message) => {
        // Affiche le message dans la console et retourne au client
        console.log('Recu: %s', message);
        ws.send(`Helo vous venez d'envoyer -> ${message}`);
    });
    //envoie immediatement une information au client connecte
    ws.send('Salut, je suis le serveur websocket');
});
//demarre le serveur
server.listen(process.env.PORT || 8999, () => {
    console.log(`Le serveur est demarré sur l'adresse : ${server.address()} :)`);
    // console.log(`Le serveur est demarré sur l'adresse : ${server.address()} :)`)
});
//# sourceMappingURL=ws-server.js.map