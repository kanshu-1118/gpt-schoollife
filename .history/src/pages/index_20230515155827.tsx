import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [users,setUsers] = useState()
  useEffect(()=>{
    const fetchUsers = async()=>{
      const responce = await fetch(`/src/pages/api/hello.ts`)
      const data = await responce.json();
      setUsers(data.users)
    }
    fetchUsers()
  },[])
  return (
    <>
    </>
  )
}
