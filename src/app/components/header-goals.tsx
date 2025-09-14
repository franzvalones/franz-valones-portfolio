export default function HeaderGoals(){
    return(
        <div className="relative flex items-center justify-center flex-col w-full md:flex-row">
        <div className="flex items-center justify-center bg-primary [clip-path:polygon(10%_10%,100%_10%,93.05%_16.17%,88.87%_18.26%,85.44%_22.94%,81.13%_31.71%,75.83%_36.05%,72.75%_42.96%,71.42%_51.43%,67.61%_55.74%,64.48%_61.5%,64.48%_65.54%,62.16%_76.75%,62.16%_83.71%,64.48%_90%,10%_90%)] w-80 h-50 sm:w-100 sm:h-64">
            <h1 className="dark:text-gray-800 text-gray-100 text-5xl font-bold">Failure</h1>
        </div>
        <div>
            <h1 className="text-5xl font-bold mr-7">teaches</h1>
        </div>
        <div className="flex items-center justify-center bg-primary [clip-path:polygon(43.39%_10%,100%_10%,100%_90%,10%_90%)] w-full h-50 sm:w-100 sm:h-64">
            <h1 className="dark:text-gray-800 text-gray-100 text-5xl font-bold ml-15">Success</h1>
        </div>
        </div>
        
    )
}