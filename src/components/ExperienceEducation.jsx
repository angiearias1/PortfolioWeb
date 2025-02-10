import React from "react";

const experiences =[
    { year: "2023 - Present", title: "UI DESIGNER AND WEB DEVELOPER", company: "Taurus Services"}
]

const education =[
    { year: "2018", title: "HIGH SCHOOL GRADUATE", university: "Institución Educativa Javiera Londoño"},
    { year: "2023", title: "SYSTEM ENGINEER", university: "Universidad Católica Luis Amigó"},
    { year: "2024", title: "UI/UX DESIGN", university: "Course"},
]

const ExperienceEducation = () => {
    return(
        <div className="text-white p-10 section-body">
             <h2 className="title-sections degradient">
                Professional Journey
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 md:mt-16 mt-10">
                {/* Experience Section */}
                <div>
                    <h2 className="title-three mb-8"> My Experience </h2>
                    <div className="space-y-6 md:mt-10 gap-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-[rgba(41,39,39,0.4)] p-4 rounded-lg space-y-2">
                                <div className="flex justify-between items-center">
                                    <p className="text-md text-gray-400">{exp.year}</p>
                                    <p className="text-md font-bold text-gray-300">{exp.company}</p>
                                </div>
                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                                
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                <h2 className="title-three mb-8"> My Education </h2>
                    <div className="space-y-6 md:mt-10">
                        {education.map((edu, index) => (
                            <div key={index} className="bg-[rgba(41,39,39,0.4)] p-4 rounded-lg space-y-2">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-400">{edu.year}</p>
                                    <p className="text-md font-bold text-gray-300">{edu.university}</p>
                                </div>
                                <h3 className="font-inter text-lg font-semibold">{edu.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExperienceEducation;