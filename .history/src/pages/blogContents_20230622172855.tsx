import { Flex,Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useState } from "react"
import React from 'react'
import Header from './components/header'
import Home from '.'

const blogContents : NextPage = (props) => {

    return (
        <>
            <Flex>
                <Header />
                <Text>{}</Text>
            </Flex>
        </>
    )
}

export default blogContents