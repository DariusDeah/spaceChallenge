import { dbContext } from '../db/DbContext'

class GalaxysService {
  async createGalaxy(galaxyData) {
    const galaxy = await dbContext.Galaxys.create(galaxyData)
    return galaxy
  }

  // ! we create a async function and set the a varible that refrences our db context and then run the acourding method
  // db context is very similar to proxy state
  async getGalaxy() {
    const galaxy = await dbContext.Galaxys.find()
    return galaxy
  }
}
export const galaxysService = new GalaxysService()
