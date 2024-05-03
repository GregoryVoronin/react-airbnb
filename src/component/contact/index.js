import './index.css'
import Heading from '../heading'

export default function Contact({
    name,
    image,
    response_rate,
    response_time,
    info,
    phone,
}) {
    return <div className='contact__block'>
        <div className='contact__wrapper'>
            <img src={image} height={80} width={80} alt={name}></img>
            <div className='contact__info'>
                <Heading>Господар – {name}</Heading>
                <div className='title__sub'>
                    <div className='title__sub-item'>{phone}</div>
                    <div className='title__sub-item'>{response_time}</div>
                    <div className='title__sub-item'>{response_rate}% швидкості відгуку</div>
                </div>
            </div>
        </div>
        
        <p>{info}</p>
    </div>
}