import { BrowserRouter, Route, Routes } from "react-router-dom";

//supabes password = 13zKfOyAYmRv7jgn

import GlobalStyles from "./styles/GlobalStyles";
//import Dashboard from "./pages/Dashboard";
import Intro from "./pages/Intro";
//import Bookings from "./pages/Bookings";

//import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { DarkModeProvider } from "./context/DarkModeContext";
import Components from "./pages/Components";
import Props from "./pages/Props";
import Router from "./pages/Router";
import Memo from "./pages/Memo";
import UseState from "./pages/useState";
import UseEffect from "./pages/useEffect";
import UseContext from "./pages/useContext";
import UseRef from "./pages/useRef";
import UseMemo from "./pages/useMemo";
import UseCallback from "./pages/useCallback";
import UseReducer from "./pages/useReducer";
import CSS from "./pages/Css";
import Tailwind from "./pages/Tailwind";
import Redux from "./pages/Redux";
import Query from "./pages/Query";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route element={<AppLayout />}>
            <Route path="intro" element={<Intro />} />
            <Route path="components" element={<Components />} />
            <Route path="props" element={<Props />} />
            <Route path="router" element={<Router />} />
            <Route path="memo" element={<Memo />} />
            <Route path="useState" element={<UseState />} />
            <Route path="useEffect" element={<UseEffect />} />
            <Route path="useContext" element={<UseContext />} />
            <Route path="useRef" element={<UseRef />} />
            <Route path="useCallback" element={<UseCallback />} />
            <Route path="useMemo" element={<UseMemo />} />
            <Route path="useReducer" element={<UseReducer />} />
            <Route path="css" element={<CSS />} />
            <Route path="tailwind" element={<Tailwind />} />
            <Route path="redux" element={<Redux />} />
            <Route path="query" element={<Query />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
