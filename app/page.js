import Avatar from './components/Avatar'
import Hero from './components/Hero'
import Projects from './components/Projects'

export default function Home() {
  return (
    <div className='w-full mx-auto md:w-[768px] lg:w-[1024px]'>
      <Avatar />
      <Hero />
      <Projects />
    </div>
  )
}
