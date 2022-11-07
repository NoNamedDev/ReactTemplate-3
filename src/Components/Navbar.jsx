
import LOGO from "../Resources/icon_BagelCity.jpg"
import NotButton from "./NotButton";

function Navbar () {
    return(
        <div className="grid grid-cols-2 sticky top-0 z-50 bc-bg-1 shadow-md shadow-[#181715]">
            <div className="grid justify-start ml-5">
                <a href={"/"}>
                    <img src={LOGO} alt="logo" className="
                    w-[75px] h-[75px] my-5 sm:my-0
                    sm:w-[100px] sm:h-[100px]"/>
                </a>
            </div>
            <div className=" grid grid-cols-2  mx-auto my-auto sm:flex sm:justify-end sm:space-x-5 sm:mx-10 px-2 py-1">
                <NotButton Name={"Home"} Href={"#"}></NotButton>
                <NotButton Name={"A Propos"} Href={"#about"}></NotButton>
                <NotButton Name={"La Carte"} Href={"#menu"} ></NotButton>
                <NotButton Name={"Contact"} Href={"#contact"}></NotButton>
            </div>
        </div>

    )
}

export default Navbar;