import {Button, Menu, Portal} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms.ts";
import {Platform} from "@/hooks/useGames.ts";

interface Props {
    onSelectPlatform: (platform: Platform | null) => void;
    selectedPlatform: Platform | null;
}

function PlatformSelector({onSelectPlatform, selectedPlatform}: Props) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const {data, error} = usePlatforms()

    //console.log(data);
    //console.log(selectedPlatform)

    if (error) return null

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm"><BsChevronDown/>{selectedPlatform !== undefined ? `Platform: ${selectedPlatform?.name}` : "Platform"}</Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {data.map((plat: Platform) => <Menu.Item key={plat.id} value={plat.name} onSelect={() => onSelectPlatform(plat)}>{plat.name}</Menu.Item>)}
                        <Menu.Item value={"Remove Platform"} onSelect={() => onSelectPlatform(null)}>Remove Platform</Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default PlatformSelector
