'use client'

import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

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

const schedule = [
  {
    date: 'March 30',
    dateTime: '2024-03-30',
    summary:
      'We will prayerfully journey the distance Palestianian families are traveling in search of safety throughout our community. We are currently finalizing our schedule and route for the pilgramage.',
    timeSlots: [
      {
        name: 'Belafonte | 306 S Phoenix',
        distance: "4.17 miles",
        // description: 'Gather and begin our pilgramage with prayer',
        start: '6:00AM',
      },
      {
        name: 'Perryman Cemetery | E 32nd & S Utica Ave',
        distance: "2.5 miles",
        // description: 'Gather and end our pilgramage with prayer',
        start: '8:15AM',
      },
      {
        name: 'Creek Nation Council Oak Tree | W 18th St & S Cheyenne Ave',
        distance: "1.5 miles",
        // description: 'Gather and end our pilgramage with prayer',
        start: '9:30AM',
      },
      {
        name: 'Oaklawn Cemetery | W 11th St & S Peoria Ave',
        distance: "2.61 miles",
        // description: 'Gather and end our pilgramage with prayer',
        start: '10:15AM',
      },
      {
        name: 'Reconciliation Park | N Detroit Ave & E Cameron St',
        distance: ".31 miles",
        // description: 'Gather and end our pilgramage with prayer',
        start: '11:30AM',
      },
      {
        name: 'Lunch at Reconciliation Park | N Detroit Ave & E Cameron St',
        distance: "0 miles",
        // description: 'Gather and end our pilgramage with prayer',
        start: '12:00PM',
      },
      {
        name: 'Vernon AME & Greenwood | N Greenwood Ave & E Archer St',
        distance: ".35 miles",
        // description: 'Gather and end our pilgramage with prayer',
        start: '12:30PM',
      },
      {
        name: 'Osage Prairie "Trail of Tears" | E Independence Pl & N Greenwood Ave',
        distance: " 3.5 miles",
        // description: 'Gather and end our pilgramage with prayer',
        start: '12:45PM',
      },
      {
        name: 'M.L.K. Jr Blvd Peace Walk | M.L.K Jr Blvd & W 36th St N',
        distance: "6.1 miles",
        // description: 'Gather and end our pilgramage with prayer',
        start: '2:30PM',
      },
      {
        name: 'Belafonte | 3062. S Phoenix',
        distance: "0 miles",
        // description: 'Gather and end our pilgramage with prayer',
        start: '5:30PM',
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 840px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {schedule.map((day, dayIndex) => (
              <div
                key={day.dateTime}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  dayIndex !== selectedIndex && 'opacity-70',
                )}
              >
                <DaySummary
                  day={{
                    ...day,
                    date: (
                      <Tab className="ui-not-focus-visible:outline-none">
                        <span className="absolute inset-0" />
                        {day.date}
                      </Tab>
                    ),
                  }}
                />
              </div>
            ))}
          </>
        )}
      </Tab.List>
      <Tab.Panels>
        {schedule.map((day) => (
          <Tab.Panel
            key={day.dateTime}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots day={day} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function DaySummary({ day }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        <time dateTime={day.dateTime}>{day.date}</time>
      </h3>
      <p className="mt-1.5 text-base tracking-tight text-blue-900">
        {day.summary}
      </p>
    </>
  )
}

function TimeSlots({ day, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur',
      )}
    >
      {day.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at ${timeSlot.start} - ${timeSlot.end} CST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.distance}
          </p>
          {/* {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )} */}
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={`${day.dateTime}T${timeSlot.start}-08:00`}>
              {timeSlot.start}
            </time>{' '}
            -{' '}
            <time dateTime={`${day.dateTime}T${timeSlot.end}-08:00`}>
              {timeSlot.end}
            </time>{' '}
            CST
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((day) => (
        <section key={day.dateTime}>
          <DaySummary day={day} />
          <TimeSlots day={day} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-red-600 sm:text-5xl">
            With our bodies we will prayerfully map Gaza onto our own cities.
          </h2>
          <p className="mt-4 font-display text-xl tracking-tight">
            “The power of the pilgrimage is to allow the geography of the horror happening in Gaza to become real in our home cities. To flee Gaza city to hope to find refuge in Rafah in the south, that’s only the distance of Hillary’s Boat Harbour to Freemantle in my home town. You’d still hear the blast of bombs destroying your home. You could see the clouds of dust and debris.
          </p>
          <p className="mt-4 font-display text-xl tracking-tight">
            “On pilgrimage, in solidarity, we can start to transfigure our vicarious trauma into action as we realise in our bodies that 2 million displaced people can’t find shelter from bombardment no matter where they are in that small area.”</p>
          <p className="mt-4 font-display text-xl tracking-tight">
            — Jarrod McKenna </p>

            <div className="mt-5 flex py-2.5 pr-2.5">
            <Button href="https://www.facebook.com/events/1094111395166350/">
              <span className="sr-only sm:not-sr-only">Register</span>
              <span className="sm:hidden">
                <ArrowRightIcon className="h-6 w-6" />
              </span>
            </Button>
            </div>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
