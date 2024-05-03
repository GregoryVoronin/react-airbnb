import './index.css'
import Heading from '../heading'
import Box from '../box'
import { Fragment } from 'react'

export default function RoomTypes({title, items}) {
    return <div className='room__block'>
        <Heading>{title}</Heading>
        <div className='room__list'>
            {items.map(({id, ...rest}) =>
                <Fragment key={id}>
                    <Item {...rest}/>
                </Fragment>
            )}
        </div>
    </div>
}

function Item({type, pricePerNight: price, currency, capacity}) {
    return <Box className='room__item'>
        <div className='room__item-title'>{type}</div>
        <div className='room__item-info'>Кількість гостей: {capacity}</div>
        <div className='room__item-price'>{currency}{price}</div>
    </Box>
}