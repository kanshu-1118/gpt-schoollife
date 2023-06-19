import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] })
const animals = ["dog","cat","rabbit"]

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
    animals.map((e,i)=>{
      return (
        <>
          <div>
            <h1>グルメサーチAPI</h1>
            <p>{e}</p>
          </div>
        </>
      )
    })
  }
}
