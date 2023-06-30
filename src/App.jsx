import { BrowserRouter, Route, Routes } from "react-router-dom";
import appContext from "./context/appContext";
import { AuthContextProvider } from "./context/authContext";
import Layout from "./views/layout";
import Home from './views/Home'
import Protected from "./hoc/Protected";
import './App.css'
import Account from "./views/Account";
import Inspiration from "./views/Inspiration";
import Week2_Menu from "./views/Week2_Menu";
import Syllabus from "./views/Syllabus";
import Week2_Lesson1 from "./views/Week2_Lesson1";
import Week2_Lesson2 from "./views/Week2_Lesson2";


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
              path="/syllabus"
              element={
                <Protected>
                  <Syllabus />
                </Protected>
              }
            />
            <Route
              path="/week2-menu"
              element={
                <Protected>
                  <Week2_Menu />
                </Protected>
              }
            />
            <Route
              path="/week2-lesson1"
              element={
                <Protected>
                  <Week2_Lesson1 />
                </Protected>
              }
            />
            <Route
              path="/week2-lesson2"
              element={
                <Protected>
                  <Week2_Lesson2 />
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
