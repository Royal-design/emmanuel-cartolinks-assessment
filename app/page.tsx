import { Hero } from './components/Hero'
import { Services } from './components/Services'

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="my-8 px-6 md:my-12">
        <Services />
      </div>
    </div>
  )
}
