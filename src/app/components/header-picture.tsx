import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Image from "next/image"
export function HeaderPicture({ className }: { className: string }) {
    return (
        <div className={className}>
            <div className="flex justify-center items-center">
                {/* <div className="relative h-100 w-50">
                    <Image
                        src="/images/me.jpg"
                        alt="me"
                        fill
                        className="object-cover"
                    />
                </div> */}
                 <div className="bg-[#FF0066] [clip-path:polygon(100%_0%,75%_50%,100%_100%,25%_100%,0%_50%,25%_0%)] w-30 sm:w-50 h-100 bg-cover bg-center" 
                 style={{ backgroundImage: "url"}}>

                </div>
                <div className="bg-primary [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)] w-100 sm:w-50 h-100 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/me.jpg')" }}>
                </div>
                <div className="bg-primary [clip-path:polygon(75%_0%,100%_50%,75%_100%,0%_100%,25%_50%,0%_0%)] w-30 sm:w-50 h-100 bg-cover bg-center"
                style={{ backgroundImage: "url('')" }}>
                </div>
            </div>
            
        </div>
    )
}