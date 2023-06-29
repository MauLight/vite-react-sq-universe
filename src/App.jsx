import { BrowserRouter, Route, Routes } from "react-router-dom";
import appContext from "./context/appContext";
import { AuthContextProvider } from "./context/authContext";
import Layout from "./views/layout";
import Home from './views/Home'
import Protected from "./hoc/Protected";
import './App.css'
import Account from "./views/Account";
import Inspiration from "./views/Inspiration";
import QuestMenu from "./views/QuestMenu";


function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/account"
              element={
                <Protected>
                  <Account />
                </Protected>
              }
            />
            <Route
              path="/quest-menu"
              element={
                <Protected>
                  <QuestMenu />
                </Protected>
              }
            />
            <Route
              path="/recommendations"
              element={<Inspiration />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default appContext(App)
