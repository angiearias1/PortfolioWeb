import { motion } from "framer-motion";

const Skills = () =>{
    const techSkills = [
        { skill: "HTML", percentage: 90 },
        { skill: "CSS", percentage: 90 },
        { skill: "JS", percentage: 80 },
        { skill: "Tailwindcss", percentage: 90 },
        { skill: "Figma", percentage: 90 },
        { skill: "Git", percentage: 80 },
        { skill: "Python", percentage: 70 },
        { skill: "React", percentage: 40 },
    ];

    const softSkills = [
        { skill: "Team work", percentage: 100 },
        { skill: "Communication", percentage: 80 },
        { skill: "Time management", percentage: 100 },
        { skill: "Adaptability", percentage: 100 },
        { skill: "User empathy", percentage: 100 },
       
    ]

    const SkillBar = ({skill, percentage}) => {
        return(
            <div className="bg-[rgba(41,39,39,0.4)] p-4 rounded-lg space-y-2">
                <div className="flex justify-between items-center space-x-4">
                    <p className="text-lg text-white">{skill}</p>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div 
                        initial = {{ width: 0 }}
                        animate = {{ width: `${percentage}%` }}
                        transition= {{ duration: 2, ease: "easeInOut"}}
                        className= "bg-[rgba(198,72,156,0.5)] bg-opacity-20 h-2 rounded-full"
                        />
                    </div>
                </div>            
            </div>
        )
    }

    return(
        <div className="text-white p-10 w-4/5 mx-auto justify-content items-center  ">
            <h2 className="title-sections">
                Soft and technical skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mt-16 mt-8">
                <div>
                    <h2 className="title-three"> Technical skills </h2>
                    <div className="space-y-6 md:mt-10 gap-8">
                        {techSkills.map((skill, index) => (
                            <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="title-three"> Soft skills </h2>
                    <div className="space-y-6 md:mt-10 gap-8">
                        {softSkills.map((skill, index) => (
                            <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
                        ))}
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Skills;