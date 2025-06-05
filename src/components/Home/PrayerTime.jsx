import { Address } from "./Address";
import { Announcements } from "./Announcement";
import { useState } from "react";
import { PrayerTimeInManteca } from "../../constants/PrayerTime";
import { Iqama } from "../../constants/iqama";

export const PrayerTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const prayerTimes = PrayerTimeInManteca.filter((d) => d.Month === currentMonth && d.Day === currentDay)[0];
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(currentDate);

  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  return (
    <div>
      <Announcements></Announcements>
      <div className=" rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">
            <Address />
          </div>
          <div className="flex flex-nowrap justify-center">
            <button className="px-3" onClick={() => setCurrentDate(p => addDays(p, -1))}>{"<"}</button>
            <div className="px-3">{formattedDate}</div>
            <button className="px-3" onClick={() => setCurrentDate(p => addDays(p, 1))}>{">"}</button>
          </div>
          <div className="text-gray-700 text-base">
            <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
              <table className="w-full text-left table-auto min-w-max">
                <thead>
                  <tr>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Name
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Time
                      </p>
                    </th>
                    <th className="p-4 border-b border-slate-300 bg-slate-50">
                      <p className="block text-sm font-normal leading-none text-slate-500">
                        Iqama
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                <tr className="hover:bg-slate-50">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-xs text-slate-800 italic">
                        Stop Sehri
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-xs text-slate-800 italic">
                        5:03
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-xs text-slate-800">
                      </p>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        Fajr
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {prayerTimes["Fajr"]}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {Iqama["Fajr"]}
                      </p>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-xs text-slate-800 italic">
                        Sunrise
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-xs text-slate-800 italic">
                        {prayerTimes["Sunrise"]}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-xs text-slate-800">
                      </p>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-xs text-slate-800 italic">
                        Zawal
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-xs text-slate-800 italic">
                        {prayerTimes["Zawal"]}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-xs text-slate-800 italic">
                      </p>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        Zuhr
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {prayerTimes["Zuhr"]}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {Iqama["Zuhr"]}
                      </p>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        Asr
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {prayerTimes["Asr"]}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {Iqama["Asr"]}
                      </p>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        Maghrib
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {prayerTimes["Maghrib"]}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {prayerTimes["Maghrib"]}
                      </p>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        Isha
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {prayerTimes["Isha"]}
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        {Iqama["Isha"]}
                      </p>
                    </td>
                  </tr>
                  <tr className="bg-green-100 hover:bg-green-400">
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        Friday Jumuah
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        1:05
                      </p>
                    </td>
                    <td className="p-4 border-b border-slate-200">
                      <p className="block text-sm text-slate-800">
                        1:30
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>);
};
