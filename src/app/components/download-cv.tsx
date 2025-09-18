import { Button } from "@/components/ui/button"
import { FaFilePdf } from "react-icons/fa"
export function CvDownload() {
    return (
        <>
            <a
                href="/images/Valones_Franz.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="">
                <Button variant="outline" size="sm" className="w-full">
                    <FaFilePdf /> View my Resume
                </Button>
            </a>
        </>
    )
}
