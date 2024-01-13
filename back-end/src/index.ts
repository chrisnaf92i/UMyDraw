import express from "express";
import { Server } from "socket.io"
const app = express()

const PORT = process.env.PORT || 4000

const server = app.listen(PORT, () => console.log(`Lancement du serveur sur le port ${PORT}`))

const io = new Server(server);

io.on("connect", (socket) => {
    console.log("Un utilisateur c'est connecter")
})