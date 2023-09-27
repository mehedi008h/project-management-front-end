import React from "react";
import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    Spinner,
} from "@chakra-ui/react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { SelectOption } from "..";
import useProjects from "../../hooks/useProjects";
import { IoReloadCircleOutline } from "react-icons/io5";
import useProjectLength from "../../hooks/useProjectLength";

const ProjectSelector = () => {
    const { data, isLoading, fetchNextPage, isFetchingNextPage } =
        useProjects();
    const { data: projects } = useProjectLength();

    return (
        <Menu>
            <MenuButton
                variant="unstyled"
                w="85%"
                as={Button}
                rightIcon={<AiOutlineArrowDown />}
                display="flex"
                alignItems="start"
            >
                <SelectOption arrow project={projects?.[0]} />
            </MenuButton>

            <>
                {isLoading ? (
                    <Box w="100%" textAlign="center">
                        <Spinner color="red" mt={10} />
                    </Box>
                ) : (
                    <MenuList
                        marginTop={5}
                        className="hide-scroll-bar"
                        maxHeight="60vh"
                        overflowY="scroll"
                        width="100%"
                    >
                        {data?.pages.map((page, index) => (
                            <React.Fragment key={index}>
                                {page?.map((project) => (
                                    <SelectOption
                                        key={project._id}
                                        project={project}
                                        arrow={false}
                                    />
                                ))}
                            </React.Fragment>
                        ))}
                        <Box textAlign="center">
                            <Button
                                disabled={isFetchingNextPage}
                                onClick={() => fetchNextPage()}
                                mt={3}
                                rounded="full"
                                size="sm"
                            >
                                {isFetchingNextPage ? (
                                    <Spinner color="red" size="sm" />
                                ) : (
                                    <IoReloadCircleOutline size={20} />
                                )}
                            </Button>
                        </Box>
                    </MenuList>
                )}
            </>
        </Menu>
    );
};

export default ProjectSelector;
