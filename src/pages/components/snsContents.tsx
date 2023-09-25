import React from 'react'
import { animate, motion ,isValidMotionProp } from 'framer-motion'
import { Center,Image, Flex, Box,border,Text,chakra,shouldForwardProp, background } from '@chakra-ui/react'
import { color } from '@/utils/colorTheme';
import Link from 'next/link';

const AnimationBox = chakra(motion.div, {
    shouldForwardProp:(prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface propsType {
    color:string
    name:string
    img:string
    btn:string
    link:string
    linkbtn:string
}

const snsContents = (props : propsType) => {
    return (
        <Center flexDirection={"column"} gap={"10px"} >
            <Text as={"p"} fontSize={"18px"} fontWeight={"bold"} color={props.color}>{props.name}</Text>
            <Center flexDir={"column"} gap={"30px"}>
                <Center w={"255px"} h={"375px"} bgImage={`url(./images/${props.img})`} bgSize={"auto"} bgPosition={"center"} borderRadius={"20px"} border={`10px solid ${props.color}`}>
                    <AnimationBox w={"60px"} h={"60px"} borderRadius={"50%"}
                        border={`7px dashed ${props.color}`}
                        animate={{
                            rotate:[0,180,0],
                        }}
                        transition={{
                            duration: "6",
                            // ease:"",
                            times:"[0,1,0]",
                            repeat: "Infinity",
                            repeatDelay: "0",
                        }}
                        >

                    </AnimationBox>
                </Center>
                <Link href={props.link ?? `#`} passHref>
                    <Flex as={"button"} w={"266px"} h={"57px"} fontSize={"18px"} p={"0px 18px"} alignItems={"center"} justifyContent={"space-between"} borderRadius={"10px"} fontWeight={"bold"} color={props.color} border={`5px solid ${props.color}`}>
                        {props.btn}
                        <Image src={props.linkbtn} w={"18px"} alt={``} />
                    </Flex>
                </Link>
            </Center>
        </Center>
        
    )
}

export default snsContents