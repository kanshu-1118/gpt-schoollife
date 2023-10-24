import React, { useEffect, useState } from 'react'
import { animate, motion ,isValidMotionProp,} from 'framer-motion'
import { Center,Image, Flex, Box,border,Text,chakra,shouldForwardProp, background, transition } from '@chakra-ui/react'
import { color } from '@/utils/colorTheme';
import Link from 'next/link';

const AnimationBox = chakra(motion.div, {
    shouldForwardProp:(prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface propsType {
    name:string
    color:string
    link:string
}

const tagTemp = (props : propsType ) => {

    const [transform,setTransform] : any  = useState("-100%")

    return (
        <Link href={props.link ?? `#`} passHref>
            <AnimationBox
                borderRadius={"100px"}
                bgColor={props.color}
                overflow={"hidden"}
                p={"4px 16px"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                whileHover={{
                    transition: {duration:0.2},
                }}
                transition={{
                    duration: "1",
                    // ease:"",
                    times:"[0,0.2]",
                    repeatDelay: "0",
                }}
                
                _before={{
                    // content:'""',
                    display:"block",
                    // border:"1px solid #000",
                    w:"100%",
                    h:"100%",
                    bgColor:[`${color.main}`],
                    transform:`translateX(${transform})`,
                    transition:"0.2s ease"
                }}
                // onMouseEnter={() => setTransform("0")}
                // onMouseLeave={() => setTransform("-100%")}
                >
                <Text fontSize={"12px"} color={color.white}>#{props.name}</Text>
            </AnimationBox>
        </Link>
    )
}

export default tagTemp