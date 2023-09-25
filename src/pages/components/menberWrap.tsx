import React, { useEffect, useState ,useRef } from 'react'
import member from '@/lib/member'
import { NextComponentType } from 'next'
import { Flex,Center,Image,Text } from '@chakra-ui/react'
import { color } from '@/utils/colorTheme'
import { motion } from 'framer-motion'
import { count } from 'console'

const menberWrap: NextComponentType = () => {
    const members = member.member.ArrayList
    const [move,setMove] =  useState(0)
    const [opastate,setOpastate] =  useState(1)
    const [arrayOpa,setArrayOpa] = useState(1)
    const [randum,setRandum] = useState(Math.floor( Math.random() * 10 ))
    const [go,setGo] = useState(0)

    useEffect(()=> {

    },[])

    const [wavFile, setWavFile] = useState('./images/gogochance.mp3')

    const audioRef = useRef<any>(null)
    
    const handlePlay = () => {
        audioRef.current.play()
    };

    const opatimeout = () => {
        setTimeout(() => {
            setOpastate(1)
        }, 100);
    }
    return (
        // <Header />
        <Center flexDirection={"column"} gap="116px">
            <Center w={"440px"} h={"390px"} position={"relative"} flexDirection={"column"} bgColor={color.white} border={`4px solid ${color.main}`} borderRadius={"10px"}>
                <Flex alignItems={"center"}>
                    <Center as={"button"} w={"56px"} height={"56px"} zIndex={"1"} onClick={() => {
                        if (opastate == 1) {
                            setOpastate(0)
                            setTimeout(() => {
                                if(move > 0 ){setMove(move-1)}else if(move == 0){setMove(6)}
                                setTimeout(() => {
                                    setOpastate(1)
                                }, 100);
                            }, 100);
                        }else if(opastate == 0){
                            if(move > 0 ){setMove(move-1)}else if(move == 0){setMove(6)}
                            opatimeout()
                        } 
                        if (move == 3) {
                            setWavFile("./images/pato.mp3")
                            handlePlay()
                            console.log("play")
                        }
                        setGo(0)
                        }}>
                        <Image src='./images/pre.svg' alt={""}/>
                    </Center>
                    <Center w={"168px"} h={"168px"} borderRadius={"100px"} overflow={"hidden"}  border={`4px solid ${color.main}`}>
                        <Flex display={"flex"}  height={"140px"}  transition={"0.5s ease"} gap={"40px"} marginLeft={"100px"} transform={`translateX(calc(-180 * ${move}px))`}>
                            {/* 45 -130 -315 -490 -665 -840 1015    -175 */}
                            {members?.map((e,i) => {
                                return(
                                    <Image src={`./images/menber/${e.img}.png`} alt={""}  />
                                )
                            })}                        
                        </Flex>
                        <audio id="btn_audio" ref={audioRef}>
                            <source src={wavFile} type="audio/mp3" />
                        </audio>
                    </Center>
                    <Center as={"button"} w={"56px"} height={"56px"} zIndex={"1"} onClick={() => {
                        // opatimeout()
                        setGo(0)
                        if (opastate == 1) {
                            setOpastate(0)
                            setTimeout(() => {
                                if(move < 6 ){setMove(move+1)}else if(move == 6){setMove(0)}
                                setTimeout(() => {
                                    setOpastate(1)
                                }, 100);
                            }, 100);
                        }else if(opastate == 0){
                            if(move < 6 ){setMove(move+1)}else if(move == 6){setMove(0)}
                            opatimeout()
                        }
                        if (move == 1) {
                            setWavFile("./images/pato.mp3")
                            handlePlay()
                            console.log("play")
                            
                        }
                        }}>
                        <Image src='./images/next.svg' alt={""}/>
                    </Center>
                </Flex>
                <Flex alignItems={"center"} position={"relative"} justifyContent={"center"} w={"200px"} height={"150px"}>
                    {members?.map((e,i) => {
                        if (move == i) {
                            return(
                                <Center key={i} gap={"20px"} color={color.main} transition={"1s ease"} fontWeight={"bold"} flexDirection={"column"} opacity={opastate} position={"absolute"}>
                                    <Center flexDirection={"column"} gap={"4px"}>
                                        <Text fontSize={"16px"}>{e.name}</Text>
                                        <Text fontSize={"14px"}>{e.state}</Text>
                                    </Center>
                                    <Text w={"100%"} textAlign={"center"} fontSize={"12px"}>{e.text}</Text>
                                </Center>
                            )
                        }
                    })}    
                </Flex>
                <Image src='./images/gogo.png' w={"100px"} bottom={"16px"} left={"16px"} position={"absolute"} opacity={go} alt=''  />
            </Center>
            <Center gap={"82px"} >
                {members?.map((e,i) => {
                    return(
                        <Center gap="12px" flexDirection={"column"} color={color.main} fontSize={"16px"} fontWeight={"bold"}>
                            <Center transition={"0.5s"} as={"button"} bgColor={color.white} border={move == i ? `4px solid ${color.main}` : ``} 
                            onClick={() => {
                                if (i == 0) {
                                    setWavFile("./images/gogochance.mp3")
                                    setRandum(Math.floor( Math.random() * 11 ))
                                    if(randum == 7){
                                        setWavFile("./images/gogochance.mp3")
                                        setGo(1)
                                        handlePlay()
                                    } else {
                                        setGo(0)
                                    }
                                } else if (i == 2) {
                                    setWavFile("./images/pato.mp3")
                                    handlePlay()
                                    setGo(0)
                                } else {
                                    setGo(0)
                                }
                                setMove(i)
                            }} 
                            w={"98px"} h={"98px"} borderRadius={"50%"} overflow={"hidden"} position={"relative"} >
                                <Center bgColor={"rgba(0, 0, 0, 0.4)"} opacity={move == i ? 0 : 1} w="100%" h="100%" position={"absolute"}></Center>
                                <Image src={`./images/menber/${e.img}.png`} alt="メンバー画像" transform={"translateY(-0px)"}  borderRadius={"50%"} w={"90%"}></Image>
                            </Center>
                            <Text>{e.name}</Text>
                        </Center>
                    )
                })}
            </Center>
        </Center>
    )
}

export default menberWrap