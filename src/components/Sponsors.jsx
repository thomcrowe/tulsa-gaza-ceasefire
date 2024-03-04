import Image from 'next/image'

import { Container } from '@/components/Container'
import logo306 from '@/images/logos/306-phoenix.jpg'
import logosanc from '@/images/logos/sanctuary.png'

const sponsors = [
  { name: '306 Phoenix House', logo: logo306 },
  { name: 'Sanctuary', logo: logosanc },
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
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image src={sponsor.logo} alt={sponsor.name} unoptimized />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
