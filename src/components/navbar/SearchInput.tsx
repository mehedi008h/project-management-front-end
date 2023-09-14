import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useUserStore from "../../store/useUserStore";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);
    const setSearchText = useUserStore((s) => s.setSearchText);

    return (
        <Box width="100%">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    if (ref.current) {
                        setSearchText(ref.current.value);
                    }
                }}
            >
                <InputGroup width="100%">
                    <InputLeftElement children={<BsSearch />} />
                    <Input
                        ref={ref}
                        borderRadius={20}
                        placeholder="Search users..."
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
