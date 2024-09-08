const Section = ({children, header}) => {
    return (
        <div className="p-10 pt-0">
            <div className="flex justify-between h-full">{header}</div>
            {children}
        </div>
    )
}

export default Section;