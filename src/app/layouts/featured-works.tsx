import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaLink } from "react-icons/fa"

const datas = [
    {
        title: "Zion Academy Institution",
        desc: "A personal website that features the school of Zion",
        content: "Card content",
        footer: "Card footer",
        stack: ["PHP", "Javascript", "HTML", "CSS", "MySQL"]
    },
    {
        title: "Incident Reporting System with Mobile GPS Technology",
        desc: "A local barangay system that takes advantage of Map APIs",
        content: "Card content",
        footer: "Card footer",
        stack: ["Javascript", "Dart", "React", "Flutter", "CSS", "Firebase NoSQL"]
    },
    {
        title: "RACS Cakes & Pastries E-commerce",
        desc: "A personalized ordering system for cakes & pastries",
        content: "Card content",
        footer: "Card footer",
        stack: ["PHP", "Javascript", "HTML", "CSS", "MySQL"]
    }
]

export default function FeaturedWorks() {
    return (
        <div className="relative">
            {/* Arch decoration only */}
            <div className="absolute top-0 left-0 w-full h-20 bg-background rounded-b-full pointer-events-none"></div>
            {/* Normal flow content */}
            <div className="w-full bg-primary pt-24">
                <div className="flex items-center justify-center">
                    <h1 className="text-secondary mb-3 text-lg">FEATURED WORKS</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly p-5 space-y-4 md:space-y-0">
                    {datas.map((data, key) => (
                        <Card key={key} className="md:w-[30%]">
                            <CardHeader>
                                <CardTitle>{data.title}</CardTitle>
                                <CardDescription>{data.desc}</CardDescription>
                                <CardAction>
                                    <Button><FaLink /></Button>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <p>{data.content}</p>
                            </CardContent>
                            <CardFooter>
                                <div className="flex flex-wrap gap-2 text-xs">
                                    {data.stack.map((tech, i) => (
                                        <span key={i} className="px-2 py-1 bg-secondary text-primary rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>

            {/* This will now be pushed down correctly */}
            <div className="border border-red-500 h-20">
                Below section
            </div>
        </div>
    )
}
