import express from 'express';
import upload from '../utils/utils.js';

const router = express.Router();

// Middleware para verificar autenticación con GitHub
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ error: 'No autenticado. Inicia sesión con GitHub.' });
};

// Ruta POST /tasks/upload-task
router.post('/upload-task', ensureAuthenticated, upload.single('taskFile'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se proporcionó archivo' });
    }
    res.json({ message: `Tarea subida correctamente: ${req.file.filename}` });
  } catch (error) {
    console.error('Error subiendo tarea:', error.message);
    res.status(500).json({ error: 'Error al subir la tarea' });
  }
});

export default router;