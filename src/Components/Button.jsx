import { Link } from "react-router-dom"

const Button = ({Name,Href}) => {
    return(
        <Link to={Href} className="bc-text-0 
        text-md sm:text-2xl
        border-[0.05rem] border-black rounded-lg 
        hover:bc-bg-0 hover:bc-text-2 transition-all duration-200
        px-2 py-1
        ">
            {Name}
        </Link>
    )
}

export default Button;