
import data_contact from "../Data/data_contact.json"

const Contact = () => {
    return(
        <div id="contact" className="container mx-auto bc-bg-0-75 py-5 mt-10 rounded-lg shadow-lg shadow-black">
            <ContactBox/>
        </div>
    )
}


const ContactBox = () => {
    return(
        <div className="grid space-y-5">
            <ContactTab Title={"Adresse :"} Data={data_contact.location.adress} />
            <ContactTab Title={"E-mail :"} Data={data_contact.email} />
            <ContactTab Title={"Numéro de téléphone :"} Data={data_contact.phone_number} />
            <ContactSM Url={data_contact.social_media.facebook} Type={"fb"} />
            <ContactSM Url={data_contact.social_media.instagram} Type={"insta"} />
            <ContactSM Url={data_contact.social_media.tweeter} Type={"tw"} />
        </div>
    )
}

const ContactTab = ({Title,Data}) => {
    return(
        <div className="grid grid-cols-2 p-1 bc-custom-contacttext">
            <div className="text-center"> <h1> {Title} </h1> </div>
            <div className="text-start"> <h1> {Data} </h1> </div>
        </div>
    )
}

const ContactSM = ({Url,Type}) => {
    switch (Type) {
        case "fb":
            break;
        case "insta":
            break;
        case "tw" :
            break;
        default:
            break;
    }
}




export default Contact;