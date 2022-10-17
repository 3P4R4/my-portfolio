import { Logo } from "../assets/Logo";
export const Header=()=>{
    return (
        <header className="container mx-auto flex justify-between h-24 items-center">
            <a href="/">
                <Logo/>
            </a>
            <nav>
            <ul className="flex gap-6 font-medium">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            </nav>
        </header>
    );
}