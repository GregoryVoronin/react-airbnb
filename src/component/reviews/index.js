import './index.css'
import Heading from '../heading'
import Box from '../box'
import { Fragment } from 'react'

export default function Reviews({title, items}) {
    return <div className='review__block'>
        <Heading>{title}</Heading>
        <div className='review__list'>
            {items.map(({id, ...rest}) =>
                <Fragment key={id}>
                    <Item {...rest}/>
                </Fragment>
            )}
        </div>
    </div>
}

function Item({guestName, rating, review: text}) {
    return <Box className='review__item'>
        <div className='review__item-title'>
            <div className='review__author'>{guestName}</div>
            <div className='review__rate'>Рейтинг: {rating}</div>
        </div>
        <div className='review__item-info'>{text}</div>
    </Box>
}