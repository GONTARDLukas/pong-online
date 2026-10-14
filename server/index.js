import { WebSocketServer } from "ws";

const ALLOWED = [
  "https://GONTARDLukas.github.io",
  "http://localhost:5173",
];

const wss = new WebSocketServer({
  port: 3000,
  verifyClient: ({ origin }) => ALLOWED.includes(origin),
});

wss.on("connection", (socket) => {
  console.log("Joueur connecté");
  socket.on("message", (data) => {
    // TODO : traiter les inputs, boucle de jeu à tick fixe
  });
});
console.log("Serveur sur le port 3000");