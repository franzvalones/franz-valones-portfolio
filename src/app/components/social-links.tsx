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
        inputValue: "https://github.com/franzvalones"
    },
]

export default function SocialLinks({ trigger }: { trigger?: React.ReactNode }) {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    {trigger}
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Connect with me</DialogTitle>
                        <DialogDescription>
                            Let us build something together!
                        </DialogDescription>
                    </DialogHeader>
                    {datas.map((data, key) => (
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
    )
}