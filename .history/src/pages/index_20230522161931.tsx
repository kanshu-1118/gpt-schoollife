import { Box,Center,Flex,Input,Button,Wrap, WrapItem, Spacer,Text,Image } from '@chakra-ui/react';
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react';

// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [posts, setPosts] = useState([]);
  const [kyeword,setkyeword] = useState("鍋")
  const [text, setText] = useState("")
  
  useEffect(()=>{
    const params ={
      kyeword : kyeword,
    }
    const query = new URLSearchParams(params)
    const fetchPosts = async()=>{
      const responce = await fetch(`/api/hello?${query}`)
      const data = await responce.json()
      setPosts(data.hotGurume.results.shop)
    }
    fetchPosts()
  },[kyeword])

  console.log(posts);
  

  const format = () =>{
    setkyeword(text)
  }
  {
      return (
        <>
          <Flex h={"80px"} justify='center' align={"center"}>
            <Input type="text" variant='filled' w={"250px"} onChange={(e)=>{setText(e.target.value)}}/>
            {/* ↓このspacing効いてない 後回し！ */}
            <Wrap spacing={10}>
              <WrapItem>
                <Button variant='solid' w={"100px"} h="40px" colorScheme='green' onClick={format}>検索</Button>
              </WrapItem>
            </Wrap>
          </Flex>
          {
            posts.map((e:any,i:any)=>{
              return(
                <>
                  <Flex>
                    <Image src={e.photo.pc.l}></Image>
                    <Box>
                      <Text>{e.name}</Text>
                      <Text>{e.address}</Text>
                    </Box>
                  </Flex>
                </>
              )
            })
          }
        </>
      )
  }
}
