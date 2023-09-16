import React from "react";
import { Empty, Heading, ProjectConatiner } from "..";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box, Spinner } from "@chakra-ui/react";
import useProgressProjects from "../../hooks/useProgressProjects";

const ProgressProject = () => {
    const { data, isLoading, fetchNextPage, hasNextPage } =
        useProgressProjects();

    const fetchedProjectCount =
        data?.pages.reduce((total, page) => total + page.length, 0) || 0;

    if (data?.pages[0].length === 0)
        return <Empty text="No project in progress" />;
    return (
        <React.Fragment>
            <Heading text="Progress" total={0} loading={isLoading} />
            <InfiniteScroll
                dataLength={fetchedProjectCount}
                hasMore={!!hasNextPage}
                next={() => fetchNextPage()}
                loader={
                    <Box w="100%" textAlign="center">
                        <Spinner color="red" mt={10} />
                    </Box>
                }
            >
                {data?.pages.map((page, i) => (
                    <ProjectConatiner
                        key={i}
                        projects={page}
                        loading={isLoading}
                    />
                ))}
            </InfiniteScroll>
        </React.Fragment>
    );
};

export default ProgressProject;
