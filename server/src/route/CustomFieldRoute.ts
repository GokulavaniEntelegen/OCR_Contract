import express, { Request, Response, Router } from 'express';
import CustomFieldModel from '../model/CustomField';
const router: Router = express.Router();

router.post('/custom-fields', async (req: Request, res: Response) => {
    try {
        const { documentType, key, description, dataType } = req.body;
        const newField = new CustomFieldModel({ documentType, key, description, dataType });
        await newField.save();
        res.status(201).json(newField);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

router.get('/custom-fields', async (_req: Request, res: Response) => {
    try {
        const fields = await CustomFieldModel.find().populate('documentType', 'name icon');
        res.status(200).json(fields);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/custom-fields/:id', async (req: Request, res: Response) => {
    try {
        const field = await CustomFieldModel.findById(req.params.id).populate(
            'documentType',
            'name icon'
        );
        if (!field) {
            res.status(404).json({ error: 'Custom field not found' });
            return;
        }
        res.status(200).json(field);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/custom-fields/:id', async (req: Request, res: Response) => {
    try {
        const updatedField = await CustomFieldModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedField) {
            res.status(404).json({ error: 'Custom field not found' });
            return;
        }
        res.status(200).json(updatedField);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

router.delete('/custom-fields/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await CustomFieldModel.findByIdAndDelete(req.params.id);
        if (!deleted) {
            res.status(404).json({ error: 'Custom field not found' });
            return;
        }
        res.status(200).json({ message: 'Custom field deleted successfully' });
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
});

export default router;
