import project1 from '@/assets/project-1.png'
import project2 from '@/assets/project-2.png'
import Image, { StaticImageData } from 'next/image'

interface ProjectType {
  title: string
  image: StaticImageData
  description: string
}

const projects: ProjectType[] = [
  {
    title: 'Spacetime',
    image: project1,
    description: `
      Memory recall application, where the user can add texts, photos and videos of important 
      events in his life to a timeline, organized by month and year.
    `,
  },
  {
    title: 'Kanban',
    image: project2,
    description: `Task management application, where the user can add tasks, with title, description,
    status. In this way, it is possible to manage tasks based on status and priority.
    `,
  },
]

const Project = ({ title, image, description }: ProjectType) => (
  <li className="relative flex flex-row flex-wrap justify-between gap-8">
    <div>
      <span className="text-base text-primary-100">Featured Project</span>
      <h3 className="mb-8 text-2xl font-semibold">{title}</h3>
      <div className="left-0 max-w-xl rounded-md bg-white/30 p-6 backdrop-blur-md md:absolute">
        <p className="text-sm">{description}</p>
      </div>
    </div>
    <div className="w-fit overflow-hidden rounded-xl bg-primary-100 pt-5 md:pl-10">
      <Image
        className="rounded-md object-cover"
        width={568}
        height={354}
        alt={title}
        src={image}
        aria-hidden
      />
    </div>
  </li>
)

const Projects = () => (
  <section className="relative flex flex-col py-14">
    <div className="absolute -right-1/2 left-1/2 top-96 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-100 opacity-40 blur-full" />
    <span
      className="text-stroke text-tertiary-50 absolute -right-96 -top-24 -z-10 font-background text-[32rem] leading-[0.93] text-primary-50"
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
