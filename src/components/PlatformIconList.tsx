import {Platform} from "@/hooks/useGames.ts";
import {FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {BsAndroid2, BsGlobe, BsNintendoSwitch} from "react-icons/bs";
import {SiSega} from "react-icons/si";
import {GiGameConsole} from "react-icons/gi";
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
        android: BsAndroid2,
        sega: SiSega,
        "neo-geo": GiGameConsole
    }


    return (
        <HStack marginY={1}>
            {platforms.map((p) => {
                //console.log(p.slug)
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
