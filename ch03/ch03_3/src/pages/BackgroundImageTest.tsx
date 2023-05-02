import { Div, Title, Subtitle } from '../components'
import * as D from '../data'

const src = D.randomImage(1200, 400)

export default function backgroundImage() {
  return (
    <section className="mt-4">
      <Title>BackgroundImage</Title>
      <Div className="mt-4 bg-gray-300 h-80" src={src}>
        <Subtitle className="text-gray-500">HAHAHAHAHAHAHA</Subtitle>
      </Div>
    </section>
  )
}
