import { dbContext } from '../db/DbContext'

class StarsService {
  async getStars() {
    const stars = dbContext.Stars.find()
  }
}
export const starsService = new StarsService()
