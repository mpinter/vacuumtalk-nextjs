// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ greeting: 'Hello from the API!' })
}

export default handler
