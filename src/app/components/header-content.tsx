import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const datas = [
    {
        label: "Email",
        inputValue: "franz.valones107@gmail.com"
    },
    {
        label: "Linkedin",
        inputValue: "https://www.linkedin.com/in/franz-dainell-valones-9717a916b/"
    },
    {
        label: "Facebook",
        inputValue: "https://www.facebook.com/franzdainell.valones"
    },
    {
        label: "Github",
        inputValue: "https://github.com/Orandafish"
    },
]

export default function HeaderContent({ className }: { className: string }) {
    return (
        <div className={`flex flex-col justify-center ${className}`}>
            <h1 className="font-bold text-[4rem] sm:text-[5rem]">Web Developer</h1>
            <p className="leading-relaxed">I'm Franz Dainell Valones, a passionate Information Technology graduate at National University Baliwag,
                specializing in Web and Mobile Application Development. With hands-on experience as a
                Software Engineer and Quality Assurance Engineer</p>
            <Dialog>
                <form>
                    <DialogTrigger asChild>
                        <Button className="mt-5 mb-5 flex justify-center w-full">Connect with me</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                            <DialogTitle>Connect with me</DialogTitle>
                            <DialogDescription>
                                Let us build something together!
                            </DialogDescription>
                        </DialogHeader>
                        {datas.map((data, key)=>(
                            <div key={key} className="flex items-center gap-2">
                            <div className="grid flex-1 gap-2">
                                <Label htmlFor="link" className="">
                                    {data.label}
                                </Label>
                                <Input
                                    id="link"
                                    defaultValue={data.inputValue}
                                    readOnly
                                />
                            </div>
                        </div>
                        ))}
                        <DialogFooter className="sm:justify-start">
                            <DialogClose asChild>
                                <Button type="button" variant="secondary">
                                    Close
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    )
}