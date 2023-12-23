import { Link } from "react-router-dom";
import logo from "../../../assets/static/images/logo.png";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Navbar = () => {
  const size = 50;
  return (
    <nav class="flex flex-wrap items-center justify-between">
      <div className="flex flex-row gap-5 items-center">
        <img src={logo} width={size} height={size} alt="logo" />
        <div className="text-3xl font-bold">LegacyStrike</div>
      </div>
      <div className="flex flex-row justify-end">
      <div class="md:hidden dropdown dropdown-end">
          <div tabindex="10" role="button" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabindex="10" class="z-10 menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow rounded-box w-52">
            <li><Link to="/stats">Stats</Link></li>
            <li><a href="https://legacystrike.net/fastdl/" target="_blank" rel="noreferrer">FastDL</a></li>
            <li><Link to="/support-us">Support us</Link></li>
          </ul>
        </div>
        <div class="hidden md:block" id="navbar-default">
          <div class="flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <div>
              <a
                href="https://legacystrike.net/fastdl/"
                target="_blank"
                rel="noreferrer"
              >
                FastDL
              </a>
            </div>
            <div>
              <Link to="/stats">Stats</Link>
            </div>
            <div>
              
            </div>
            <div>
              <button className="flex flex-row items-center gap-2 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                <LiaShoppingBagSolid />
                <div>Store</div>
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
