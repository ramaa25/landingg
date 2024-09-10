const Section = ({children, header, className}) => {
    return (
        <div className={`p-10 pt-0 ${className}`}>
            {header}
            {children}
        </div>
    )
}

export default Section;