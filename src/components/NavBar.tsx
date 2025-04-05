import {Box, Flex, HStack, Image, Text} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import {ColorModeButton} from "@/components/ui/color-mode.tsx";

function NavBar() {
    return (
        <HStack justify="space-between">
            <Image src={logo} boxSize="60px"/>
            <Flex pr={2}>
                <Text mt={"5px"}>Color Mode</Text>
                <ColorModeButton/>
            </Flex>

        </HStack>
    )
}

export default NavBar
