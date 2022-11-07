
import data_menu from "../Data/data_menu.json";

const Menu = () => {
    return(
        <div id="menu" className="bc-bg-2 container mx-auto py-2">
            <div className="text-3xl text-center mx-10 border-b-[0.01rem] border-b-[#181715]"> La Carte</div>

            <ItemTabSpecial Name={"Formule Menu Bagel"} Price={12.95} PriceValute={"€"} ListOfIngredients={"Bagel au choix, Frites maison, Sauce et Boisson"} />

            {
                data_menu.content.map((value,key) => {
                    return(maker(value.category,value.items))
                })
            }
        </div>
    )
}

function maker (CategoryName,CategoryItems) {
    return(
        <div className="grid space-y-3 my-5 pb-2">
            <MenuCategory Name={CategoryName} />
            {
                CategoryItems.map((value,key) => {
                    return(
                        <ItemTab key={key} Name={value.name} Price={value.price.toFixed(2)} PriceValute={value.valute} ListOfIngredients={value.ingredients} ></ItemTab>
                    )
                })
            }
        </div>
    )
}

const MenuCategory = ({Name}) => {
    return(
        <div className="text-3xl mx-2 text-white">{Name}</div>
    )
}

const ItemTab = ({Name,Price,PriceValute,ListOfIngredients}) => {
    return(
        <div className="bc-bg-1 grid space-y-1 m-2 p-1 rounded-lg shadow-sm shadow-black">
            <h1 className="sm:text-xl">{Name}</h1>
            <p className="sm:text-lg font-bc_font_2">{ListOfIngredients}</p>
            <h2 className="sm:text-lg">{ PriceValute + " " + Price}</h2>
        </div>
    )
}
 
const ItemTabSpecial = ({Name,Price,PriceValute,ListOfIngredients}) => {
    return(
        <div className="bc-bg-1 grid space-y-1 m-2 p-1 rounded-lg shadow-sm shadow-black">
            <h1 className="sm:text-2xl underline">{Name}</h1>
            <p className="sm:text-xl font-bc_font_2">{ListOfIngredients}</p>
            <h2 className="sm:text-xl">{ PriceValute + " " + Price}</h2>
        </div>
    )
}

export default Menu;