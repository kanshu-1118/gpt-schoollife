// import { Inter } from 'next/font/google'
import { Box,Button,Center,Flex,Img,Text,Image } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Header from "./components/header"
import ContentsList from "./contentsList"
import {color} from "../utils/colorTheme"
import { Main } from "next/document"
import ContTemplate from "./components/contTemplate"


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

  // console.log(geo);

  return (
    <>
      <Flex w='100vw' bgColor={color.base} alignItems="center" flexFlow={"column"}>
        {/* <Flex h="60vh" bgColor={"skyblue"}>
          <Text as="h1" fontSize={"60px"}>GPT-BOYS</Text>
        </Flex> */}

        <Header />
        <Flex>
          <Image src="images/fsv-osaka.jpg" w={"100vw"} h={'600px'} objectFit='cover'/>
        </Flex>
        <Flex gap={'80px'} flexFlow={'column'} marginTop={"80px"}>
          <Center w={"1392px"} padding={"64px 0"} borderRadius={"20px"} flexFlow={'column'} gap={'40px'} bgColor={color.white}>
            <Text as={'h2'} color={color.main} fontSize={'32px'} fontWeight={'bold'}>新着記事</Text>
            <Flex gap="46px" flexWrap={"wrap"} maxWidth={"1112px"}>

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
                    <Flex key={i} w="340px" height={"217px"} boxShadow={"base"} borderRadius={"10px"} bgImage={`url(${e.thumbnail.url})`} bgSize={"cover"} bgPosition={"center"} >
                      <Flex bgColor={"rgba(0,0,0,0.25)"} w={"340px"} borderRadius={"10px"} position={"relative"}>
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
            <Link href={"#"}>
              <Center as={"button"} bgColor={color.main} padding={"16px 24px"} borderRadius={"10px"}><Text as={"p"} fontSize={"16px"} fontWeight={"bold"} color={color.white}>他の記事</Text></Center>
            </Link>
          </Center>
          <ContTemplate api={geo} if={"Web"} youtube={true} />
          <ContTemplate api={geo} if={"Web"} youtube={false} />
          <Center w={"1392px"} padding={"64px 0"} borderRadius={"20px"} flexFlow={'column'} gap={'40px'}>
            <Text as={'h2'} color={color.main} fontSize={'32px'} fontWeight={'bold'}>メンバー</Text>
            <Center>
              
            </Center>
          </Center>
        </Flex>
      </Flex>
    </>
  )
}
