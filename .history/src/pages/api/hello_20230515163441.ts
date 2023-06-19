// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }


export default async function handler(req:any, res:any) {

  const APIKYE = `3f4adeaa9ab4bba4`
  const shopName = "網場"

  const response = await fetch(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${APIKYE}&name=${shopName}&format=json`)
  const users = await response.json()
  res.status(200).json({ users })
}

