import {Platform} from "@/hooks/useGames.ts";
import {FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from "react-icons/fa";
import {SiNintendo} from "react-icons/si";
import {MdPhoneIphone} from "react-icons/md";
import {BsGlobe} from "react-icons/bs";
import {Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface Props {
    platforms: Platform[]
}

interface IconContainer {
    [key: string]: IconType
}

function PlatformIconList({platforms}: Props) {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <>
            {platforms.map((p) => {
                return (
                    <Icon key={p.id} as={iconMap[p.slug]}/>

                )
            })}
        </>
    )
}

export default PlatformIconList
