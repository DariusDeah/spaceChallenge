import mongoose from 'mongoose'
import { GalaxySchema } from '../models/Galaxy.js'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Galaxy = mongoose.model('Galaxy', GalaxySchema)
}

export const dbContext = new DbContext()
