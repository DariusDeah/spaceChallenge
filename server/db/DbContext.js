import mongoose from 'mongoose'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Galaxy = mongoose.model('Galaxy')
}

export const dbContext = new DbContext()
