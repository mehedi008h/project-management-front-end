import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { InputField } from "..";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Data: " + JSON.stringify(data));
    };
    return (
        <InputField
            id="searchText"
            type="text"
            placeHolder="Search ..."
            register={register}
            icon={<BiSearch />}
            errors={errors}
            required
        />
    );
};

export default SearchInput;
