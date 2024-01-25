"use client";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";

const localizer = dayjsLocalizer(dayjs);
const events = [
    {
      title: "Evento 1",
      start: new Date(2024, 0, 25, 10, 0), // Año, mes (enero es 0), día, hora, minutos
      end: new Date(2024, 0, 25, 12, 0),
    },
    // Otros eventos...
  ];


export default function Page() {
 
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
  }