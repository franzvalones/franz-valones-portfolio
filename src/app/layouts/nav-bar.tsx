import { ModeToggle } from "../components/theme-toggler";
import Link from "next/link";


export default function Nav() {
    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
                <h1 className="font-bold text-2xl">Franz 😀</h1>
            </div>
            <nav className="flex items-center space-x-6">
                <Link href="#">About</Link>
                <Link href="#">Work</Link>
                <Link href="#">Contact</Link>
                <ModeToggle className="h-[2.5rem] w-[2.5rem]" />
            </nav>
        </div>
    )
}