import {Flex, HStack, Image, Text} from "@chakra-ui/react";
import logo from '../assets/logo.webp'
import {ColorModeButton} from "@/components/ui/color-mode.tsx";
import SearchInput from "@/components/SearchInput.tsx";

function NavBar() {
    return (
        <HStack justify="space-between">
            <Image src={logo} boxSize="60px"/>
            <SearchInput/>
            <Flex pr={2}>
                <Text whiteSpace="nowrap" mt={"5px"}>Color Mode</Text>
                <ColorModeButton/>
            </Flex>

        </HStack>
    )
}

export default NavBar
