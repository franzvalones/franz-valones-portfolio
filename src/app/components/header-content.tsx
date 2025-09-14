import { Button } from "@/components/ui/button";

export default function HeaderContent({className}:{className: string}){
    return(
        <div className={`flex flex-col justify-between ${className}`}>
            <p>Branding | Image Making</p>
            <h1 className="font-bold text-[5rem]">Web Developer</h1>
            <p>intro about sa sarili bla bla bla bla</p>
            <Button><div className="flex justify-center">Contact</div></Button>
        </div>
    )
}