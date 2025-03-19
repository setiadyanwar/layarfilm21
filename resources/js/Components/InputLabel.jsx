export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-base mb-2 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
