import { Text } from '@chakra-ui/react'
import { NextComponentType } from 'next'
import React from 'react'
import Header from './components/header'

interface propsType {
    text:stringimport { Text } from '@chakra-ui/react'
    import { NextComponentType } from 'next'
    import { useRouter } from "next/router";
    import React from 'react'
    import Header from './components/header'
    
    interface propsType {
        text:string
    }
    
    const contentsList : any = (props : propsType) => {
        const router = useRouter();
        return (
            <>
                {/* <Header /> */}
                <Text>{props.text}</Text>
                <h1>
                    {router.query.name}
                </h1>   
            </>
        )
    }
    
    export default contentsList
}

const contentsList : any = (props : propsType) => {
    return (
        <>
            {/* <Header /> */}
            <Text>{props.text}</Text>
        </>
    )
}

export default contentsList