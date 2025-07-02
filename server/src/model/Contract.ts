import mongoose, { Document, Schema, Types } from 'mongoose';

interface UploadedFile {
    fileName: string;
    fileType: string;
    filePath: string;
}

interface ContractField {
    customField: Types.ObjectId;
    value: string;
}

export interface IContract extends Document {
    documentType: Types.ObjectId;
    description?: string;
    uploadedFiles: UploadedFile[];
    fields: ContractField[];
    createdAt?: Date;
    updatedAt?: Date;
}

const contractSchema = new Schema<IContract>(
    {
        documentType: {
            type: Schema.Types.ObjectId,
            ref: 'DocumentType',
            required: true,
        },
        description: {
            type: String,
        },
        uploadedFiles: [
            {
                fileName: { type: String },
                fileType: { type: String },
                filePath: { type: String },
            },
        ],
        fields: [
            {
                customField: {
                    type: Schema.Types.ObjectId,
                    ref: 'CustomField',
                    required: true,
                },
                value: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    { timestamps: true }
);

const ContractModel = mongoose.model<IContract>('Contract', contractSchema);
export default ContractModel;
