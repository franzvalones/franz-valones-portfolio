"use client";

const datas = [
    {
        year: "2021",
        title: "Dean's Lister",
        description: "Consistent dean's lister for 3 terms",
    },
    {
        year: "2022",
        title: "Dean's Lister",
        description: "Consistent dean's lister for 3 terms",
    },
    {
        year: "2023",
        title: "Dean's Lister",
        description: "Consistent dean's lister for 3 terms",
    },
    {
        year: "2024",
        title: "Dean's Lister",
        description: "Consistent dean's lister for 3 terms",
    },
    {
        year: "2025",
        title: "Cum Laude",
        description: "Graduated with a CGWA of 3.42",
    },
]

export default function Timeline() {

    return (
        <>
            <h1 className="flex justify-center items-start mt-5 text-2xl sm:text-3xl font-bold">ACADEMIC JOURNEY</h1>
            <div className="md:flex md:justify-center md:items-center w-full overflow-x-auto">
                <div className="flex space-x-10 px-5 py-8">
                    {datas.map((data, key) => (
                        <div key={key} className="flex flex-col items-center min-w-[200px]">
                            {/* Circle with year */}
                            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white font-bold" style={{
                                backgroundColor: key === data.year.length ? "#FF0066" : "#3B82F6", // blue-500 for others
                            }}>
                                {data.year}
                            </div>

                            {/* Line (except last) */}
                            {key !== data.year.length && (
                                <div className="h-1 w-[200px] bg-gray-300 mt-2"></div>
                            )}
                            {/* Placeholder for your content */}
                            <div className="mt-6 text-center">
                                <h3 className="font-semibold">{data.title}</h3>
                                <p className="text-sm text-gray-500">
                                    {data.description}.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
