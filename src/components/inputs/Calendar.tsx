import { Box } from "@chakra-ui/react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface Props {
    value: Range;
    onChange: (value: RangeKeyDict) => void;
    disabledDates?: Date[];
}

const DatePicker = ({ value, onChange, disabledDates }: Props) => {
    return (
        <Box w="100%">
            <DateRange
                className="date"
                rangeColors={["#262626"]}
                ranges={[value]}
                date={new Date()}
                onChange={onChange}
                direction="vertical"
                showDateDisplay={false}
                minDate={new Date()}
                disabledDates={disabledDates}
                fixedHeight
            />
        </Box>
    );
};

export default DatePicker;
