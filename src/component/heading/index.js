import './index.css'

export default function Heading({children, isBorder}) {
    return <h2 className={`heading ${isBorder ? 'heading-border' : ''}`}>
        {children}
    </h2>
}