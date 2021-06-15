import { Document, Schema, SchemaTypes } from 'mongoose';
import * as mongoose from 'mongoose';
import * as UUID from 'uuid'

export interface IBMIInfoDocuments extends Document {
    _id: string,
    gender: string,
    heightCm: string,
    weightKg: string,
    bmi: Number,
    bmiCategory: string,
    healthRisk: string
}

export class BMIInfoModel {
    BMIModel: mongoose.Model<IBMIInfoDocuments>;

    // Method to define scheam
    public async defineSchema(
    ) {
        try {
            this.BMIModel = mongoose.model<IBMIInfoDocuments>('bmi')
        } catch (error) {
            this.BMIModel = mongoose.model<IBMIInfoDocuments>('bmi', new Schema({
                        _id: SchemaTypes.String
                        , gender: SchemaTypes.String
                        , heightCm: SchemaTypes.String
                        , weightKg: SchemaTypes.String
                        , bmi: SchemaTypes.Number
                        , bmiCategory: SchemaTypes.String
                        , healthRisk: SchemaTypes.String
                    }, { versionKey: false }));
        }
    }

    // method to insert data
    public async insertData(
        gender: string,
        heightCm: string,
        weightKg: string,
        bmi: number,
        bmiCategory: string,
        healthRisk: string
    ){
        try {
            if (this.BMIModel != undefined) {
                await this.BMIModel.insertMany(
                    {
                        _id: UUID.v4(),
                        gender: gender,
                        heightCm: heightCm,
                        weightKg: weightKg,
                        bmi: bmi,
                        bmiCategory: bmiCategory,
                        healthRisk: healthRisk
                    });
            }
        } catch (error) {
            throw error;
        }
    }
}
