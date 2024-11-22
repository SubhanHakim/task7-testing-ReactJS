interface IButtonProps {
    progress: number;
    title: string
}


const Progress = ({ progress, title }: IButtonProps) => {
    return (
        <>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-blue-700 dark:text-textsecondary">{title}</span>
                <span className="text-sm font-medium text-blue-700 dark:text-textsecondary">{progress}</span>
            </div>
            <div className="w-full bg-[#EEEEEE] rounded-full h-4 dark:bg-[#EEEEEE] ">
                <div className="bg-blue-600 h-4 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
        </>
    )
}

export default Progress