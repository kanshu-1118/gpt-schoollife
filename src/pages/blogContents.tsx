import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import React from 'react'
import Header from './components/header'
import { group } from 'console'

const blogContents : NextPage = () => {
    const router = useRouter()
    const [geo,setGeo] = useState([])
    // const [routerID ,setRouterID] = useState<number | null>(1)
    

    useEffect(() => {
        // if(!router.isReady) return;
        const fecthello = async () => {
            const responce = await fetch(`./api/hello`)
            const data = await responce.json()
            setGeo(data.geo.contents)
        }
        fecthello()
    },[])
    // const queryId : any = geo
    // const queryArray : any = [queryId]
    // const queryId : any = geo[router.query.i as unknown as number]
    
    // console.log(router.query.i as unknown as number);
    // console.log(routerID);
    // console.log(geo[router.query.i as unknown as number]);
    // console.log(queryArray);
    
    // console.log(queryId);
    
    return (
        <Flex>
            {/* <Header /> */}
            {geo.map((e:any,i:number) => {
                console.log(e)
                {if (i == router.query.i as unknown as number) {
                    return (
                        <div>
                            <p>{e.title}</p>
                            <img src={e.thumbnail.url} alt="" />
                        </div>
                    )
                }}
            })}
            {/* {geo.map((e:any,i:number) => {
                console.log(e)
                
                return(
                    <div>
                        <p>{e.id}</p>
                        <img src={e.thumbnail.url} alt="" />
                    </div>
                )
            })} */}
        </Flex>
    )
}

export default blogContents