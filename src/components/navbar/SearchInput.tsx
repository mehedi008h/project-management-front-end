import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import useUserStore from "../../store/useUserStore";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import useProjectStore from "../../store/useProjectStore";
import { SearchType } from "../../enums/search.enum";
import { MdClear } from "react-icons/md";

interface Props {
    type: string;
}

const SearchInput = ({ type }: Props) => {
    const [text, setText] = useState<string>("");
    const projectQuery = useProjectStore((s) => s.projectQuery);
    const setUserSearchText = useUserStore((s) => s.setSearchText);
    const setProjectSearchText = useProjectStore((s) => s.setSearchText);
    const clearSearchText = useProjectStore((s) => s.clearSearchText);

    const handleClearSearch = () => {
        clearSearchText();
        setText("");
    };

    return (
        <Box width="100%">
            <form
                onSubmit={(event) => {
                    event.preventDefault();

                    if (type === SearchType.USER) {
                        setUserSearchText(text);
                    }
                    if (type === SearchType.PROJECT) {
                        setProjectSearchText(text);
                    }
                }}
            >
                <InputGroup width="100%">
                    {projectQuery.searchText ? (
                        <InputLeftElement
                            children={<MdClear color="red" size={21} />}
                            onClick={handleClearSearch}
                        />
                    ) : (
                        <InputLeftElement children={<BsSearch />} />
                    )}

                    <Input
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        borderRadius={20}
                        placeholder={`Search ${type}s ...`}
                        variant="filled"
                        width="100%"
                        color="gray.300"
                        fontSize={15}
                        border="1px"
                        borderColor="gray.600"
                        _focus={{ borderColor: "teal" }}
                        _hover={{ borderColor: "teal" }}
                    />
                </InputGroup>
            </form>
        </Box>
    );
};

export default SearchInput;
