import { motion } from "framer-motion";
import { useAtom } from "jotai";
import { useForm, ValidationError } from '@formspree/react';
import { currentProjectAtom, projects } from "./Projects";

const Section = (props) => {
    const { children, mobileTop } = props
    return ( 
        <motion.section
            className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start ${mobileTop ? "justify-start md:justify-center": "justify-center"}`}
            initial={{ opacity: 0, y: 50,}}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                duration: 1,
                delay: 0.6,
                },
            }}
            >
            {children}
    </motion.section>
    )
}

export const Interface = (props) => {
    const { setSection } = props
    return (
        <div className={`flex flex-col items-start w-screen`}>
            <Section>
                <About setSection={setSection}/>
            </Section>
            <Section>
                <Skills/>
            </Section>
            <Section>
                <Projects/>
            </Section>
            <Section>
                <Contact/>
            </Section>
        </div>
        )
}

const About = (props) => {
  const { setSection } = props
    return (
        <Section mobileTop>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-snug text-white">
                Hi, I'm
                <br />
                <span className="px-1 italic">Ansh Tyagi</span>
            </h1>
            <motion.p
                className="text-lg text-white mt-4"
                initial= {{ opacity: 0, y: 25 }}
                whileInView= {{ opacity: 1, y: 0 }}
                transition= {{ duration: 0.7, delay: 1.5 }}>
                I Build Web Apps
            </motion.p>
            {/* <motion.button
                className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                onClick={() => setSection(3)}>
                Contact me
            </motion.button> */}
        </Section>
    )
}

const skills = [
    {
      title: "JavaScript",
      level: 80,
    },
    {
      title: "Typescript",
      level: 90,
    },
    {
      title: "ReactJS",
      level: 85,
    },
    {
      title: "Threejs / React Three Fiber",
      level: 65,
    },
    {
      title: "Python",
      level: 86,
    },
    {
      title: "NextJS",
      level: 75,
    },
    {
      title: "Nodejs",
      level: 85,
    },
    {
    title: "NestJS",
    level: 85,
    },
    {
      title: "MongoDB",
      level: 80,
    },
    {
      title: "MySQL",
      level: 75,
    },
    {
    title: "PostgreSQL",
    level: 60,
    },
    {
      title: "Redis",
      level: 83,
    },
    {
      title: "GraphQL",
      level: 61,
    },
  ];

  const Skills = () => {
    return (
      <Section>
        <motion.div whileInView={"visible"} className="w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Skills</h2>
          <div className=" mt-8 space-y-4">
            {skills.map((skill, index) => (
              <div className="w-full md:w-64 mr-10 md:mr-0" key={index}>
                <motion.h3
                  className="text-lg md:text-xl font-bold text-white"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                      delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-green-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>
    );
  };

const Projects = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className="flex w-full h-full gap-8 items-center justify-center" style={{ marginTop: "700px" }}>
        <button
          className="hover:text-orange-400 transition-colors text-orange-600 text-3xl md:text-6xl"
          onClick={previousProject}
        >
          ← 
        </button>
        <h2 className="text-2xl md:text-5xl font-bold">Some things I've Worked On</h2>
        <button
          className="hover:text-orange-400 transition-colors text-orange-600 text-3xl md:text-6xl"
          onClick={nextProject}
        >
           →
        </button>
      </div>
    </Section>
  );
};

const Contact = () => {
  const [state, handleSubmit] = useForm("xzblyqkq");
  return (
    <Section>
      <h2 className="text-3xl md:text-5xl font-bold">Contact me</h2>
      <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
        {state.succeeded ? (
          <p className="text-gray-900 text-center">Thanks for your message !</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label for="name" className="font-medium text-gray-900 block mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label
              for="email"
              className="font-medium text-gray-900 block mb-1 mt-8"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
            />
            <ValidationError
              className="mt-1 text-red-500"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 "
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </Section>
  );
};

