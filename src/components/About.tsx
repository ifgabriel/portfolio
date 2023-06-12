import Arrow from '@/assets/arrow.svg'
import useWindowSize from '@/utils/useWindowSize'
import Image from 'next/image'
import Me from '../assets/me.png'

const About = () => {
  const windowSize = useWindowSize()
  const showImage = windowSize > 770

  return (
    <section className="relative flex flex-col gap-24 py-14">
      <span
        className="text-stroke text-tertiary-50 absolute -top-24 left-[32rem] -z-10 font-background text-[32rem] leading-[0.93] text-primary-50"
        aria-hidden
      >
        DEVELOPER
      </span>
      <div className="absolute left-0 top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full bg-primary-100 opacity-50 blur-full" />
      <div
        className="
        relative flex flex-row items-end gap-12
        before:absolute before:-top-9 before:left-12 before:h-2 before:w-2 before:bg-primary-100 after:absolute after:-top-9 after:left-0 after:h-2 after:w-2 after:bg-primary-100
      "
      >
        {showImage && (
          <Image
            width={200}
            height={200}
            alt="Eu"
            src={Me}
            aria-hidden
            className="mt-20"
          />
        )}
        <div>
          <div className="relative mb-40">
            {showImage && (
              <Image
                className="absolute -left-28 -top-5"
                alt="Arrow"
                aria-hidden
                src={Arrow}
              />
            )}
            <h1 className="text-3xl">
              Hey, I’m <span className="text-primary-100">Gabriel Miranda</span>
            </h1>
          </div>
          <span className="text-lg">A Developer who</span>
          <h2 className="text-5xl font-semibold">
            Judges a book <br /> by its{' '}
            <span className="text-primary-100">cover...</span>
          </h2>
          <span className="text-sm">
            Because if the cover does not impress you what else can?
          </span>
        </div>
      </div>
      <div className="relative">
        <div className="mb-4 h-1 w-52 bg-primary-100" />
        <h2 className="text-5xl font-semibold">I am a Software Engineer. </h2>
        <h3 className="mb-10 text-lg">
          Currently, looking for new opportunities...
        </h3>
        <p className="text-l max-w-3xl">
          Enthusiastic about the use of creativity and innovation in the
          development of solutions, with a focus on enriching the user
          experience and accessibility. I have 5 years of experience in software
          development and today my work is focused on front-end.
        </p>
      </div>
    </section>
  )
}

export default About
