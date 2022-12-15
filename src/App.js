import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import { GlobalStyle } from "./GlobalStyle";


export default function App() {
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {/* <Route path="/" element={<LoginPage setToken={setToken} />}/> */}
        <Route path="/cadastro" element={<SignupPage />}/>
        {/* <Route path="habitos" element={<HabitsPage token={token}/>}/> */}
        {/* <Route path="hoje" element={<TodayPage token={token}/>} /> */}
        {/* <Route path="historico" element={<HistoryPage token={token}/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

