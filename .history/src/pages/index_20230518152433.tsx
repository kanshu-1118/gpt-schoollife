import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [posts, setPosts] = useState([]);
  const [keyword,setKeyword] = useState("鍋")



  useEffect(()=>{
    const params ={
      keyword : keyword,
    }
    const query = new URLSearchParams(params)
    const fetchPosts = async()=>{
      const responce = await fetch(`/api/hello`)
      const data = await responce.json()
      setPosts(data.users.results.shop)
      
    }
    fetchPosts()
  },[])
  console.log(posts);
  {
      return (
        <>
          <div>
            <div>
              {
                posts.map((e:any,i:any)=>{
                  return(
                    <p>{e.name}</p>
                  )
                })
              }
            </div>
            <h1>グルメサーチAPI</h1>
            <p>{}</p>
          </div>
        </>
      )
  }
}
