import { Mongoose, SchemaType, Schema } from 'mongoose'

export const PlanetSchema = new Schema(
  {
    name: { type: String, required: true },
    id: { type: Schema.Types.ObjectId }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
