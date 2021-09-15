import { Mongoose, Schema } from 'mongoose'

export const Star = new Schema({
  name: {
    type: String,
    required: true
  },
  id: { type: Schema.Types.ObjectId }
})
