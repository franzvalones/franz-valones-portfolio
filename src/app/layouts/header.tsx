import HeaderContent from "../components/header-content";
import { HeaderPicture } from "../components/header-picture";
import HeaderTechStack from "../components/header-links";
import HeaderGoals from "../components/header-goals";

export default function Header() {
    return (
        <div className="flex flex-col items-center justify-center px-4 sm:px-8">
            {/* Content + Picture side by side on md+, stacked on mobile */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-10 md:gap-20 w-full max-w-6xl">
                <HeaderContent className="order-2 md:order-1"/>
                <HeaderPicture className="order-1 md:order-2"/>
            </div>
            {/* Tech stack below */}
            <div className="max-w-6xl mt-8">
                <HeaderTechStack />
            </div>
            <div>
                <HeaderGoals/>
            </div>
            <div>
            </div>
        </div>
    )
}