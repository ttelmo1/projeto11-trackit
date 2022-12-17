import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitsPage from "./components/HabitsPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import { GlobalStyle } from "./GlobalStyle";
import { UserContext, UserProvider } from "./Providers/UserProvider";


export default function App() {

  
  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/cadastro" element={<SignupPage />} />
          <Route path="/habitos" element={<HabitsPage/>} />
          {/* <Route path="hoje" element={<TodayPage token={token}/>} /> */}
          {/* <Route path="historico" element={<HistoryPage token={token}/>}/> */}
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

