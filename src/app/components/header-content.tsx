import { Button } from "@/components/ui/button";
import SocialLinks from "./social-links";
import { CvDownload } from "./download-cv";

export default function HeaderContent({ className }: { className: string }) {
    return (
        <div className={`flex flex-col justify-center ${className}`}>
            <h1 className="font-bold text-[4rem] sm:text-[5rem]">Web Developer</h1>
            <p className="leading-relaxed">Hello 👋 I&apos;m Franz Dainell Valones, a technology-driven Information Technology graduate at National University Baliwag,
                specializing in Web and Mobile Application Development. With hands-on experience as a
                Software Engineer and Quality Assurance Engineer</p>
            <SocialLinks
                trigger={
                    <Button className="mt-5 mb-5 flex justify-center w-full">
                        Connect with me
                    </Button>
                } />
            <CvDownload/>    
        </div>
    )
}