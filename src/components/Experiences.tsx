interface ExperienceType {
  title: string
  company: string
  description: string[]
}

const experiences: ExperienceType[] = [
  {
    title: 'React Frontend Developer',
    company: 'ZupInnovation',
    description: [
      `Participating in the planning, development and delivery of new features 
    for the career development tool, Zenity People, used by more than 4k monthly 
    users. Focusing on accessibility, unit testing and scalability.`,
      `Planning and development of Citric, open-source design system.
    Citric is a flexible design system, despite having many presets,
    the user can define other patterns, having a customized library and
    standardized in each application. New functionalities have been developed and
    documentations. Emphasis was placed on scalability, thinking about different types
    of users and their needs`,
    ],
  },
  {
    title: 'Software Engineer',
    company: 'AzevedoBalbino',
    description: [
      `Participating in the planning, development and delivery of new features for the 
    lawsuit management tool. Used by a large base of lawyers located in different parts 
    of Brazil`,
    ],
  },
]

const Experience = ({ title, company, description }: ExperienceType) => (
  <li className="flex flex-col gap-4">
    <h3 className="text-2xl font-semibold">
      {title}{' '}
      <span className="text-2xl font-semibold text-primary-100">
        @{company}
      </span>
    </h3>
    {description.map((item, index) => (
      <p className="max-w-3xl text-sm" key={index}>
        {item}
      </p>
    ))}
  </li>
)

const Experiences = () => (
  <section className="relative flex flex-col py-14">
    <span
      className="text-stroke text-tertiary-50 absolute -top-24 left-[32rem] -z-10 font-background text-[32rem] leading-[0.93] text-primary-50"
      aria-hidden
    >
      FRONTEND
    </span>
    <div className="mb-4 h-1 w-72 bg-primary-100" />
    <h2 className="text-5xl font-semibold">Where I’ve worked</h2>
    <ul className="mt-24 flex flex-col gap-7">
      {experiences.map((experience) => (
        <Experience key={experience.title} {...experience} />
      ))}
    </ul>
  </section>
)

export default Experiences
