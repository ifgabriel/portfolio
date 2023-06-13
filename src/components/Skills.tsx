import Skill from '@/assets/skills.svg'
import Image from 'next/image'

const Skills = () => (
  <section className="container relative mx-auto flex flex-col gap-24 py-14 lg:px-52">
    <Image src={Skill} alt="My skills" />
    <div className="absolute -right-1/2 left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-100 opacity-40 blur-full" />
  </section>
)

export default Skills
