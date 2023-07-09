// import { Inter } from 'next/font/google'
import { Box,Button,Center,Flex,Img,Text,Image } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Header from "./components/header"
import ContentsList from "./contentsList"
import {color} from "../utils/colorTheme"
import { Main } from "next/document"



export default function Home() {

  const [geo,setGeo] = useState([])
  const [contentsID,setContentsID] = useState()
  
  useEffect(() => {
    const fecthello = async () => {
      const responce = await fetch(`./api/hello`)
      const data = await responce.json()
      setGeo(data.geo.contents)
    }
    fecthello()
  },[])
  
  console.log(geo);
  const users = [
    { id: 1, name: "tanaka", text: "暖かくなってきたね！" },
    { id: 2, name: "yamada", text: "パンケーキ食べたい" },
    { id: 3, name: "watanabe", text: "お腹減った" },
  ];

  return (
    <>
      <Flex w='100vw' bgColor={color.base} alignItems="center" flexFlow={"column"}>
        {/* <Flex h="60vh" bgColor={"skyblue"}>
          <Text as="h1" fontSize={"60px"}>GPT-BOYS</Text>
        </Flex> */}

        {/* <Header /> */}
        <Flex>
          <Image src="images/fsv-osaka.jpg" w={"100vw"} h={'600px'} objectFit='cover'/>
        </Flex>
        <Center flexFlow={"column"} gap={"8px"}>
          <Text as="h2" fontSize={"42px"} fontWeight="bold" color={color.main} marginTop="40px">GPTボーイズとは</Text>
          <Text as={"p"} fontSize={"18px"} width={"655px"}>
          さんぷるてきすとさんぷるてきすとさんぷるてきすとさんぷるてきすとさんぷるてきすとさんぷるてきすとさんぷるてきすとさんぷるてきすとさんぷるてきすとさんぷるてきすとさんぷるさんぷるてきすとさんぷるてきすとさんぷるてきすとさんぷるてきすとさんぷるてきすとさんぷるてきすと
          </Text>
        </Center>
        <Flex gap={'100px'} flexFlow={'column'}>
          <Center flexFlow={'column'} gap={'40px'}>
            <Text as={'h2'} color={color.main} fontSize={'32px'} fontWeight={'bold'}>記事一覧</Text>
            <Flex gap="70px" flexWrap={"wrap"} maxWidth={"1040px"}>
              {geo.map((e : any,i : number) => {

                return(
                  <Link 
                    href={{
                      pathname:"/blogContents",
                      query:{i}
                    }}
                    // passHref
                    key={i}
                  >
                    <Flex key={i} w="300px" height={"217px"} boxShadow={"base"} borderRadius={"10px"} bgImage={`url(${e.thumbnail.url})`} bgSize={"cover"} bgPosition={"center"} >
                      <Flex bgColor={"rgba(0,0,0,0.25)"} w={"300px"} borderRadius={"10px"} position={"relative"}>
                        <Flex zIndex={"1"} maxW={"280px"} flexFlow={"column"} padding={"10px"} gap={"0px"} fontWeight="Bold" justifyContent={"end"}>
                          <Text as={"p"} fontSize={"18px"} color={color.white}>{ new Date(e.time).toLocaleDateString() }</Text>
                          <Text as={"h3"} fontSize={"17px"} color={color.white}>{e.title}</Text>
                        </Flex>
                        <Image src="./images/linkImg.svg" width={"18px"} position={"absolute"} right={"10px"} bottom={"10px"} />
                      </Flex>
                    </Flex>
                    <Flex margin={"8px 10px"} gap="8px">
                      {e.tag.map((e : any,i : number) => {
                        return(
                          <Center w={"68px"} h={"24px"} bgColor={color.main} borderRadius={"999px"}>
                            <Text as={"p"} color={color.white} fontSize={"12px"} fontWeight={"semibold"}>#{e}</Text>
                          </Center>
                        )
                      })}
                    </Flex>
                  </Link>
                )
                
              })}
            </Flex>
          </Center>
          <Center flexFlow={'column'} gap={'40px'}>
            <Text as={"h2"} color={color.main} fontSize={'32px'} fontWeight={'bold'}></Text>
          </Center>
        </Flex>
      </Flex>
    </>
  )
}
