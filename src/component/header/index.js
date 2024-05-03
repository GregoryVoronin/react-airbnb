import './index.css'
import logo from './logo.svg'

export default function Header() {
    return <header>
        <img className='logo' alt='airbnb logo' src={logo} height={32}></img>
    </header>
}