import { Center, Text } from '@chakra-ui/react'
import { NextComponentType } from 'next'
import { useRouter } from "next/router";
import React from 'react'
import Header from './components/header'
import { color } from '@/utils/colorTheme';
import Footer from './components/footer';

interface propsType {
    text:string
}

const ContentsList : any = (props : propsType) => {
    const router = useRouter();
    return (
        <Center bgColor={color.base} flexDir={"column"} padding={"200px"}>
            <Header />
            <Center>
                
            </Center>
            <Footer />
        </Center>
    )
}

export default ContentsList