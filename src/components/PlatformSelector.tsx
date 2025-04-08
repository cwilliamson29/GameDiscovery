import {Button, Menu, Portal} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms.ts";
import {Platform} from "@/hooks/useGames.ts";

function PlatformSelector() {
    const {data, loading, error} = usePlatforms()

    if (error) return null

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm"><BsChevronDown/>Platform</Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data.map((plat: Platform) => <Menu.Item key={plat.id} value={plat.name}>{plat.name}</Menu.Item>)}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default PlatformSelector
