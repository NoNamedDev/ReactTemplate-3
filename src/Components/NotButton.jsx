
const NotButton = ({Name,Href}) => {
    return(
        <a href={Href} className="bc-text-0 
        text-sm sm:text-2xl
        border-[0.05rem] border-black rounded-lg 
        hover:bc-bg-0 hover:bc-text-2 transition-all duration-200
        px-2 py-1
        ">
            {Name}
        </a>
    )
}

export default NotButton;