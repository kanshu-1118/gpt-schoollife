import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: any, res: any) {
  const APIKEY = `d885a2375ca7b09b`;
  const shopname = "網場"
  try {
    const response = await 
    fetch(`http://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${APIKEY}&name=${shopname}&format=json`);
    const data = await response.json(); // JSONデータを取得
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'API request failed' });
  }
}
