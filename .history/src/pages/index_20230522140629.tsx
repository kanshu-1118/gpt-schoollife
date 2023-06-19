import { Box,Center,Flex,Input,Button,Wrap, WrapItem } from '@chakra-ui/react';
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
      return (
        <>
          <Flex w='max' h={30} justify='center'>
            <Input type="text" variant='filled' onChange={(e)=>{setText(e.target.value)}}/>
            <Wrap spacing={4}>
              <WrapItem>
                <Button variant='solid' colorScheme="blue">検索</Button>
              </WrapItem>
            </Wrap>
          </Flex>
        </>
      )
  }
}
