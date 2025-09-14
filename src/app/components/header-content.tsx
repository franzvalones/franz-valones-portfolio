import { Button } from "@/components/ui/button";

export default function HeaderContent({ className }: { className: string }) {
    return (
        <div className={`flex flex-col justify-center ${className}`}>
            <h1 className="font-bold text-[4rem] sm:text-[5rem]">Web Developer</h1>
            <p>I'm Franz Dainell Valones, a passionate Information Technology graduate at National University Baliwag,
                specializing in Web and Mobile Application Development. With hands-on experience as a
                Software Engineer and Quality Assurance Engineer</p>
            <Button className="mt-5"><div className="flex justify-center">Connect with me</div></Button>
        </div>
    )
}