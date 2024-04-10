'use client'

import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center
} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'
import {useRouter} from "next/navigation";

export default function Nav({h}) {
    const router = useRouter()
    const {colorMode, toggleColorMode} = useColorMode()
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <>
            <Box px={4}>
                <Flex h={h} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <h1>Create Chart Online</h1>
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack
                            flex={{base: 1, md: 0}}
                            justify={'flex-end'}
                            direction={'row'}
                            spacing={6}>

                            <Button
                                onClick={()=>{router.replace('/line')}}
                                as={'a'}
                                display={{base: 'none', md: 'inline-flex'}}
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'white'}
                                bg={'pink.400'}
                                href={'#'}
                                _hover={{
                                    bg: 'pink.300',
                                }}>
                                LINE CHART
                            </Button>

                            <Button
                                onClick={()=>{router.replace('/pie')}}
                                as={'a'}
                                display={{base: 'none', md: 'inline-flex'}}
                                fontSize={'sm'}
                                fontWeight={600}
                                color={'white'}
                                bg={'pink.400'}
                                href={'#'}
                                _hover={{
                                    bg: 'pink.300',
                                }}>
                                PIE CHART
                            </Button>

                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}