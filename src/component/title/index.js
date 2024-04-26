import './index.css'

export default function Title({
    title='Title',
    rating='0',
    reviews='0',
    city='City',
    country='Country',
    superhost=false
}) {
    return <div className='title'>
        <h1 className='title__main-title'>{title}</h1>
        <div className='title__sub'>
            <div className='title__sub-item'>{rating} рейтинг</div>
            <div className='title__sub-item'>{reviews} відгуків</div>
            <div className='title__sub-item'>{city}, {country}</div>
            {superhost && <div className='title__sub-item'>Супер-хост</div>}
        </div>
    </div>
}