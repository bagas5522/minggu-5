
import express from "express";
import { httpServerHandler } from "cloudflare:node";

const app = express();

app.use(express.json());

// Endpoint halaman utama
app.get("/", (req, res) => {
  res.json({
    message: "Express.js berjalan di Cloudflare Workers!",
    project: "Minggu 5",
    status: "success"
  });
});

// Endpoint status API
app.get("/api/status", (req, res) => {
  res.json({
    status: "aktif",
    service: "Minggu 5 Express API",
    runtime: "Cloudflare Workers"
  });
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });

