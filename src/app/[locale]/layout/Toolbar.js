'use client'
import {Box, Button, Center, Flex, SimpleGrid, Spacer, Stack} from "@chakra-ui/react";
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";

const Toolbar = ({locale}) => {
    const tChart = useTranslations("Chart");
    const router = useRouter()
    return (
        <Center marginBottom={5}>
            <SimpleGrid columns={{base:2,md:2,lg:3}} >
                <Button
                    margin={2}
                    variant='outline'
                    onClick={() => {
                        router.replace(`/${locale}/line`)
                    }}
                    display={{md: 'inline-flex'}}
                    fontWeight={600}

                    colorScheme='teal'
                    href={'#'}
                    _hover={{
                        bg: '#319795',
                    }}>
                    {tChart('lineChart')}
                </Button>
                <Button
                    margin={2}
                    variant='outline'
                    onClick={() => {
                        router.replace(`/${locale}/bar`)
                    }}
                    display={{md: 'inline-flex'}}
                    fontWeight={600}

                    colorScheme='teal'
                    href={'#'}
                    _hover={{
                        bg: '#319795',
                    }}>
                    {tChart('barChart')}
                </Button>
                <Button
                    variant='outline'
                    margin={2}
                    onClick={() => {
                        router.replace(`/${locale}/pie`)
                    }}
                    display={{md: 'inline-flex'}}
                    fontWeight={600}

                    colorScheme='teal'
                    href={'#'}
                    _hover={{
                        bg: '#319795',
                    }}>
                    {tChart('pieChart')}
                </Button>
            </SimpleGrid>
        </Center>
    )
}
export default Toolbar