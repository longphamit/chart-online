'use client'
import {Button, Center, Flex, Spacer, Stack} from "@chakra-ui/react";
import {useRouter} from "next/navigation";
import {useTranslations} from "next-intl";

const Toolbar = ({locale}) => {
    const tChart = useTranslations("Chart");
    const router = useRouter()
    return (
        <Center>
            <Stack direction="row" spacing={6}>
                <Button
                    margin={5}
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
                    margin={5}
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
                    margin={5}
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

            </Stack>
        </Center>
    )
}
export default Toolbar