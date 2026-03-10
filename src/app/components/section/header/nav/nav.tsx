import { LINKS_MENU } from "@/app/static-const"

export default function Nav() {
    return (
        <nav className="pro-navigation">
            <ul className="pro-navigation__list">
                {LINKS_MENU.map((link) => (
                    <li key={link.id}>
                        <a className="pro-navigation__href" href={link.href}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}