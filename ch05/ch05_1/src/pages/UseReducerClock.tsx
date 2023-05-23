import { useReducer } from 'react'
import { setTodayAction } from '../store/actions'
import { AppState } from '../store'
import { Div, Title, Subtitle } from '../components'
import { useInterval } from '../hooks'

export default function ReduxClock() {
  const [{ today }, dispatch] = useReducer(
    (state: AppState, action: setTodayAction) => {
      switch (action.type) {
        case 'setToday':
          return { ...state, today: new Date() }
      }
    },
    { today: new Date() }
  )

  useInterval(() => {
    dispatch({ type: 'setToday', today: new Date() })
  })

  return (
    <Div className="flex flex-col items-center justify-center h-screen text-white bg-primary">
      <Title className="text-5xl">UseReducerClock</Title>
      <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">
        {today.toLocaleDateString()}
      </Subtitle>
    </Div>
  )
}
