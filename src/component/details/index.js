import './index.css'
import Heading from '../heading'
import Box from '../box'
import ListItem from '../list-item'
import guestsIcon from './guest.svg'
import bedroomIcon from './bedroom.svg'
import bedIcon from './beds.svg'
import bathIcon from './bath.svg'

export default function Details({title, items}) {
    return <Box isShadow className='details__block'>
        <Heading isBorder>{title}:</Heading>
        <List {...items}/>
    </Box>
}

function List({
    guests,
    bedrooms,
    beds,
    baths,
}) {
    return  <ul className='list details__list'>
        <ListItem icon={guestsIcon}>
            {guests} {guests > 1 ? 'гостя' : 'гість'}
        </ListItem>
        <ListItem icon={bedroomIcon}>
            {bedrooms} {bedrooms > 1 ? 'спалень' : 'спальня'}
        </ListItem>
        <ListItem icon={bedIcon}>
            {beds} {beds > 1 ? 'ліжка' : 'ліжко'}
        </ListItem>
        <ListItem icon={bathIcon}>
            {baths} {baths > 1 ? 'ванні кімнати' : 'ванна кімната'}
        </ListItem>
    </ul>
}