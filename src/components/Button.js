const Button = ({ title, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 px-7 bg-white rounded-full ${className}`}
        >{title}</button>
    )
}

export default Button;