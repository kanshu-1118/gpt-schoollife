import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [shops,setShops] = useState([])
  useEffect(()=>{
    const fetchUsers = async()=>{
      const responce = await fetch(`/src/pages/api/hello.ts`)
      const data = await responce.json();
      setShops(data.users)
    }
    fetchUsers()
  },[])
  return (
    <>
    </>
  )
}
