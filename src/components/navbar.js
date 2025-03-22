import Logo from "./../images/logo.jpeg"

export default function Navbar(){
    return(
        <>
        <div className="w-[100%] h-[70px] bg-slate-400 text-slate-800 justify-between text-xl font-serif cursor-pointer">
        <div className="pt-[20px] pl-[20px]">
        <img src={Logo} className="w-[90px] h-auto "></img>
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