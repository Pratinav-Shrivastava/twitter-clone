import "./App.css"
import Feed from "./Feed"
import Sidebar from "./Sidebar"
import Widgets from "./Widgets"

function App() {
  return (
    <div className="app">
      {/* <h1>Hey Pratinav Let's Build A Twitter Clone Today</h1> */}

      {/* Sidebar */}
      <Sidebar/>

      {/* Feed */}
      <Feed/>

      {/* Widgets */}
      <Widgets/>

    </div>
  )
}

export default App
