import "../styles/Global.css"
import photoServices from "../assets/img/Services_landing.png"

const services = [
    { number: "01", title: "Framework development", description: "Building dynamic web applications."},
    { number: "02", title: "Responsive web design", description: "Creation of websites adaptable to any device (desktop, tablet, mobile)."},
    { number: "03", title: "User interface design", description: "Implementation of visually attractive and functional designs."},
    { number: "04", title: "Animation and interactivity", description: "Creation of custom animations with CSS, JavaScript or libraries."},
]

const Services = () => {
    return(
        <section className="section-bg flex flex-col items-center gap-6 p-6">
            <h2 className="title-sections degradient">
                Frontend solutions for your projects
            </h2>

            <div className="w-[80%] flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                    <img src ={photoServices} alt="photo-services" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-6 text-left justify-center items-center">
                    <div className="ml-8 justify-center items-center">
                        {services.map((services, index) => (
                            <div key={index} className="flex flex-row p-4 shadow-md rounded-lg">
                                <span className="number"> {services.number} </span>
                                <div className="flex flex-col ml-6">
                                <h3 className="subtitle"> {services.title} </h3>
                                <p className="text-gray-500 text-md md:text-xl"> {services.description} </p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;