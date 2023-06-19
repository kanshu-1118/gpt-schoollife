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
        </>
    )
}

export default contentsList