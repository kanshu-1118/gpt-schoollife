import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [shops,setShops] = useState([])


  useEffect(()=>{
    const fetchUsers = async()=>{
      const responce = await fetch(`/api/hello`)
      const data = await responce.json()
      setShops(data.users)
      console.log(data.users);
      
    }
    fetchUsers()
  },[])
  {
    // shops.map((e,i)=>{
      return (
        <>
          <div>
            <h1>グルメサーチAPI</h1>
            <p>{shops}</p>
          </div>
        </>
      )
    // })
  }
}
