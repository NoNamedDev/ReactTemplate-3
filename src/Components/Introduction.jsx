const Introduction = ({intro_img1,intro_img2,intro_img3,data_about}) => {
    var images = [intro_img1,intro_img2,intro_img3]
    return(
        <div id="about" className=" grid grid-flow-row">
            {
                data_about.map((value,key) => {
                    if(key%2 === 0){
                        return(
                            <IntroRow1 key={key} Title={value.title} Text={value.text} ImageSrc={images[key]} />
                        )
                    }
                    else{
                        return(
                            <IntroRow2 key={key} Title={value.title} Text={value.text} ImageSrc={images[key]} />
                        )
                    }
                })
            }
        </div>
    )
}

const IntroRow1 = ({Title,Text,ImageSrc}) => {
    return(
        <div className="grid grid-cols-2 my-20">
            <div className=" mr-20 ml-auto">
                <img src={ImageSrc} alt="image_src" className="h-[20rem] w-[20rem] rounded-md m-auto backdrop-filter backdrop-blur-xl"></img>
            </div>
            <div className="self-center">
                <IntroText Title={Title} Text={Text}/>
            </div>

        </div>
    )
}

const IntroRow2 = ({Title,Text,ImageSrc}) => {
    return(
        <div className="grid grid-cols-2 my-20">
            <div className="self-center">
                <IntroText Title={Title} Text={Text}/>
            </div>
            <div className=" ml-20 mr-auto">
                <img src={ImageSrc} alt="image_src" className="h-[20rem] w-[20rem] rounded-md m-auto"></img>
            </div>

        </div>
    )
}

const IntroText = ({Title,Text}) => {
    return(
        <div className="grid p-5 rounded-lg mx-10 bc-bg-2 shadow-lg shadow-black ">
            <h1 className="text-xl underline">{Title}</h1>
            <p className="text-xs sm:text-sm">{Text}</p>
        </div>

    )
} 

export default Introduction;