import mongoose from 'mongoose'
import { GalaxySchema } from '../models/Galaxy.js'
import { StarSchema } from '../models/Star.js'
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Galaxys = mongoose.model('Galaxy', GalaxySchema);

Stars = mongoose.model('Star', StarSchema)
}

export const dbContext = new DbContext()
