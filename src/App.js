import { useContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitsPage from "./components/HabitsPage";
import HistoryPage from "./components/HistoryPage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import TodayPage from "./components/TodayPage";
import { GlobalStyle } from "./GlobalStyle";
import HabitsProvider from "./Providers/HabitsProvider";
import { UserContext, UserProvider } from "./Providers/UserProvider";


export default function App() {


  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserProvider>
        <HabitsProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignupPage />} />
            <Route path="/habitos" element={<HabitsPage />} />
            <Route path="hoje" element={<TodayPage />} />
            <Route path="historico" element={<HistoryPage />}/>
          </Routes>
        </HabitsProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

