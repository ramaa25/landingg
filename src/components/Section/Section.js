const Section = ({children, header}) => {
    return (
        <div className="p-10 pt-0">
            <div className="flex justify-between h-full flex-wrap gap-3">{header}</div>
            {children}
        </div>
    )
}

export default Section;