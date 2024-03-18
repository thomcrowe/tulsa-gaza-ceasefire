import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

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

export function Fundraise() {
    return (
        <section id="fundraise" aria-label="Fundraise" className="py-20 sm:py-32">
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
            <h2 className="font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-5xl">
              With our resources we will prayerfully impact Gaza from our own cities.
            </h2>
            <p className="mt-4 font-display text-xl tracking-tight">
                As an additional demonstration of solidarity, and in accordance to the Christ-love call of Mark 25:40, we are providing participants the opportunity to support Gazans with financial gifts to meet their real-time and future needs.
            </p>

            <p className="mt-4 font-display text-xl tracking-tight">
                In alignment with the Gaza Ceasefire Pilgrimage's fundraising targets of Relief, Refugees, and Arrival of Relief and Refuge, we have prayerfully selected two organizations for which to fundraise:
            </p>

            <ul>
                <li>

                    <p className="mt-4 font-display text-xl tracking-tight">
                        <strong>Churches for Middle East Peace (CMEP)</strong> is a respected coalition of churches and
                        organizations that has long been working to promote United States government policies for just
                        resolutions to conflicts in the Middle East. CMEP utilizes donations to (1) provide humanitarian
                        relief in the form of food, water, medical supplies, and shelter; (2) support Palestinian
                        refugees in the United States and Canada; and (3) support educational and advocacy efforts
                        within communities and governments.
                    </p>
                </li>
                <li>

                    <p className="mt-4 font-display text-xl tracking-tight">
                        <strong>Give Gaza Hope</strong> is a Tulsa, OK-based grassroots mutual aid organization. Its 50
                        members collaborate and connect with local activists through yoga, poetry readings, concerts,
                        teach-ins, and mass action events to provide direct relief to Gazans seeking evacuation or in
                        need of food, water, and shelter.
                    </p>
                </li>
            </ul>

            <p className="mt-4 font-display text-xl tracking-tight">
                All donations will go to the selected organizations, and are tax deductible. Should you have any
                 questions, feel free to contact us at: <a href="mailto:info@tulsagcp.com"><i>info@tulsagcp.com</i></a>
            </p>

            <div className='mt-4 lg:px-12'>
                <Button href="https://give.tithe.ly/?formId=397d898b-42c9-4f4c-a336-e6aa86de93d7&locationId=d47f96fa-6d78-480e-b9d2-d9bd85d79323&fundId=f38eafef-c7fe-4818-afdb-f15eecd370eb&frequency=one-time">
                    <span className="sr-only sm:not-sr-only">Donate</span>
                    <span className="sm:hidden">
                        <ArrowRightIcon className="h-6 w-6" />
                    </span>
                </Button>
            </div>

          </div>
        </Container>
        <div className="relative mt-14 sm:mt-24">
          <Container className="relative">
          </Container>
        </div>
      </section>
    )
  }
