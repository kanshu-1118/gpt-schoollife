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
      return (
        <>
          <div>
            <div>
              {
                posts.map((e:any,i:any)=>(
                  <div></div>
                ))
              }
            </div>
            <h1>グルメサーチAPI</h1>
            <p>{}</p>
          </div>
        </>
      )
  }
}