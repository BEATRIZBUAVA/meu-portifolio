import React from "react";
import First from "./components/First";
import './globals.css';
import { SoundProvider } from './components/SoundControl';




export default function Home() {
  return (
    <SoundProvider>
      <main className="flex min-h-screen  flex-col ">

        <First />

      </main>
    </SoundProvider>

  );
}



