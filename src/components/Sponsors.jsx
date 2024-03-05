import Image from 'next/image'

import { Container } from '@/components/Container'
import logo306 from '@/images/logos/306-phoenix.jpg'
import logoSanctuary from '@/images/logos/sanctuary-logo.png'

const sponsors = [
  {
    name: 'Belafonte',
    logo: logo306,
    ln: 'https://www.belafontetulsa.com'
  },
  {
    name: 'Sanctuary Tulsa',
    logo: logoSanctuary,
    ln: 'https://www.sanctuarytulsa.com'
  },
//  { name: 'Protopia', logo: logoProtopia },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-bold tracking-tighter text-red-600 sm:text-5xl">
          Walk Sponsors
        </h2>
        <div className="mx-auto mt-20 grid max-w-max grid-cols-1 place-content-center gap-x-32 gap-y-12 sm:grid-cols-3 md:gap-x-16 lg:gap-x-32">
          {sponsors.map((sponsor) => (
            <a href={sponsor.ln} target="_blank">
              <div
                key={sponsor.name}
                className="flex items-center justify-center"
              >
                <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
