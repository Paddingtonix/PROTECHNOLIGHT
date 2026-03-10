import Button from '@/app/components/ui/button/button'
import Logo from './logo/logo'
import Nav from './nav/nav'

export default function Header() {
    return (
        <header className='pro-header'>
            <Logo />
            <Nav />
            <Button text='Связаться'/>
        </header>
    )
}