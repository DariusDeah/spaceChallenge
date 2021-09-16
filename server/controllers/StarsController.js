import { starsService } from '../services/StarsService'
import BaseController from '../utils/BaseController'

export class StarsController extends BaseController {
  constructor() {
    super('api/stars')
    this.router
      .get('', this.getStars)
  }

  async getStars(req, res, next) {
    try {
      const stars = starsService.getStars()
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }
}
