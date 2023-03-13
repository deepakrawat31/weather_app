import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";

export default function WeatherInfo({ data }) {
   return (
      <main className="mt-8 md:mt-12 flex flex-col items-center gap-6 font-archivo font-semibold tracking-wider">
         <section className="flex items-center justify-between md:w-full gap-14 p-6 md:max-w-xl bg-slate-800 bg-opacity-60">
            <div className="flex flex-col gap-2">
               <span className="text-6xl md:text-8xl text-emerald-400">
                  {data.main.temp.toFixed(0)}&deg;C
               </span>
               <span className="text-base text-slate-100">
                  Feels Like {data.main.feels_like.toFixed(0)}&deg;C
               </span>
               <div className="flex items-center justify-between gap-2">
                  <span className="text-emerald-400">
                     {data.main.temp_max.toFixed(0)}&deg;C
                     <BiUpArrowAlt className="inline text-xl" />
                  </span>
                  <span className="text-emerald-400">
                     {data.main.temp_min.toFixed(0)}&deg;C
                     <BiDownArrowAlt className="inline text-xl" />
                  </span>
               </div>
            </div>
            <div className="flex flex-col gap-2 justify-between items-center">
               <span className="text-xl text-emerald-400">{data.name}</span>
               <span className="">
                  <img
                     src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                     alt="icon"
                     className="h-16 md:h-24 w-16 md:w-24"
                  />
               </span>
               <span className="text-base text-slate-100">
                  {data.weather[0].main}
               </span>
            </div>
         </section>
         <section className="flex items-center justify-between md:w-full gap-6 md:gap-8 p-6 md:max-w-xl bg-slate-800 bg-opacity-60 text-emerald-400">
            <div className="flex flex-col gap-2 items-center">
               <span className="text-xl md:text-4xl text-slate-100">
                  {data.wind.speed.toFixed(1)}
                  <span className="text-base">m/s</span>
               </span>
               <span>Wind</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
               <span className="text-xl md:text-4xl text-slate-100">
                  {data.main.humidity.toFixed(0)}%
               </span>
               <span>Humidity</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
               <span className="text-xl md:text-4xl text-slate-100">
                  {data.main.pressure.toFixed(0)}hPa
               </span>
               <span>pressure</span>
            </div>
         </section>
      </main>
   );
}
