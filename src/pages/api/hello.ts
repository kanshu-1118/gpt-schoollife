// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }


// geo
export default async function GeoAPI(params:any,res:any) {
  const APIKEY = `LwaxZjcW2AH1hILZqiQ68zj16CHPoKRjZDiU`

  const response = await


  fetch(`https://mcqmo68lcd.microcms.io/api/v1/blog`,
  {
    headers: { 'X-MICROCMS-API-KEY': APIKEY }
  })
  const geo = await response.json()
  res.status(200).json({geo})
}