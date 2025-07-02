import express, { Application } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { config } from 'dotenv';

import ContractRoute from '../src/route/ContractRoute';
import CustomFieldRoute from '../src/route/CustomFieldRoute';
import DocumentTypeRoute from '../src/route/DocumentTypeRoute';
const app: Application = express();
config();

app.use(cors());
app.use(bodyParser.json());

mongoose
    .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/documentApp')
    .then(() => console.log('MongoDB connected'))
    .catch((err: Error) => console.error('MongoDB connection error:', err));

app.use('/api', DocumentTypeRoute);
app.use('/api', CustomFieldRoute);
app.use('/api', ContractRoute);

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
