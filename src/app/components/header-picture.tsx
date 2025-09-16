"use client"

import { useState } from "react"

export function HeaderPicture({ className }: { className: string }) {
    const [isHovered, setIsHovered] = useState(false)
    
    return (
        <div className={className}>
            <div className="flex justify-center items-center" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
                <div className={`bg-[#FF0066] [clip-path:polygon(100%_0%,75%_50%,100%_100%,25%_100%,0%_50%,25%_0%)] w-50 sm:w-50 h-100 bg-cover bg-center transition-transform duration-300 ${isHovered ? "-translate-x-4" : "translate-x-0"}`}
                    style={{ backgroundImage: "url" }}>
                </div>
                <div className={`bg-primary [clip-path:polygon(25%_0%,100%_0%,75%_100%,0%_100%)] w-80 sm:w-50 h-100 bg-cover bg-center transition-transform duration-300 ${isHovered ? "scale-110" : "translate-x-0"}`}
                    style={{ backgroundImage: "url('/images/me.jpg')" }}>
                </div>
                <div className={`bg-primary [clip-path:polygon(75%_0%,100%_50%,75%_100%,0%_100%,25%_50%,0%_0%)] w-50 sm:w-50 h-100 bg-cover bg-center transition-transform duration-300 ${isHovered ? "translate-x-4" : "translate-x-0"}`}
                    style={{ backgroundImage: "url('')" }}>
                </div>
            </div>

        </div>
    )
}