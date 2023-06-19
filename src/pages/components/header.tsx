import { Flex, Image, Text, useStatStyles } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'

const header = () => {

    const [headerHight,setHeaderHight] = useState("60px")

    const heightMargin = () => {
        if (typeof document !== 'undefined') {
            document.getElementsByTagName("body")[0].style.marginTop = headerHight
        }
    }

    heightMargin()

    return (
        <Flex w={"100vw"} h={headerHight} position={"fixed"} top={'0'} justifyContent={'flex-end'} bgColor={'#fefefe'} zIndex={"10"} boxShadow={"0px -1px 4px #010101"}>
            <Flex as={'nav'} w={'50%'}>
                <Flex as={'ul'} w={'100%'} justifyContent={'space-evenly'}>
                    <Link href="./" passHref><Flex as={'li'} height={'100%'} lineHeight={headerHight}>メイン</Flex></Link>
                    <Link href="./contentsList" passHref><Flex as={'li'} height={'100%'} lineHeight={headerHight}>記事一覧</Flex></Link>
                    <Link href="./menber" passHref><Flex as={'li'} height={'100%'} lineHeight={headerHight}>メンバー紹介</Flex></Link>
                    <Link href="#" passHref><Flex as={'li'} height={'100%'} lineHeight={headerHight}>メンバー紹介</Flex></Link>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default header