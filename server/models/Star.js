import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const StarSchema = new Schema(
  {
    name: { type: String, required: true },
    id: { type: Schema.Types.ObjectId }

  },

  { timestamps: true, toJSON: { virtuals: true } }
)
