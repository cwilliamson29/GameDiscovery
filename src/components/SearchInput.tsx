import {Input, InputGroup} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";

interface Props {
    onSearch: (searchText: string) => void;
}

function SearchInput({onSearch}: Props) {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form onSubmit={e => {
            e.preventDefault()
            if (inputRef.current) onSearch(inputRef.current.value)
        }}>
            <InputGroup startElement={<BsSearch/>}>
                <Input ref={inputRef} rounded={20} placeholder={"Search over 850,000 games..."}/>
            </InputGroup>
        </form>

    )
}

export default SearchInput
