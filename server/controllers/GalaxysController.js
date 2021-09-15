import BaseController from '../utils/BaseController'

export class GlaxysController extends BaseController {
  constructor() {
    super('api/')
    this.router
      .get('/galaxy', this.getGalxy)
  }

  async getGalxy() {
    try {
      res.send()
    } catch (error) {

    }
  }
}
