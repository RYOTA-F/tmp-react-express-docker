import dayjs = require('dayjs')
import { Request, Response } from 'express'
import { Handler } from '../../core/handler'
import { PARAMETER_INVALID } from '../../constants/error'
import { User } from '../../models/index'

interface Data {
  id: number
  name: string
  age: number
  created_at: string
  updated_at: string
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
    const data = await this.getUsers()

    if (!data) {
      return this.handler.error(PARAMETER_INVALID)
    }

    return this.handler.json<Data[]>(data)
  }

  async getUsers(): Promise<Data[]> {
    const data = await User.findAll({
      attributes: ['id', 'name', 'age', 'created_at', 'updated_at'],
    })

    return data.map((v) => {
      return {
        id: v.id,
        name: v.name,
        age: v.age,
        created_at: dayjs(v.created_at).format('YYYY年M月D日 HH時mm分'),
        updated_at: dayjs(v.updated_at).format('YYYY年M月D日 HH時mm分'),
      }
    })
  }
}
