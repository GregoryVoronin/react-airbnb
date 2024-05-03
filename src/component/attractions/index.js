import './index.css'
import Heading from '../heading'
import Box from '../box'
import ListItem from '../list-item'


export default function Attractions({title, items}) {
    return <Box isShadow className='attractions_block'>
        <Heading isBorder>{title}</Heading>
        <ul className='list attractions__list'>
            {items.map(({id, ...rest}) =>
                <List {...rest}/>
            )}
        </ul>
    </Box>
}

function List({
    id,
    name,
    link,
}) {
    return <ListItem key={id}><a href={link}>{name}</a></ListItem>
}