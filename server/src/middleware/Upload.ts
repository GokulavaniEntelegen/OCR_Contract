import multer, { StorageEngine } from 'multer';
import path from 'path';

// Define storage engine
const storage: StorageEngine = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/contracts/');
    },
    filename: function (req, file, cb) {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

// Multer instance
const upload = multer({ storage });

export default upload;
