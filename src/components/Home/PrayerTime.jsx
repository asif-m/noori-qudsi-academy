import { Address } from "./Address";
import { useState } from "react";
import { PrayerTimeInManteca } from "../../constants/PrayerTime";
import { Iqama } from "../../constants/iqama";

export const PrayerTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const prayerTimes = PrayerTimeInManteca.filter(
    (d) => d.Month === currentMonth && d.Day === currentDay
  )[0];
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(currentDate);

  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const prayers = [
    { name: "Fajr", begins: prayerTimes?.Fajr, iqama: Iqama.Fajr },
    { name: "Zuhr", begins: prayerTimes?.Zuhr, iqama: Iqama.Zuhr },
    { name: "Asr", begins: prayerTimes?.Asr, iqama: Iqama.Asr },
    { name: "Maghrib", begins: prayerTimes?.Maghrib, iqama: prayerTimes?.Maghrib },
    { name: "Isha", begins: prayerTimes?.Isha, iqama: Iqama.Isha },
  ];

  const infoTimes = [
    { label: "Stop Sehri", value: "5:03" },
    { label: "Sunrise", value: prayerTimes?.Sunrise },
    { label: "Zawal", value: prayerTimes?.Zawal },
  ];

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white max-w-4xl mx-auto">
      {/* Address */}
      <div className="px-6 pt-4">
        <div className="font-bold text-xl mb-2">
          <Address />
        </div>
      </div>

      {/* Date Navigation */}
      <div className="flex items-center justify-center gap-4 py-4">
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-green-800 transition-colors"
          onClick={() => setCurrentDate((p) => addDays(p, -1))}
        >
          {"<"}
        </button>
        <span className="text-lg font-semibold text-slate-700 min-w-[140px] text-center">
          {formattedDate}
        </span>
        <button
          className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white hover:bg-green-800 transition-colors"
          onClick={() => setCurrentDate((p) => addDays(p, 1))}
        >
          {">"}
        </button>
      </div>

      {/* Informational Times Bar */}
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-6 py-3 bg-slate-50 border-y border-slate-200">
        {infoTimes.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-sm text-slate-600"
          >
            <span className="font-medium">{item.label}:</span>
            <span className="italic">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Main Prayer Grid - Horizontal Layout */}
      <div className="overflow-x-auto px-4 py-6">
        <div className="grid grid-cols-5 min-w-[480px]">
          {prayers.map((prayer, index) => (
            <div
              key={prayer.name}
              className={`flex flex-col items-center text-center px-2 py-2 ${
                index < prayers.length - 1
                  ? "border-r border-slate-200"
                  : ""
              }`}
            >
              <h3 className="text-base font-bold text-primary uppercase tracking-wide mb-3">
                {prayer.name}
              </h3>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Begins
              </span>
              <span className="text-lg font-semibold text-slate-800 mb-2">
                {prayer.begins}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Jama'at
              </span>
              <span className="text-lg font-bold text-primary">
                {prayer.iqama}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Friday Jumuah Banner */}
      <div className="mx-4 mb-4 rounded-lg bg-green-50 border border-green-200 px-4 py-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
        <span className="font-bold text-primary text-sm">Friday Jumuah</span>
        <span className="text-sm text-slate-700">
          Bayaan: <span className="font-semibold">1:05 PM</span>
        </span>
        <span className="text-sm text-slate-700">
          Khutbah: <span className="font-semibold text-primary">1:30 PM</span>
        </span>
      </div>
    </div>
  );
};
