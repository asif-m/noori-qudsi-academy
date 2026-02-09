import { useState } from "react";
import { PrayerTimeInManteca } from "../../constants/PrayerTime";

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
    { name: "Fajr", begins: prayerTimes?.Fajr, iqama: prayerTimes?.FajrIqama },
    { name: "Zuhr", begins: prayerTimes?.Zuhr, iqama: prayerTimes?.ZuhrIqama },
    { name: "Asr", begins: prayerTimes?.Asr, iqama: prayerTimes?.AsrIqama },
    { name: "Maghrib", begins: prayerTimes?.Maghrib, iqama: prayerTimes?.MaghribIqama },
    { name: "Isha", begins: prayerTimes?.Isha, iqama: prayerTimes?.IshaIqama },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Date navigation */}
      <div className="flex items-center justify-center gap-3 px-4 py-2 text-sm border-b border-gray-200">
        <button
          className="text-lg text-primary hover:text-green-800 transition-colors"
          onClick={() => setCurrentDate((p) => addDays(p, -1))}
        >
          {"<"}
        </button>
        <span className="font-semibold text-gray-800 min-w-[120px] text-center">{formattedDate}</span>
        <button
          className="text-lg text-primary hover:text-green-800 transition-colors"
          onClick={() => setCurrentDate((p) => addDays(p, 1))}
        >
          {">"}
        </button>
      </div>

      {/* Info times row */}
      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 px-4 py-1.5 text-sm border-b border-gray-200 text-gray-600">
        <span>Sehri: <span className="font-bold text-gray-800">5:03</span></span>
        <span>Sunrise: <span className="font-bold text-gray-800">{prayerTimes?.Sunrise}</span></span>
        <span>Zawal: <span className="font-bold text-gray-800">{prayerTimes?.Zawal}</span></span>
        <span className="text-gray-300">|</span>
        <span>Jumuah: <span className="font-bold text-gray-800">Bayaan 1:05 PM &middot; Khutbah 1:30 PM</span></span>
      </div>

      {/* Prayer times table - Cambridge style */}
      <div className="overflow-x-auto px-2 py-2">
        <table className="w-full min-w-[420px] text-center">
          <thead>
            <tr>
              {prayers.map((prayer) => (
                <th key={prayer.name} className="text-xs font-semibold uppercase tracking-wide text-primary py-2 px-2">
                  {prayer.name}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-100">
              {prayers.map((prayer) => (
                <td key={prayer.name} className="text-sm font-bold text-gray-800 py-1.5 px-2 whitespace-nowrap">
                  {prayer.begins}
                </td>
              ))}
              <td className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 text-left px-2 py-1.5 whitespace-nowrap">
                Begins
              </td>
            </tr>
            <tr className="border-t border-gray-100">
              {prayers.map((prayer) => (
                <td key={prayer.name} className="text-sm font-bold text-gray-800 py-1.5 px-2 whitespace-nowrap">
                  {prayer.iqama}
                </td>
              ))}
              <td className="text-[11px] font-semibold uppercase tracking-wider text-gray-400 text-left px-2 py-1.5 whitespace-nowrap">
                Jama'at
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
