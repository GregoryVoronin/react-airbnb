import './index.css'
import Heading from '../heading'
import Box from '../box'
import ListItem from '../list-item'

import PoolIcon from './pool.svg'
import GymIcon from './gym.svg'
import FreeBreakfastIcon from './breakfast.svg'
import FreeWiFiIcon from './wifi.svg'
import ParkingIcon from './parking.svg'
import PetsAllowedIcon from './pets.svg'
import AirportShuttleIcon from './airport.svg'
import ConciergeServiceIcon from './concierge.svg'
import RoomServiceIcon from './room-service.svg'
import ChildFriendlyIcon from './kids.svg'

export default function amenities({title, items}) {
    return <Box isShadow className='amenities__block'>
        <Heading isBorder>{title}</Heading>
        <List {...items}/>
    </Box>
}

function List({
    hasPool,
    hasGym,
    hasFreeBreakfast,
    hasFreeWiFi,
    hasParking,
    hasPetsAllowed,
    hasAirportShuttle,
    hasConciergeService,
    hasRoomService,
    hasChildFriendly,
}) {
    return  <ul className='list amenities__list'>
        {hasPool && <ListItem icon={PoolIcon}>Басейн</ListItem>}
        {hasGym && <ListItem icon={GymIcon}>Спортивний зал</ListItem>}
        {hasFreeBreakfast && <ListItem icon={FreeBreakfastIcon}>Безкоштовний сніданок</ListItem>}
        {hasFreeWiFi && <ListItem icon={FreeWiFiIcon}>Безкоштовний Wi-Fi</ListItem>}
        {hasParking && <ListItem icon={ParkingIcon}>Безкоштовний вуличний паркінг</ListItem>}
        {hasPetsAllowed && <ListItem icon={PetsAllowedIcon}>Дозволено розміщення з домашніми тваринами</ListItem>}
        {hasAirportShuttle && <ListItem icon={AirportShuttleIcon}>Трансфер до/з аеропорту</ListItem>}
        {hasConciergeService && <ListItem icon={ConciergeServiceIcon}>Консьєрж-сервіс</ListItem>}
        {hasRoomService && <ListItem icon={RoomServiceIcon}>Обслуговування номерів</ListItem>}
        {hasChildFriendly && <ListItem icon={ChildFriendlyIcon}>Підходить для дітей</ListItem>}
    </ul>
}