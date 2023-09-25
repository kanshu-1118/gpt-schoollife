import React from 'react'
import { Box,Button,Center,Flex,Img,Text,Image } from "@chakra-ui/react"
import Link from "next/link"
import {color} from "../../utils/colorTheme"


const YoutubeLink = () => {
    return (
        <Link href={"#"}>
            <Flex w={"142px"} alignItems={"end"} justifyContent={"space-between"} borderBottom={`1px solid ${color.accentRed}`} color={color.accentRed}>
                <Text as={"p"} marginBottom={"4px"} fontWeight={"bold"} fontSize={"12px"}>Youtube</Text>
                <Image src="./images/linkImgRed.svg" alt="" w={"13.5px"} left={"0"} marginBottom={"5.25px"}/>
            </Flex>
        </Link>
    )
}

export default YoutubeLink