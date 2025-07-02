import mongoose, { Schema, Document, Types } from 'mongoose';

export interface ICustomField extends Document {
    documentType: Types.ObjectId;
    key: string;
    description?: string;
    dataType: 'String' | 'Number' | 'Date' | 'Boolean';
}

const customFieldSchema = new Schema<ICustomField>({
    documentType: {
        type: Schema.Types.ObjectId,
        ref: 'DocumentType',
        required: true,
    },
    key: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    dataType: {
        type: String,
        enum: ['String', 'Number', 'Date', 'Boolean'],
        required: true,
    },
});

const CustomFieldModel = mongoose.model<ICustomField>('CustomField', customFieldSchema);
export default CustomFieldModel;
