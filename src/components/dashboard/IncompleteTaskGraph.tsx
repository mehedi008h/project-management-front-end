import { Box, Text } from "@chakra-ui/react";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "Page A",
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: "Page B",
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: "Page C",
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: "Page D",
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: "Page E",
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: "Page F",
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
];

const IncompleteTaskGraph = () => {
    return (
        <Box width="100%" height="300px" p={3}>
            <Text fontSize="large" fontWeight="medium">
                Incompleted tasks by selections
            </Text>

            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" barSize={20} fill="red" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </Box>
    );
};

export default IncompleteTaskGraph;
