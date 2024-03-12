import Image from 'next/image'

import { Container } from '@/components/Container'
import logo306 from '@/images/logos/306-phoenix.jpg'
import logoSanctuary from '@/images/logos/sanctuary.png'
import mythicPress from '@/images/logos/mythic.png'

const sponsors = [
  {
    name: 'Belafonte',
    logo: logo306,
    url: 'https://www.belafontetulsa.com'

  },
  {
    name: 'Sanctuary Tulsa',
    logo: logoSanctuary,
    url: 'https://www.sanctuarytulsa.com'
  },
  {
    name: 'Mythic Press',
    logo: mythicPress,
    url: 'https://www.mythic.press'
  },
//  { name: 'Protopia', logo: logoProtopia },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-bold tracking-tighter text-red-600 sm:text-5xl">
          Pilgrimage Sponsors
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex items-center justify-center"
              >
                <a href={sponsor.url} target="_blank">
                  <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
                </a>
              </div>
          ))}
        </div>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          <h3>Would you like to <a href="3" target='_blank'>sponsor this pilgrimage?</a></h3>
        </div>
      </Container>
    </section>
  )
}
