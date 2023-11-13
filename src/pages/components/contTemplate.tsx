import React from 'react'
import { Box,Button,Center,Flex,Img,Text,Image } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import {color} from "../../utils/colorTheme"
import YoutubeLink from './YoutubeLink'

interface propsType {
    api:any
    if:any
    youtube : boolean
}

function contTemplate(props : propsType) {

    return (
        <Center w={"1392px"} padding={"64px 0"} borderRadius={"20px"} flexFlow={'column'} bgColor={color.white} gap={'40px'}>
            <Flex w={"100%"} padding={"0 140px"} justifyContent={"space-between"}>
                <Text as={"h2"} color={color.main} fontSize={'24px'} fontWeight={'bold'}>GTPでやってみた</Text>
                {props.youtube ? (<YoutubeLink />) : <></> }
                
            </Flex>
            <Flex gap="46px" flexWrap={"wrap"} maxWidth={"1112px"}>
                {props.api?.map((e : any,i : number) => {
                
                if (e.tag.includes(props.if)) {
                    if (i < 3 ) {
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
                    }
                    
                }
                })}
            </Flex>
            <Link href={"#"}>
                <Center as={"button"} borderTop={`2px solid ${color.main}`} borderBottom={`2px solid ${color.main}`} padding={"16px 40px"}><Text as={"p"} fontSize={"16px"} fontWeight={"bold"} color={color.main}>他の記事</Text></Center>
            </Link>
        </Center>
    )
}

export default contTemplate