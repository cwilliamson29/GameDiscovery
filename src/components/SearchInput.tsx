import {Input, InputGroup} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";

function SearchInput() {
    return (
        <InputGroup startElement={<BsSearch/>}>
            <Input rounded={20} placeholder={"Search over 850,000 games..."}/>
        </InputGroup>
    )
}

export default SearchInput
