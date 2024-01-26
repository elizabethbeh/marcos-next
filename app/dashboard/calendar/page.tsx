"use client";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { useEffect, useState } from "react";
import { unstable_noStore as noStore } from 'next/cache';

dayjs.locale("es");

const localizer = dayjsLocalizer(dayjs);
/* const events = [
    {
      title: "Evento 1",
      start: new Date(2024, 0, 25, 10, 0), // Año, mes (enero es 0), día, hora, minutos
      end: new Date(2024, 0, 25, 12, 0),
    },
    {
      title: "Evento 2",
      start: new Date(2024, 0, 25, 12, 0),
      end: new Date(2024, 0, 25, 14, 0),
    },
    {
      title: "Evento 3",
      start: new Date(2024, 0, 25, 14, 0),
      end: new Date(2024, 0, 25, 16, 0),
    },
    {
      title: "Evento 4",
      start: new Date(2024, 0, 26, 16, 0),
      end: new Date(2024, 0, 28, 18, 0),
    },
    {
      title: "Evento 5",
      start: new Date(2024, 0, 27, 18, 0),
      end: new Date(2024, 0, 27, 20, 0),
    },
    {
      title: "Evento 6",
      start: new Date(2024, 0, 28, 20, 0),
      end: new Date(2024, 0, 29, 22, 0),
    },
    {
      title: "Evento 7",
      start: new Date(2024, 0, 29, 22, 0),
      end: new Date(2024, 0, 29, 23, 59),
    },
  ]; */


  
export default function Page() {
  noStore();
  const [events, setEvents] = useState([]);  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api');
      const apiEvents = await response.json();

     

      console.log(apiEvents["data"]);
      setEvents(apiEvents["data"]);
    }

    fetchData();
  }, []);
  
  return (
    <div>
      <Calendar
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
        }}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        formats={{
          dayFormat: (date, culture, localizer) =>
            localizer ? localizer.format(date, "dddd D") : "",
        }}
      />
    </div>
  );
}
