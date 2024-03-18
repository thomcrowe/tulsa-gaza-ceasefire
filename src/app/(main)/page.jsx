import { Hero } from '@/components/Hero'
import { CFP } from '@/components/Cfp'
import { Newsletter } from '@/components/Newsletter'
import { Fundraise} from '@/components/Fundraise'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import { Organizers } from '@/components/Organizers'

export default function Home() {
  return (
    <>
      <Hero />
      <CFP />
      <Fundraise />
      <Schedule />
      <Sponsors />
      <Organizers />
    </>
  )
}
