import { Box } from "@chakra-ui/react";
import { DateRange, Range, RangeKeyDict } from "react-date-range";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
interface Props {
    value: Range;
    onChange: (value: RangeKeyDict) => void;
    disabledDates?: Date[];
    minDate?: Date;
    maxDate?: Date;
}

const DatePicker = ({
    value,
    onChange,
    disabledDates,
    maxDate = undefined,
    minDate = new Date(),
}: Props) => {
    return (
        <Box>
            <DateRange
                rangeColors={["maroon"]}
                ranges={[value]}
                date={new Date()}
                onChange={onChange}
                showDateDisplay={false}
                minDate={minDate}
                maxDate={maxDate}
                disabledDates={disabledDates}
                months={2}
                direction="horizontal"
                className="date"
            />
        </Box>
    );
};

export default DatePicker;
