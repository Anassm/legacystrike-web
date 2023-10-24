import { Link } from "react-router-dom";
import logo from "../../../assets/static/images/logo.png";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Navbar = () => {
    const size = 50
    return (
        <div className="flex flex-row items-center justify-between gap-5 text-xl">
            <div className="flex flex-row items-center justify-start gap-5">
                <Link to="/" className="flex flex-row items-center gap-3">
                    <img src={logo} width={size} height={size} />
                    <div className="text-3xl font-bold">LegacyStrike</div>
                </Link>
                <a href="https://legacystrike.net/fastdl/" target="_blank" rel="noreferrer">
                    FastDL
                </a>
                <Link to="/stats">
                    Stats
                </Link>
            </div>
            <div className="flex flex-row items-center justify-end gap-5">
                <Link to="/support-us">
                    Support us
                </Link>
                <button className="flex flex-row items-center gap-2 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" >
                    <LiaShoppingBagSolid/>
                    <div>Store</div>
                </button>
            </div>
        </div>
    )
}

export default Navbar;