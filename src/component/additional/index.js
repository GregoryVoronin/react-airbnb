import './index.css'
import Heading from '../heading'
import Box from '../box'
import ListItem from '../list-item'


export default function Additional({title, items}) {
    return <Box isShadow className='additional__block'>
        <Heading isBorder>{title}:</Heading>
        <List {...items}/>
    </Box>
}

function List({
    house_rules,
    cancellation_policy,
    local_transportation,
    host_languages,
    special_offers
}) {
    const languages = host_languages.toString();
    return  <ul className='list additional__list'>
        <ListItem title='Правила дому'>
            {house_rules}
        </ListItem>
        <ListItem title='Політика скасування'>
            {cancellation_policy}
        </ListItem>
        <ListItem title='Місцевий транспорт'>
            {local_transportation}
        </ListItem>
        <ListItem title='Мови хоста'>
            {languages}
        </ListItem>
        <ListItem title='Спеціальні пропозиції'>
            {special_offers}
        </ListItem>
    </ul>
}