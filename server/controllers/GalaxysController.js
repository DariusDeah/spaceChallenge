import { galaxysService } from '../services/GalaxysService'
import BaseController from '../utils/BaseController'

export class GalaxysController extends BaseController {
  // REVIEW first thing we must do is create a constructor then set up our this.router then we put our http methods
  constructor() {
    // REVIEW Router set up
    super('api/galaxys')
    this.router
      //! HTTP methods
      .get('', this.getGalaxy)
      .post('', this.createGalaxy)
  }

  // ! in every function we must pass the request, response and next as prameters
  // make sure to async and try catch it
  // we'll send a respone of the galaxy service with res.send(____)
  async getGalaxy(req, res, next) {
    try {
      const galaxy = await galaxysService.getGalaxy()
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next) {
    try {
      const galaxy = await galaxysService.createGalaxy(req.body)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}
