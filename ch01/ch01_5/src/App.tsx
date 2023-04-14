import * as D from './data'

export default function App() {
  return (
    <div>
      <p>
        {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" />
      <img src={D.randomAvatar()} height="500" />
      <img src={D.randomAvatar()} height="100" />
    </div>
  )
}
