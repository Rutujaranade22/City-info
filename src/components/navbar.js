 
export default function Navbar() {
  return (
    <>
      <div className="w-full h-[70px] bg-slate-400 text-slate-800 mx-auto flex items-center justify-between text-xl font-serif cursor-pointer px-4">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center pl-4">
           <h1 className="text-2xl font-bold mt-1 font-[cursive] text-black">Sinnar City...🌆</h1>
        </div>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex gap-16 mt-[10px] mr-[50px]">
            <li className="hover:text-rose-800">🏠</li>
            <li className="hover:text-rose-800">📞</li>
            <li className="hover:text-rose-800">🚂</li>
          </ul>
        </nav>
      </div>
    </>
  );
}
