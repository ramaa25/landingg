const Button = ({ title, className }) => {
    return (
        <button
            className={`p-2 px-7 bg-white rounded-full ${className}`}
        >{title}</button>
    )
}

export default Button;