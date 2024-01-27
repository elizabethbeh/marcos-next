"use client";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { useEffect, useState } from "react";
import { unstable_noStore as noStore } from 'next/cache';
import React, { useCallback} from 'react'

dayjs.locale("es");

const localizer = dayjsLocalizer(dayjs);

export default function Page() {
  noStore();
  const [events, setEvents] = useState([]);  

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api');
      const apiEvents = await response.json();

      
      const formattedEvents = apiEvents.data.map((event: { start: string | number | Date; end: string | number | Date; }) => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }));
     

      console.log(formattedEvents);
      setEvents(formattedEvents);
    }

    fetchData();
  }, []);


  const handleClick = () => {
    console.log('Click happened');
  }
  

  const handleSelectEvent = useCallback(
    (event: { start: string | number | Date; end: string | number | Date; title: string }) => window.alert(event.title),
    []
  )


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
        onDoubleClickEvent={handleClick}
        onSelectEvent={handleSelectEvent}
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
