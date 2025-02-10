import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const ToolsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const tools = [
    { name: "HTML", image: "/images_iconos/html5.svg" },
    { name: "CSS", image: "/images_iconos/css_old.svg" },
    { name: "JS", image: "/images_iconos/javascript.svg" },
    { name: "Git", image: "/images_iconos/git.svg" },
    { name: "Figma", image: "/images_iconos/figma.svg" },
    { name: "Tailwindcss", image: "/images_iconos/tailwindcss.svg" },
    { name: "Python", image: "/images_iconos/python.svg" },
    { name: "React", image: "/images_iconos/react_light.svg" }
  ];

  const ToolCard = ({ name, image }) => (
    <div className="flex flex-col items-center">
      <div className="group-tools">
        <img src={image} alt={name} className="images-icons" />
      </div>
      <p className="mt-2 text-center text-white text-lg">{name}</p>
    </div>
  );

  return (
    <section id="tools" className="p-10">
      <h2 className="title-sections text-white md:mb-12">
        My key allies for creating amazing projects
      </h2>
      <div ref= {ref} className="grid grid-cols-4 space-y-6 md:grid-cols-8 text-center mt-8 md:mt-16">
        {tools.map((tool, index) => (
          <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={ inView ? { opacity: 1, y: 0 } : {} } 
              transition={{
                delay: index * 0.2,
                type: 'spring',
                stiffness: 50,
              }}
            >
            <ToolCard name={tool.name} image={tool.image} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;