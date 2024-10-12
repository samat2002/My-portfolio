export default function Navbar() {
    return (
        <div className="w-100 flex justify-between bg-purple-700 p-4 text-white items-center">
            <div>
                My portfolio
            </div>
            <ul className="flex">
                <li className="px-4 hover:bg-purple-400 transition-transform duration-500 rounded-3xl p-2">
                    Home
                </li>
                <li className="px-4 hover:bg-purple-400 transition-transform duration-500 rounded-3xl p-2">
                    About me
                </li>
                <li className="px-4 hover:bg-purple-400 transition-transform duration-500 rounded-3xl p-2">
                    Portfolio
                </li>
                <li className="px-4 hover:bg-purple-400 transition-transform duration-500 rounded-3xl p-2">
                    Mise
                </li>
            </ul>
        </div>
    )
}