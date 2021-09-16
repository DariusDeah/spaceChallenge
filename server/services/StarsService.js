import { dbContext } from '../db/DbContext'

class StarsService {
  async getStars() {
    const stars = dbContext.Stars.find()
    return stars
  }
}
export const starsService = new StarsService()
