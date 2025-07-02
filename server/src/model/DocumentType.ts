import mongoose, { Schema, Document } from 'mongoose';

export interface IDocumentType extends Document {
    name: string;
    icon: string;
}

const documentTypeSchema = new Schema<IDocumentType>({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
});

const DocumentTypeModel = mongoose.model<IDocumentType>('DocumentType', documentTypeSchema);
export default DocumentTypeModel;
