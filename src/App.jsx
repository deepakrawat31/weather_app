import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";
import WeatherInfo from "./components/WeatherInfo";

export default function App() {
   const [area, setArea] = useState("");
   const [weather, setWeather] = useState({});
   const [loaded, setLoaded] = useState(false);
   const apiKey = import.meta.env.VITE_API_KEY;

   async function getWeather(e) {
      e.preventDefault();
      const res = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${area}&units=metric&appid=${apiKey}`
      );
      const data = await res.json();
      setWeather(data);
      setLoaded(true);
   }

   return (
      <>
         <header className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 py-3">
            <div>
               <a
                  href="/"
                  className="text-2xl font-clash font-bold text-slate-200 tracking-wider"
               >
                  Weather App
               </a>
            </div>
            <div>
               <form className="relative" onSubmit={getWeather}>
                  <input
                     type="text"
                     name="area"
                     id="area"
                     placeholder="Search"
                     autoComplete="off"
                     onChange={(e) => {
                        setArea(e.target.value);
                     }}
                     className="outline-none bg-transparent border-b-2 border-b-emerald-800 pl-2 pr-6 py-0.5 text-emerald-400 font-archivo font-semibold tracking-wide text-xl placeholder:text-lg placeholder:text-slate-500 focus:border-b-emerald-100 transition-all duration-200 peer"
                  />
                  <button
                     type="submit"
                     className="absolute top-2 right-1 text-xl text-emerald-800 peer-focus:text-emerald-100"
                  >
                     <BiCurrentLocation />
                  </button>
               </form>
            </div>
         </header>

         {!loaded ? (
            <main className="hidden"></main>
         ) : (
            <WeatherInfo data={weather} />
         )}
      </>
   );
}
