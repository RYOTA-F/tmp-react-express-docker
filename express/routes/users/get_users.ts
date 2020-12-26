import { Request, Response } from 'express'
import { Handler } from '../../core/handler'
import { PARAMETER_INVALID } from '../../constants/error'
import { User } from '../../models/index'

type Data = {
  id: number
  name: string
}
export class GetUsers {
  handler: Handler

  constructor(req: Request, res: Response) {
    this.handler = new Handler(req, res)
  }

  /**
   * メイン処理
   */
  async main() {
    console.log('sequelize')

    const data = await this.getUsers()

    console.log('data', data)

    if (!data) {
      return this.handler.error(PARAMETER_INVALID)
    }

    return this.handler.json<Data[]>(data)
  }

  getUsers() {
    console.log('getUsers')

    return User.findAll({
      attributes: ['id', 'name'],
    })

    // return [
    //   { id: 10, name: 'test10' },
    //   { id: 20, name: 'test20' },
    //   { id: 30, name: 'test30' },
    // ]
  }
}
