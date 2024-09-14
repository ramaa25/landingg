const Section = ({children, header, className}) => {
    return (
        <div className={`p-10 px-20 pt-0 ${className}`}>
            {header}
            {children}
        </div>
    )
}

export default Section;