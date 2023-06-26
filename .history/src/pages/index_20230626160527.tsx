// import { Inter } from 'next/font/google'
import { Box,Button,Center,Flex,Img,Text,Image } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Header from "./components/header"
import ContentsList from "./contentsList"



export default function Home() {

  const [geo,setGeo] = useState([])
  const [contentsID,setContentsID] = useState()
  // const [Num,setNum] = useState()
  
  useEffect(() => {
    const fecthello = async () => {
      const responce = await fetch(`./api/hello`)
      const data = await responce.json()
      setGeo(data.geo.contents)
    }
    fecthello()
  },[])
  
  console.log(geo);

  const clickNum = (e:any,i:number) =>{
    console.log(i);
    
  }


  return (
    <>
      <Box w='100vw'>
        {/* <Flex h="60vh" bgColor={"skyblue"}>
          <Text as="h1" fontSize={"60px"}>GPT-BOYS</Text>
        </Flex> */}

        <Header />
        <Flex gap={'200px'} flexFlow={'column'}>

        
          <Flex>
            <Image src="images/fsvImage.jpeg" w={"100vw"} h={'600px'} objectFit='cover'/>
          </Flex>

          <Center flexFlow={'column'} gap={'40px'}>
            <Text as={'h2'} fontSize={'24px'} fontWeight={'bold'}>記事一覧</Text>
            <Flex justifyContent={"center"} gap="40px">
              {geo.map((e : any,i : number) => {

                return(
                  <Link href="/blogContents" passHref >
                    <Flex key={i} w="300px" height={"200px"} bgColor="white" boxShadow={"base"} borderRadius={"10px"} >
                      <Img src={e.thumbnail.url} alt="" position={"absolute"} w="300px" h={"200px"} objectFit="cover" zIndex="0" onClick={clickNum}  />
                      <Flex zIndex={"1"}>
                        <Text as={"h3"}>{e.title}</Text>
                      </Flex>
                    </Flex>
                  </Link>
                )
              })}
            </Flex>
          </Center>

        </Flex>
      </Box>
    </>
  )
}


