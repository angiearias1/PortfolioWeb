import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () =>{
    return(
        <div className="section-bg flex md:flex-row space-y-8 justify-center mx-auto items-center p-6 space-x-8">
            <h2 className="title-sections text-white"> Contact me </h2>
            <div className="flex flex-col space-y-4 flex space-x-8">
                <div className="flex space-x-3">
                    <Mail className="w-6 h-6 text-pink-500" />
                    <span className="text-gray-400 text-xl">ariasparejaangiepaola@gmail.com</span>
                </div>
                <div className="flex space-x-3">
                    <Phone className="w-6 h-6 text-pink-500" />
                    <span className="text-gray-400 text-xl">+57 301 293 89 90</span>
                </div>
                <div className="flex space-x-3">
                    <MapPin className="w-6 h-6 text-pink-500" />
                    <span className="text-gray-400 text-xl">Medellín, Colombia</span>
                </div>
                
            </div>
        </div>
    )
}

export default Contact;