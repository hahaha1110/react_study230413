import { Provider as ReduxProvider } from 'react-redux'
import { useStore } from './store'

export default function App() {
  const store = useStore()
  return (
    <ReduxProvider store={store}>
      <div /> {/* 리액트 버전 18 대응 추가요소 */}
    </ReduxProvider>
  )
}
