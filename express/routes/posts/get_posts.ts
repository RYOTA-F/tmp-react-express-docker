import { Request, Response } from 'express'
import { Handler } from '../../core/handler'

type Data = {
  id: number
  name: string
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
    const data = [
      { id: 10, name: 'test10' },
      { id: 20, name: 'test20' },
      { id: 30, name: 'test30' },
    ]

    return this.handler.json<Data[]>(data)
  }
}
