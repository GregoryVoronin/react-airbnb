import './index.css'

export default function ListItem({
    title,
    icon,
    children,
}) {
    return <li className='list-item'>
        {title && <h3 className='list-item__title'>{title}</h3>}
        <div className='list-item__content'>
            {icon && <img src={icon} width={24} height={24} alt='icon' />}
            {children}
        </div>
    </li>
}