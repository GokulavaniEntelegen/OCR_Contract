import express, { Request, Response } from 'express';
import DocumentTypeModel from '../model/DocumentType';
const router = express.Router();

router.post('/document-types', async (req: Request, res: Response) => {
    try {
        const { name, icon }: { name: string; icon: string } = req.body;
        const newDoc = new DocumentTypeModel({ name, icon });
        await newDoc.save();
        res.status(201).json(newDoc);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/document-types', async (_req: Request, res: Response) => {
    try {
        const docs = await DocumentTypeModel.find();
        res.status(200).json(docs);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
