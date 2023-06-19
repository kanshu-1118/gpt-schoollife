
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