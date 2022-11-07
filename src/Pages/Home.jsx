import HeroPhoto from "../Resources/bg_BagelCity.jpg"
import data_about from "../Data/data_about.json"
import intro_img1 from "../Resources/bc_food_1.jpg"
import intro_img2 from "../Resources/bc_donnut.jpg"
import intro_img3 from "../Resources/bc_food_2.jpg"
import Introduction from "../Components/Introduction";
import Menu from "../Components/Menu"
import Contact from "../Components/Contact"
import Footer from "../Components/Footer"

function Home () {
    return(
        <div className="">
            <Hero/>
            <Introduction intro_img1={intro_img1} intro_img2={intro_img2} intro_img3={intro_img3} data_about={data_about} />
            <Menu />
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}


const Hero = () => {
    return(
        <div id="home">
            <div className="relative">
                <div className="relative z-0 w-full">
                    <img src={HeroPhoto} alt="hero_img" className="h-[50rem] w-full"/>
                    <div className="absolute top-0 h-[50rem] w-full bg-black/40 mx-auto" />
                </div>
                <div className="z-10 absolute top-0 w-full ">
                    <div className="grid space-y-10 bg-white/25 my-40 py-5 justify-center">
                        <div className= "grid space-y-10 text-center bc-custom-herotext">
                        <h1 className="text-9xl">Bagel</h1>
                        <h2 className="text-7xl">City</h2>
                    </div>
                    <div>
                        <p className="bc-text-2 shadow-lg shadow-black px-1  italic text-lg">
                            "Nous apportons le goût des <span className="underline">cités</span > dans votre demeure."
                        </p>
                    </div>
                    <a href="https://www.takeaway.com/be-en/menu/bagel-city" target={"_blank"} rel="noreferrer" className="text-xl text-white 
                    mx-auto
                    border-[0.15rem] border-white
                    px-2 py-1
                     hover:bg-white hover:bc-text-0 transition-all duration-150
                      rounded-md">Commander En Ligne</a>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}



export default Home;