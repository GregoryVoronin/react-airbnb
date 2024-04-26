import './index.css'
import Box from '../box'

export default function Price({
    old_price,
    price,
    currency,
    ...rest
}) {
    return <Box className={'price'} isShadow>
        <div className={`price__block ${old_price ? 'sale' : ''}`}>
            {old_price && <span>{old_price}{currency}</span>} {price}{currency}
        </div>
        <List {...rest} currency={currency}/>
    </Box>
}

function List({
    currency,
    cleaning,
    service,
    checkin,
    checkout
}) {
    return <ul className='price__list'>
        <li className='price__list-item'>
            Плата за прибирання:<span>{currency}{cleaning}</span>
        </li>
        <li className='price__list-item'>
            Сервісний збір:<span>{currency}{service}</span>
        </li>
        <li className='price__list-item'>
            Дата прибуття:<span>{checkin}</span>
        </li>
        <li className='price__list-item'>
            Дата від’їзду:<span>{checkout}</span>
        </li>
    </ul>
}