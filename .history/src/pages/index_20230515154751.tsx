import { Inter } from 'next/font/google'
import { useEffect } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(()=>{
    const postData = async()=>{
      const responce = await fetch(`/src/pages/api/hello.ts`)
      const data = await responce.json();
    }
  })
  return (
    <>
    </>
  )
}
