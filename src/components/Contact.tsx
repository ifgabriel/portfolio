import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'

const Contact = () => (
  <section className="container relative mx-auto flex  flex-col py-14 lg:px-52">
    <div className="mb-4 h-1 w-32 bg-primary-100" />
    <h2 className="text-5xl font-semibold">Contact</h2>
    <p className="text-l mt-24 max-w-3xl">
      I’m currently looking to join a team that seeks to improve people’s lives
      with web solutions, through effective and accessible solutions. Do you
      have a project in mind? let’s connect.
    </p>
    <div className="mt-10 flex gap-4">
      <a href="https://github.com/ifgabriel" target="_blank" rel="noreferrer">
        <GithubIcon className="text-primary-100" />
      </a>
      <a
        href="https://www.linkedin.com/in/gabriel-miranda-1589a51b0/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedinIcon className="text-primary-100" />
      </a>
      <a href="mailto:gabrielmp@unipam.edu.br" target="_blank" rel="noreferrer">
        <MailIcon className="text-primary-100" />
      </a>
    </div>
  </section>
)

export default Contact
