"use client";

import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import SearchButton from "../components/nav-buttons/search-button";
import LoginButton from "../components/nav-buttons/login-button";
import { useNavigate } from "react-router-dom";
import Home from "../home/page";
import Login from "../login/page";

export default function Search() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "search",
      element: <Search />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <header>
        <BrowserRouter>
          <SearchButton></SearchButton>
          <LoginButton></LoginButton>
        </BrowserRouter>
      </header>

      <p>Search Page</p>
    </>
  );
}
