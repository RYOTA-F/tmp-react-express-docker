import { Request, Response } from 'express'
import { Handler } from '../../core/handler'
import { PARAMETER_INVALID } from '../../constants/error'
import { Post } from '../../models/index'

type Data = {
  id: number
  message: string
}
export class GetPosts {
  handler: Handler

  constructor(req: Request, res: Response) {
    this.handler = new Handler(req, res)
  }

  /**
   * メイン処理
   */
  async main() {
    const data = await this.getPosts()

    if (!data) {
      return this.handler.error(PARAMETER_INVALID)
    }

    return this.handler.json<Data[]>(data)
  }

  getPosts() {
    return Post.findAll({
      attributes: ['id', 'message', 'created_at', 'updated_at'],
    })
  }
}
