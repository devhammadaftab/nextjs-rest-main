import type { NextApiRequest, NextApiResponse } from 'next'
import { BASE_URL } from '..';
const urlparser = require('url');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    url,
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      let pathname = urlparser.parse(url).pathname
      let response = await fetch(BASE_URL + pathname + "/" + id)
      let user = await response.json()
      res.status(200).json(user)
      break
    case 'PUT':
      // Update or create data in your database
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

//https://swapi.dev/api/people
