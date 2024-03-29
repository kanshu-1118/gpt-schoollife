import { Flex,Center, Image, Text, useStatStyles, styled } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { color } from '@/utils/colorTheme'
import category from '@/lib/category'
import { motion } from 'framer-motion'
import { log } from 'console'

const header = () => {

    const [headerHight,setHeaderHight] = useState("90px")

    const [hoveraction,setHoveraction] = useState(false)
    const [opacity,setOpacity] = useState("0")
    const [bordermouve,setBordermove] = useState("-100%")
    // console.log(window.scrollY);
    
    // const heightMargin = () => {
    //     if (typeof document !== 'undefined') {
    //         document.getElementsByTagName("body")[0].style.marginTop = headerHight
    //     }
    // }

    // heightMargin()

    const [scrollY, setScrollY] = useState(0)
    const [scrollev, setScrollev] = useState(scrollY)
    const [translate, setTranslate] = useState("0")
    const [geo,setGeo] = useState([])

    const handleScroll = () => {
        setScrollY(window.scrollY)
    }
    
    useEffect(() => {

        const fecthello = async () => {
            const responce = await fetch(`./api/hello`)
            const data = await responce.json()
            setGeo(data.geo)
        }
        fecthello()

        window.addEventListener('scroll', handleScroll )
        if (scrollY > scrollev) {
            setTranslate("-200px")
            setScrollev(scrollY)
            
        } else if (scrollY < scrollev) {
            setTranslate("0")
            setScrollev(scrollY)
        }
    },[scrollY])

    console.log(geo);
    

    return (
        <Flex w={"calc(100vw - 120px)"} h={headerHight} transition={"0.2s ease"} transform={`translateY(${translate})`} padding={"0 24px"} position={"fixed"} marginTop={"30px"} top={'0'} justifyContent={'space-between'} bgColor={'#fefefe'} zIndex={"10"} borderRadius={"10px"} boxShadow={"0px 4px 2px rgba(0,0,0,0.03)"}>
            <Center>
                <Text as={"h1"} fontWeight={"bold"}>GPT-ボーイズ</Text>
            </Center>
            <Flex as={'nav'} w={'50%'} fontSize={"16px"}>
                <Flex as={'ul'} w={'100%'} alignItems={"center"} justifyContent={'space-evenly'}>
                    <Link href="./" passHref><Flex as={'li'} height={'100%'} lineHeight={headerHight}>新着記事</Flex></Link>
                    <Link href="#" passHref>
                    
                        
                    <Flex as={'li'} height={'100%'} lineHeight={headerHight} position={"relative"} 
                        onMouseEnter={(() => {setHoveraction(true); setTimeout(() => {
                            setOpacity("1")
                        }, 100);})}
                        onMouseLeave={(() => {setTimeout(() => {
                            setHoveraction(false);
                        }, 300); setOpacity("0")})}>
                        カテゴリ一覧
                    </Flex>
                    {(() => {
                        if (hoveraction == true) {
                            return (
                                <Flex position={"absolute"} transform={"translateX(-30%)"} zIndex={"1"} borderRadius={"10px"} gap={"16px"} flexDirection={"column"} opacity={opacity} bgColor={color.white} padding={"16px 18px"} transition={"0.3s ease"} marginTop={"12px"} 
                                    _after={{display:"block", content:'""' , zIndex:"0", position:"absolute", width:"100%", height:"100%", left:"0", top:"-10px"}}
                                    onMouseEnter={(() => {setTimeout(() => {
                                        setHoveraction(true);
                                    }, 300); setOpacity("1")})}
                                    onMouseLeave={(() => {setHoveraction(false); setOpacity("0")})}>
                                    <Text fontWeight={"bold"} borderLeft={`2px solid ${color.main}`} color={color.main} paddingLeft={"6px"}>カテゴリページ</Text>
                                    <Flex justifyContent={"center"} zIndex={"1"} w={"100%"} gap={"24px"} padding={"0 40px 40px"}>
                                        {category.category.ArrayList.map((e,i) => {
                                            return(
                                                <Flex flexDirection={"column"} gap={"12px"}>
                                                    <Text as={"p"} fontSize={"16px"} fontWeight={"bold"} color={color.main}>{e.name}</Text>
                                                    <Flex flexDirection={"column"} gap={"8px"}>
                                                        {e.child.map((e,index) => {
                                                            return(
                                                                <Link href={{
                                                                    pathname:"/ContentsList",
                                                                    query:{index} 
                                                                    }}>
                                                                    <Flex as={motion.button}h={"calc(100% + 4px)"} boxSizing={'border-box'} position={"relative"} overflow={"hidden"} borderBottom={`2px solid transparent`}
                                                                        whileHover={{
                                                                            borderBottom:`2px solid ${color.main}`,
                                                                        }}
                                                                    >
                                                                        <Text as={"p"} fontSize={"14px"}>{e}</Text>
                                                                    </Flex>
                                                                </Link>
                                                            )
                                                        })}
                                                    </Flex>
                                                </Flex>
                                            )
                                        })}           
                                    </Flex>
                                </Flex>
                            )
                        }
                    })()}
                    </Link>
                    
                    <Link href="./menber" passHref><Flex as={'li'} height={'100%'} lineHeight={headerHight}>チャットGPTの記録</Flex></Link>
                    <Flex as={'li'} height={'32px'} alignItems={"center"} gap={"8px"} padding={"4px 12px"} border={`2px solid ${color.main}`} borderRadius={"10px"} position={"relative"} lineHeight={headerHight}>
                        <Image src={"./images/searchImg.svg"} width={"15px"} height={"15px"} />
                        <Center as={"input"} h={"100%"} outline={"none"} />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default header