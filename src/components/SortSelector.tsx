import {Button, Menu, Portal} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import {useState} from "react";


function SortSelector() {
    const list = ["Relevance", "Date added", "Name", "Release Date", "Popularity", "Average rating"]
    const [listItem, setList] = useState('');
    //if (error) return null

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm"><BsChevronDown/>{listItem !== '' ? `Sort by: ${listItem}` : "Sort by"}</Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {list.map((item: string) => <Menu.Item key={item} value={item} onSelect={() => setList(item)}>{item}</Menu.Item>)}
                        <Menu.Item value={"Remove Platform"} onSelect={() => setList('')}>Remove sort</Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default SortSelector
