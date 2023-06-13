import project1 from '@/assets/project-1.png'
import project2 from '@/assets/project-2.png'
import project3 from '@/assets/project-3.png'
import Image, { StaticImageData } from 'next/image'

interface ProjectType {
  title: string
  image: StaticImageData
  description: string
  link: string
  technologies: string[]
}

const projects: ProjectType[] = [
  {
    title: 'Spacetime',
    image: project1,
    link: 'https://github.com/ifgabriel/spacetime',
    description: `
      Memory recovery application, where the user can add texts, photos and videos of important 
      events in his life in a timeline, organized by month and year.

      This project was developed together with the NLW event promoted by rockeseat.
    `,
    technologies: ['React', 'Next', 'Typescript', 'Tailwind', 'Node'],
  },
  {
    title: 'Kanban',
    image: project2,
    link: 'https://github.com/ifgabriel/kanban',
    description: `
      Task management application, where user can add tasks, with title, description,
      status. In this way, you can manage tasks based on status and priority.

      This project was created to be used as a showcase of my knowledge in mirageJS and API consumption.
    `,
    technologies: ['React', 'Next', 'Typescript', 'Tailwind', 'MirageJS'],
  },
  {
    title: 'Utils',
    image: project3,
    link: 'https://github.com/ifgabriel/utils',
    description: `
      In this project, it is possible to visualize common functions in a developer's 
      everyday life. The repository is made up of some of these functions, just code, there is no UI.

      It is a place of presentation of programming logic and unit tests.
    `,
    technologies: ['React', 'Jest', 'Typescript', 'React Testing Library'],
  },
]

const Project = ({
  title,
  image,
  description,
  technologies,
  link,
}: ProjectType) => (
  <li>
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="relative flex flex-row flex-wrap justify-between gap-8"
    >
      <div>
        <span className="text-base text-primary-100">Featured Project</span>
        <h3 className="mb-8 text-2xl font-semibold">{title}</h3>
        <div className="left-0 max-w-xl rounded-md bg-white/30 p-6 backdrop-blur-md md:absolute">
          <p className="text-sm">{description}</p>
          <p className="mt-4 text-sm">
            It was created using{' '}
            <span className=" text-primary-100">{technologies.join(', ')}</span>
          </p>
        </div>
      </div>
      <div className="w-fit rounded-xl bg-primary-100 pt-5 md:pl-10">
        <Image
          className="rounded-md object-cover"
          width={568}
          height={354}
          alt={title}
          src={image}
          aria-hidden
        />
      </div>
    </a>
  </li>
)

const Projects = () => (
  <section className="container relative mx-auto flex flex-col py-14 lg:px-52">
    <div className="absolute -right-1/2 left-1/2 top-96 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-100 opacity-40 blur-full" />
    <span
      className="text-stroke text-tertiary-50 absolute -top-24 left-[72rem] -z-10 font-background text-[32rem] leading-[0.93] text-primary-50"
      aria-hidden
    >
      WEB
    </span>
    <div className="mb-4 h-1 w-72 bg-primary-100" />
    <h2 className="text-5xl font-semibold">My Projects</h2>
    <ul className="mt-24 flex flex-col gap-7">
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </ul>
  </section>
)

export default Projects
