export default function MainBlock({children}: {children: React.ReactNode}){
    return (
        <div className="w-full p-6 sm:p-8 lg:p-16">
            {children}
        </div>
    )
}