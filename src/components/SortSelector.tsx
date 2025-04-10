import {Button, Menu, Portal} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Props {
    setSort: (val: SortOrder | null) => void;
    sort: SortOrder | null;
}

export interface SortOrder {
    value: string;
    label: string;
}

function SortSelector({setSort, sort}: Props) {
    const sortList: SortOrder[] = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average rating'},
    ]

    //console.log(sort);

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="outline" size="sm"><BsChevronDown/>{sort !== undefined ? `Sort by: ${sort?.label}` : `Sort by: ${sortList[0].label}`}</Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {sortList.map((order) => <Menu.Item key={order.value} value={order.value} onSelect={() => setSort(order)}>{order.label}</Menu.Item>)}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default SortSelector
