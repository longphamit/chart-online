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
import {useTranslations} from "next-intl";

export default function Nav({h,locale}) {
    const tHeader = useTranslations("Header");
    const tChart = useTranslations("Chart");
    const router = useRouter()
    const {colorMode, toggleColorMode} = useColorMode()
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <>
            <Box px={4}>
                <Flex h={h} alignItems={'center'} justifyContent={'space-between'}>
                    <Box onClick={()=>{router.replace(`/${locale}`)}}>
                        <h1>{tHeader('name')}</h1>
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack
                            flex={{base: 1, md: 0}}
                            justify={'flex-end'}
                            direction={'row'}
                            spacing={6}>

                            <Button
                                onClick={()=>{router.replace(`/${locale}/line`)}}
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
                                {tChart('lineChart')}
                            </Button>

                            <Button
                                onClick={()=>{router.replace(`/${locale}/pie`)}}
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
                                {tChart('pieChart')}
                            </Button>

                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}