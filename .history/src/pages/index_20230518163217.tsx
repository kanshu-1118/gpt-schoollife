import { Box } from '@chakra-ui/react';
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [posts, setPosts] = useState([]);
  const [keyword,setKeyword] = useState("鍋")
  const [text, setText] = useState("")

  useEffect(()=>{
    const params ={
      keyword : keyword,
    }
    const query = new URLSearchParams(params)
    const fetchPosts = async()=>{
      const responce = await fetch(`/api/hello?${query}`)
      const data = await responce.json()
      setPosts(data.users.results.shop)
      
    }
    fetchPosts()
  },[keyword])
  const format = () =>{
    setKeyword(text)
  }
  {
    <Box className='contentWrap'>
      <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
    </Box>
      return (
        <>

        </>
      )
  }
}
