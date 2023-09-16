import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useUserStore from "../../store/useUserStore";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import useProjectStore from "../../store/useProjectStore";
import { SearchType } from "../../enums/search.enum";

interface Props {
    type: string;
}

const SearchInput = ({ type }: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    const setUserSearchText = useUserStore((s) => s.setSearchText);
    const setProjectSearchText = useProjectStore((s) => s.setSearchText);

    return (
        <Box width="100%">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (ref.current) {
                        if (type === SearchType.USER) {
                            setUserSearchText(ref.current.value);
                        }
                        if (type === SearchType.PROJECT) {
                            setProjectSearchText(ref.current.value);
                        }
                    }
                }}
            >
                <InputGroup width="100%">
                    <InputLeftElement children={<BsSearch />} />
                    <Input
                        ref={ref}
                        borderRadius={20}
                        placeholder={`Search ${type}s ...`}
                        variant="filled"
                        width="100%"
                        color="gray.300"
                        fontSize={15}
                        border="1px"
                        _focus={{ borderColor: "teal" }}
                        _hover={{ borderColor: "teal" }}
                    />
                </InputGroup>
            </form>
        </Box>
    );
};

export default SearchInput;
