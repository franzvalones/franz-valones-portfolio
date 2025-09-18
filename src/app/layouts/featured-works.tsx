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
import Link from "next/link"
import { FaLink } from "react-icons/fa"

const datas = [
    {
        title: "Zion Academy Institution",
        desc: "A personal website that features the school of Zion",
        content: "/images/zion.jpg",
        link: "https://github.com/franzvalones/zion-academy-institution-website",
        stack: ["PHP", "Javascript", "HTML", "CSS", "MySQL"]
    },
    {
        title: "Incident Reporting System with Mobile GPS Technology",
        desc: "A local barangay system that takes advantage of Map APIs",
        content: "/images/placeholder.png",
        link: "https://github.com/jonasvasallo/irs-tambubong",
        stack: ["Javascript", "Dart", "React", "Flutter", "CSS", "Firebase NoSQL"]
    },
    {
        title: "RACS Cakes & Pastries E-commerce",
        desc: "A personalized ordering system for cakes & pastries",
        content: "/images/racs.jpg",
        link: "https://github.com/franzvalones/RACS-cakes-and-pastries-Ecommerce",
        stack: ["PHP", "Javascript", "HTML", "CSS", "MySQL"]
    }
]

const experiments = [
    {
        title: "React parallax slider",
        desc: "A parallax slider inspired by Camille Mormal",
        content: "/images/experiments.jpg",
        link: "https://github.com/franzvalones/react-slider-test",
        stack: ["Javascript", "React", "CSS", "HTML"]
    }
]

export default function FeaturedWorks() {
    return (
        <div className="relative" id="works">
            {/* Arch decoration only */}
            <div className="absolute top-0 left-0 w-full h-20 bg-background rounded-b-full pointer-events-none"></div>
            {/* Normal flow content */}
            <div className="w-full bg-primary pt-24">
                <div className="flex items-center justify-center">
                    <h1 className="text-secondary mb-3 text-lg">FEATURED WORKS</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly p-5 space-y-4 md:space-y-0">
                    {datas.map((data, key) => (
                        <Card key={key} className="md:w-[30%] transition-transform duration-300 hover:scale-105">
                            <CardHeader>
                                <CardTitle>{data.title}</CardTitle>
                                <CardDescription>{data.desc}</CardDescription>
                                <CardAction>
                                    <Button>
                                        <Link
                                            href={data.link}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <FaLink />
                                        </Link>
                                    </Button>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src={data.content}
                                    alt={data.content + " alt"}
                                    className="w-full h-50 object-cover"
                                />
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
                <div className="flex items-center justify-center">
                    <h1 className="text-secondary mb-3 text-lg">UI/UX Experiments</h1>
                </div>
                <div className="flex flex-col md:flex-row justify-evenly p-5 space-y-4 md:space-y-0">
                    {experiments.map((exp, key) => (
                        <Card key={key} className="md:w-[30%] transition-transform duration-300 hover:scale-105">
                            <CardHeader>
                                <CardTitle>{exp.title}</CardTitle>
                                <CardDescription>{exp.desc}</CardDescription>
                                <CardAction>
                                    <Button>
                                        <Link
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <FaLink />
                                        </Link>
                                    </Button>
                                </CardAction>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src={exp.content}
                                    alt={exp.content + " alt"}
                                    className="w-full h-50 object-cover"
                                />
                            </CardContent>
                            <CardFooter>
                                <div className="flex flex-wrap gap-2 text-xs">
                                    {exp.stack.map((stack, i) => (
                                        <span key={i} className="px-2 py-1 bg-secondary text-primary rounded">
                                            {stack}
                                        </span>
                                    ))}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
