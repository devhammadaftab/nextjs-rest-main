import type { NextApiRequest, NextApiResponse } from 'next'
import type { UserType } from 'interfaces'

// Fake users data
const users: UserType[] = [{ id: 1 }, { id: 2 }, { id: 3 }]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(users)
}
