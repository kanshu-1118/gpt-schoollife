import { Box,Button,Center,Flex,Img,Text,Image,chakra,shouldForwardProp } from "@chakra-ui/react"
import { NextComponentType } from 'next'
import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Link from "next/link";
import React from 'react'
import Header from './components/header'
import { color } from '@/utils/colorTheme';
import Footer from './components/footer';

interface propsType {
    text:string
}

const ContentsList : any = (props : propsType) => {
    const router = useRouter();

    const [geo,setGeo] = useState([])

    useEffect(() => {
        const fecthello = async () => {
        const responce = await fetch(`./api/hello`)
        const data = await responce.json()
        setGeo(data.geo.contents)
        }
        fecthello()
    },[])

    return (
        <Center bgColor={color.base} flexDir={"column"} padding={"200px"}>
            <Header />
                <Center w={"100vw"}>
                    {/* <Text>GPTでやってみた</Text> */}
                    <Flex gap="46px" flexWrap={"wrap"} maxWidth={"1112px"}>
                        {geo.map((e : any,i : number) => {
                        return(
                            <Link 
                                href={{
                                pathname:"/blogContents",
                                query:{i},
                                }}
                                passHref
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
                                <Flex margin={"8px 10px"} gap="8px" flexWrap={"wrap"} w={"320px"} h={"60px"} overflow={"hidden"}>
                                {e.tag.map((e : any,i : number) => {
                                    return(
                                    <Center w={""} h={"24px"} padding={"0 16px"} bgColor={color.main} borderRadius={"999px"}>
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
            <Footer />
        </Center>
    )
}

export default ContentsList