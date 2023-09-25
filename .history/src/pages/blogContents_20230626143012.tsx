import { Flex,Text,Box,Image,Link } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useState } from "react"
import React from 'react'
import Header from './components/header'
import Home from '.'

const blogContents : NextPage = (props) => {

    console.log(props);
    
    return (
        <>
            <Flex>
                <Header />
            </Flex>

            {/* 記事タイトル */}
            <Text w={"1000px"} h={"auto"} margin={"0 auto"}>タイトル</Text>

            {/* 日時 */}
            <Text w={"1000px"} h={"auto"} margin={"0 auto"}></Text>

            {/* アイキャッチ画像 */}
            <Image w={"1000px"} h={"auto"} margin={"0 auto"}></Image>

            {/* 参加メンバー */}
            <Box w={"1000px"} h={"auto"} margin={"0 auto"}>
                <Text>参加メンバー</Text>
                <Flex>
                    <Box>
                        <Image></Image>
                        <Text></Text>
                    </Box>
                    <Box>
                        <Image></Image>
                        <Text></Text>
                    </Box>
                    <Box>
                        <Image></Image>
                        <Text></Text>
                    </Box>
                </Flex>
            </Box>

            {/* リード文・導入部分 */}
            <Text w={"1000px"} h={"auto"} margin={"0 auto"}></Text>

            {/* 目次 */}
            <Text w={"1000px"} h={"auto"} margin={"0 auto"}></Text>

            {/* 記事本文(一旦保留) */}
            <Box w={"1000px"} h={"auto"} margin={"0 auto"}></Box>

            {/* 記事まとめ */}
            <Box w={"1000px"} h={"auto"} margin={"0 auto"}>
                <Text></Text>
                <Text></Text>
            </Box>

            {/* Movie&SNS */}
            <Box w={"1000px"} h={"auto"} margin={"0 auto"}>
                <Text></Text>
                <Text></Text>
                <Flex>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                </Flex>
            </Box>

            {/* 関連記事 */}
            <Box w={"1000px"} h={"auto"} margin={"0 auto"}>
            </Box>
        </>
    )
}

export default blogContents