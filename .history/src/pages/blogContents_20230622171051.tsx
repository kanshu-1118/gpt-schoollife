import { Flex,Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useState } from "react"
import React from 'react'
import Header from './components/header'

const blogContents : NextPage = () => {


    return (
        <>
            <Flex>
                <Header />
            </Flex>
        </>
    )
}

export default blogContents