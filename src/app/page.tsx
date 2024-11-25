import Image from "next/image";
import Dashboard from "./pages/Dashboard";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <main className=" ">
      <Navbar/>
      <Dashboard/>
    </main>
  );
}
