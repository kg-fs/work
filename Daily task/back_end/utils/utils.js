import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

// Configurar __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de multer
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../tasks')); // Carpeta tasks/
    },
    filename: (req, file, cb) => {
      const timestamp = Date.now();
      const username = req.user?.username || 'unknown';
      const filename = `${username}_${timestamp}_${file.originalname}`;
      cb(null, filename); // Ej. usuario_1635781234567_tarea.txt
    }
  }),
  limits: { fileSize: 4 * 1024 * 1024 }, // Máx 4MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'text/plain') cb(null, true);
    else cb(new Error('Solo archivos .txt'), false);
  }
});

export default upload;