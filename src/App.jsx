import { BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { GlobalStyles } from "./styles/GlobalStyles"
import { PendingTasksProvider } from "./context/pendingTasks"

function App() {


  return (
    <>
      <BrowserRouter>
        <PendingTasksProvider>
          <Layout />
        </PendingTasksProvider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App
