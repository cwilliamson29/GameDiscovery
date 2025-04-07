import {Platform} from "@/hooks/useGames.ts";
import {FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {BsGlobe, BsNintendoSwitch, BsAndroid2} from "react-icons/bs";
import {HStack, Icon} from "@chakra-ui/react";
import {Tooltip} from "@/components/ui/tooltip"
import {IconType} from "react-icons";

interface Props {
    platforms: Platform[]
}

function PlatformIconList({platforms}: Props) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: BsNintendoSwitch,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: BsAndroid2
    }

    return (
        <HStack marginY={1}>
            {platforms.map((p) => {
                return (
                    <Tooltip key={p.id} content={p.name}>
                        <Icon as={iconMap[p.slug]} color="gray.600"/>
                    </Tooltip>
                )
            })}
        </HStack>
    )
}

export default PlatformIconList
