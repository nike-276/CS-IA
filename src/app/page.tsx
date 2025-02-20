"use client";

import Image from "next/image";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";

import { useNavigate } from "react-router-dom";
import HomeButton from "./components/nav-buttons/home-button";

export default function Home() {
  return (
    <>
      <header>
        <BrowserRouter>
          <HomeButton></HomeButton>
        </BrowserRouter>
      </header>

      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-0 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            src="/Title.svg"
            alt="Home Page"
            width={900}
            height={500}
            priority
          />
        </main>
      </div>
    </>
  );
}
