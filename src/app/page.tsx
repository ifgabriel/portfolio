'use client'
import { About, Contact, Experiences, Projects, Skills } from '@/components'
import useWindowSize from '@/utils/useWindowSize'

const Page = () => {
  const windowSize = useWindowSize()

  return (
    <>
      <About />
      <Experiences />
      {windowSize > 1000 && <Skills />}
      <Projects />
      <Contact />
    </>
  )
}

export default Page
