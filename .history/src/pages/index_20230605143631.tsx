import { Box,Center,Flex,Input,Button,Wrap, WrapItem, Spacer,Text,Image,Heading } from '@chakra-ui/react';
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';
import Link from 'next/link'
import { useRouter } from 'next/router';
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
                  <Flex justify="center" w={900} margin={"0 auto"} marginBottom={"32px"}>
                    <Image src={e.photo.pc.l}></Image>
                    <Box w={600} marginLeft={"16px"}>
                      <Heading as={"h2"} fontSize={"xl"} color={"#4299e1"}>
                        <Link href={"./shopDetail"} target={"_blank"}>
                          {e.name}
                        </Link>
                      </Heading>
                      <Text>{e.address}</Text>
                      <Text>{e.access}</Text>
                      <Text>平均{e.budget.average}</Text>
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
