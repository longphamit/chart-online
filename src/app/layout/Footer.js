import {Stack, HStack, Link, Divider, Image, IconButton, LinkProps, Flex, Text} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const links = ['Blog'];
const accounts = [
    {

        label: '',
        type: 'gray',
        icon: <FaGithub />
    },
    {
        url: '',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
    },
    {
        url: '',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
    }
];

const Footer = () => {
    return (
        <Stack
            bg="gray.800"
            marginInline="auto"
            p={8}
            height={'100%'}
            spacing={{ base: 8, md: 0 }}
            justifyContent="space-between"
            alignItems="center"
            direction={{ base: 'column', md: 'row' }}
        >


            <Flex alignItems="center">
                <Text color="white" fontSize="0.875rem" pl="0.5rem">
                     CopyRight &copy; 2024 - Create by Longpc - devmonit99@gmail.com
                </Text>
            </Flex>

            <Stack direction="row" spacing={5} pt={{ base: 4, md: 0 }} alignItems="center">
                {accounts.map((sc, index) => (
                    <IconButton
                        key={index}
                        as={Link}
                        isExternal
                        href={sc.url}
                        aria-label={sc.label}
                        colorScheme={sc.type}
                        icon={sc.icon}
                        rounded="md"

                    />
                ))}
            </Stack>

        </Stack>
    );
};

const CustomLink = ({ children, ...props }) => {
    return (
        <Link href="#" fontSize="sm" _hover={{ textDecoration: 'underline' }} {...props}>
            {children}
        </Link>
    );
};

export default Footer;