import { ReactNode, useEffect, useRef, useState } from "react"
import { FaChevronDown } from "react-icons/fa6";

interface Props {
    title: ReactNode,
    content: ReactNode
}

function AccordianComponent({title, content}: Props) {
    const [expanded, setExpanded] = useState(false)
    const expandableContent = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (expandableContent.current)
            expandableContent.current?.classList.toggle('accordian__content__expanded')
    }, [expanded])

    return (
        <div className="accordian">
            <div className="accordian__title" onClick={() => setExpanded(!expanded)}>
                {title}
                <FaChevronDown className="accordian__chevron"/>
            </div>
            <div className="accordian__content" ref={expandableContent}>
                {content}
            </div>
        </div>
    )
}

export default AccordianComponent