import express, { Request, Response } from 'express';
import upload from '../middleware/Upload';
import ContractModel from '../model/Contract';

const router = express.Router();

router.post('/contracts', upload.array('files'), async (req: Request, res: Response) => {
    try {
        const files = (req.files as Express.Multer.File[]).map(file => ({
            fileName: file.originalname,
            fileType: file.mimetype,
            filePath: file.path,
        }));

        const { documentType, description, fields } = req.body;

        const contract = new ContractModel({
            documentType,
            description,
            uploadedFiles: files,
            fields: JSON.parse(fields), // fields expected to be a JSON string
        });

        await contract.save();
        res.status(201).json(contract);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

export default router;
