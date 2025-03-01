import Header from "./components/header";
import Intro from "./components/intro";
import QueEs from "./components/QueEs";
import Funciona from "./components/Funciona";

export default function Home() {
  return (
    <div className="bg-gray-200 m-0 text-zinc-700">
      <Header/>
      <Intro />
      <QueEs />
      <Funciona />
    </div>
  );
}
