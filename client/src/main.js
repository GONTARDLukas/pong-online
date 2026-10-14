const WS_URL = import.meta.env.VITE_WS_URL ?? "ws://localhost:3000";
const ws = new WebSocket(WS_URL);
ws.onopen = () => console.log("Connecté");
ws.onmessage = (e) => console.log("Reçu :", e.data);