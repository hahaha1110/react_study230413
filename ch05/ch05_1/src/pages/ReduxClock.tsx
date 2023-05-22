import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../store'
import { Div, Title, Subtitle } from '../components'
import { useInterval } from '../hooks'

export default function ReduxClock() {
  const today = useSelector<AppState, Date>(state => state.today)
  const dispatch = useDispatch()

  useInterval(() => {
    dispatch({ type: 'setToday', today: new Date() })
  })

  return (
    <Div className="flex flex-col items-center justify-center h-screen text-white bg-primary">
      <Title className="text-5xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">
        {today.toLocaleDateString()}
      </Subtitle>
    </Div>
  )
}
