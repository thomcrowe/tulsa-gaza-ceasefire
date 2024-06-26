import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="relative z-50 flex-none lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Logo className="h-12 w-auto text-slate-900" />
        </div>
        <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-red-600/10 py-4 font-mono text-sm text-red-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
          <div className="mx-auto flex items-center gap-4 px-4">
            <p>
              <time dateTime="2024-03-30">30 march 2024</time>
            </p>
            <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            <p>Tulsa</p>
          </div>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://docs.google.com/document/d/1A3Kwu1S0_aMiMMytuKs78NIFfR8aQrfWe7YpaAaDzhk/edit?usp=sharing">Pilgrimage Resources!</Button>
        </div>
        <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
          <Button href="https://give.tithe.ly/?formId=397d898b-42c9-4f4c-a336-e6aa86de93d7&locationId=d47f96fa-6d78-480e-b9d2-d9bd85d79323&fundId=f38eafef-c7fe-4818-afdb-f15eecd370eb&frequency=one-time">Make a donation!!</Button>
        </div>
      </Container>
    </header>
  )
}
