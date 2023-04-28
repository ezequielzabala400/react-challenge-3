import { BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import { GlobalStyles } from "./styles/GlobalStyles"
import { PendingTasksProvider } from "./context/pendingTasks"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./redux/store/store"

function App() {


  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
              <Layout />
          </PersistGate>
        </Provider>
      </BrowserRouter>
      <GlobalStyles />
    </>
  )
}

export default App
