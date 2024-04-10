'use client'

import {
    Box,
    Flex,
} from '@chakra-ui/react'
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";

export default function Nav({h,locale}) {
    const tHeader = useTranslations("Header");
    const router = useRouter()
    return (
        <>
            <Box px={4}>
                <Flex h={h} alignItems={'center'} justifyContent={'space-between'}>
                    <Box onClick={()=>{router.replace(`/${locale}`)}}>
                        <h1>{tHeader('name')}</h1>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}