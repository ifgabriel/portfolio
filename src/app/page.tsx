'use client'
import { About, Contact, Experiences, Skills } from '@/components'
import useWindowSize from '@/utils/useWindowSize'

const Page = () => {
  const windowSize = useWindowSize()

  return (
    <>
      <About />
      <Experiences />
      {windowSize > 1000 && <Skills />}
      <Contact />
    </>
  )
}

export default Page
