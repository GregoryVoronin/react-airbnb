import './index.css'
import Box from '../box'
import ListItem from '../list-item'

export default function Price({
    old_price,
    price,
    currency,
    ...rest
}) {
    return <Box className={'price'}>
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
    return <ul className='list price__list'>
        <ListItem>
            Плата за прибирання:<span>{currency}{cleaning}</span>
        </ListItem>
        <ListItem>
            Сервісний збір:<span>{currency}{service}</span>
        </ListItem>
        <ListItem>
            Дата прибуття:<span>{checkin}</span>
        </ListItem>
        <ListItem>
            Дата від’їзду:<span>{checkout}</span>
        </ListItem>
    </ul>
}