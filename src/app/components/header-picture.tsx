import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Image from "next/image"
export function HeaderPicture({className}:{className: string}) {
    return (
        <div className={className}>
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
        >
            <ResizablePanel defaultSize={40}>
                <div className="relative h-full w-full">
                    <Image
                        src="/images/me.jpg"
                        alt="me"
                        fill
                        className="object-cover"
                    />
                </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={60}>
                <div className="relative h-90 w-full">
                    <Image
                        src="/images/me.jpg"
                        alt="me"
                        fill
                        className="object-cover"
                    />
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
        </div>
    )
}