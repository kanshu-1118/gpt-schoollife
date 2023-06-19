import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [posts, setPosts] = useState([]);


  useEffect(()=>{
    const fetchPosts = async()=>{
      const responce = await fetch(`/api/hello`)
      const data = await responce.json()
      setPosts(data)
      
    }
    fetchPosts()
  },[])
  {
    // shops.map((e,i)=>{
      return (
        <>
          <div>
            <h1>グルメサーチAPI</h1>
            <p>{}</p>
          </div>
        </>
      )
    // })
  }
}
