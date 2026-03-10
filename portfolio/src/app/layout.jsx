import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <main className="pt-28 px-6">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
}