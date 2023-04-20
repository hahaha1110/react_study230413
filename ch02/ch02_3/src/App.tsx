import { Component, ReactNode } from 'react'
import ClassComponent from './ClassComponent'

export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent href="www.naver.com" text="네이버" />
        <ClassComponent href="www.google.com" text="구글" />
      </ul>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

// export default App
