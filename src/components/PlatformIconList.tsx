import {Platform} from "@/hooks/useGames.ts";
import {FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from "react-icons/fa";
import {MdPhoneIphone, MdCheckBoxOutlineBlank} from "react-icons/md";
import {BsGlobe, BsNintendoSwitch, BsAndroid2} from "react-icons/bs";
import {Icon} from "@chakra-ui/react";
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
    const test = (val: string) => {
        switch (val) {
            case "pc":
                return iconMap.pc
            case "playstation":
                return iconMap.playstation
            case "xbox":
                return iconMap.xbox
            case "nintendo":
                return iconMap.nintendo
            case "mac":
                return iconMap.mac
            case "linux":
                return iconMap.linux
            case "ios":
                return iconMap.ios
            case "web":
                return iconMap.web
            case "android":
                return iconMap.android
            default:
                return MdCheckBoxOutlineBlank
        }
    }
    return (
        <>
            {platforms.map((p) => {
                return (
                    <Tooltip key={p.id} content={p.name}>
                        <Icon key={p.id} as={test(p.slug)}/>
                    </Tooltip>


                )
            })}
        </>
    )
}

export default PlatformIconList
