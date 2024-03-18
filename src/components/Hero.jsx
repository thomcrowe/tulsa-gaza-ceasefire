import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-2xl font-bold tracking-tighter text-red-700 sm:text-6xl">
            Gaza Ceasefire Pilgrimage | Tulsa, OK
          </h1>
          <div className="mt-6 space-y-6 font-display text-xl tracking-tight">
            <p>
              Our prayer is that this Lent as we meditate on the life and passion of Jesus, we might deepen our
              solidarity with what our Palestinian sisters and brothers are experiencing daily. We are committed to
              taking seriously the body of Christ in Palestine’s costly testimony to the truth of what is happening. As
              Christians we must accurately name what Palestinians are undergoing as fitting the legal definition of
              apartheid and military occupation. We heed the wisdom of experts who overwhelmingly identify genocidal
              intent in the ongoing war against Gaza and we are committed to its prevention. As Jesus teaches, we are
              seeking to “simply let our yes mean yes” and speak plainly the truth. We do so following the lead of so
              many Palestinians, including Palestinian Christians who have been on the forefront of the nonviolent
              movement, in calling for an enduring ceasefire and an end to occupation so a healing peace can finally
              begin.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
            {[
              ['Start', '3/30 6am'],
              ['Distance', '22 miles'],
              ['Homebase', 'Belafonte | 306 S Phoenix'],
              ['City', 'Tulsa'],
            ].map(([name, value]) => (
              <div key={name}>
                <dt className="font-mono text-sm text-blue-600">{name}</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
