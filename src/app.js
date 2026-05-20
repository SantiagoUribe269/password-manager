const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(helmet());
app.use(cors({
  origin: `https://localhost:${process.env.PORT}`,
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

//frontend desde /public
app.use(express.static(path.join(__dirname, '..', 'public')));

//API routes
app.use('/api', authRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const options = {
  key: fs.readFileSync(path.join(__dirname, '..', 'certs', 'server.key')),
  cert: fs.readFileSync(path.join(__dirname, '..', 'certs', 'server.crt')),
};

const PORT = process.env.PORT || 3443;

https.createServer(options, app).listen(PORT, () => {
  console.log(`Servidor seguro corriendo en https://localhost:${PORT}`);
});