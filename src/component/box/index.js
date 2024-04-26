import './index.css'

export default function Box({children, className, isShadow}) {
    return <div className={`box ${className} ${isShadow ? 'box-shadow' : ''}`}>
        {children}
    </div>
}