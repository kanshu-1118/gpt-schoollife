import { Flex,Text,Box,Image } from '@chakra-ui/react'
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
            <Text></Text>

            {/* 日時 */}
            <Text></Text>

            {/* アイキャッチ画像 */}
            <Image></Image>

            {/* 参加メンバー */}
            <Box>
                <Text></Text>
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
            <Text></Text>

            {/* 目次 */}
            <Text></Text>

            {/* 記事本文(一旦保留) */}
            <Box></Box>

            {/* 記事まとめ */}
            <Box>
                <Text></Text>
                <Text></Text>
            </Box>

            {/* Movie&SNS */}
            <Box>
                <Text></Text>

                <Text></Text>
            </Box>
        </>
    )
}

export default blogContents