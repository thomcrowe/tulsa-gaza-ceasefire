import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CFP() {
  return (
    <section id="cfp" aria-label="cfp">
      <Container>
        <div className="relative -mx-4 overflow-hidden bg-black-500 px-4 py-20 sm:-mx-6 sm:px-6 md:mx-0 md:rounded-5xl md:px-16 xl:px-24 xl:py-36">
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-32 gap-y-14 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-5xl">
                Journey with Us
              </p>
              <p className="mt-4 text-lg tracking-tight">
              You can travel the whole route with us, or simply join us for shorter sections. Whilst this is a Christian peace & justice pilgrimage, we are committed to extending a hand of hospitality and friendship to people of all, any, or no faith.

              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight">
                Signup on our Facebook Event Page <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="mt-5 flex py-2.5 pr-2.5">
                <Button href="https://www.facebook.com/events/1094111395166350/">
                  <span className="sr-only sm:not-sr-only">Register</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
}
