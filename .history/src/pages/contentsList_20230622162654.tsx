import { Text } from '@chakra-ui/react'
import { NextComponentType } from 'next'
import React from 'react'
import Header from './components/header'

interface propsType {
    text:string
}

const contentsList : any = (props : propsType) => {
    return (
        <>
            <Header />
            <Text>{props.text}</Text>
            <Text as={"h2"}>鼻くそ</Text>
        </>
    )
}

export default contentsList