export default function Navbar(){
    return(
        <>
        <div className="w-[80%] h-[70px] bg-slate-400 text-slate-800 justify-between text-xl font-serif cursor-pointer">
            <div className="pt-20 pl-20">
                <img></img>
            </div>

            <div>
                <ul className="flex gap-16 mt-[19px] mr-[50px]">
                <li className="hover:text-slate-600">Home</li>
                        <li className="hover:text-slate-600">About</li>
                        <li className="hover:text-slate-600">Contact</li>
                    </ul>
            </div>
        </div>
        </>
    )
}