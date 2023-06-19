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
          <Flex h={"80px"} justify='center' align={"center"}>
            <Input type="text" variant='filled' w={"250px"} onChange={(e)=>{setText(e.target.value)}}/>
            <Wrap spacing={"10px"}>
              <WrapItem>
                <Button variant='solid' w={"100px"} h="40px" colorScheme='green'>検索</Button>
              </WrapItem>
            </Wrap>
          </Flex>
        </>
      )
  }
}
