import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import authRouter from './routes/access.js'; 
import ascentRouter from './routes/ascent.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Cambia a true en HTTPS/prod
}));
app.use(passport.initialize());
app.use(passport.session());

// Rutas
app.use('/auth', authRouter);
app.use('/tasks', ascentRouter);
app.get('/', (req, res) => {
  res.json({ message: '¡Backend listo! Prueba /auth/github para login.' });
});

// Inicia servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});