import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";
import { Input } from "postcss";

Input.propTypes = {
    type: PropTypes.oneOf([
        "text",
        "email",
        "password",
        "number",
        "search",
        "file",
    ]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    autocomplete: PropTypes.string,
    isFocused: PropTypes.bool,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    isError: PropTypes.bool,
    handleChanges: PropTypes.func,
};

export default forwardRef(function TextInput(
    {
        type = "text",
        className = "",
        isFocused = false,
        defaultValue,
        required,
        variant = "primary",
        placeholder,
        isErorr,
        ...props
    },
    ref
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            type={type}
            className={
                'rounded-2xl bg-gray-100 py-[13px] px-7 ${isErorr && "input-error" } input-${variant} ${className} w-full focus:outline-none focus:outline-primary focus:border-transparent'
            }
            ref={localRef}
            required={required}
            defaultValue={defaultValue}
            placeholder={placeholder}
        />
    );
});
