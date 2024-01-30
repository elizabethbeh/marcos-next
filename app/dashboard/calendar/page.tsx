"use client";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { useEffect, useState } from "react";
import { unstable_noStore as noStore } from 'next/cache';
import React, { useCallback} from 'react'
import { CopyIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardWithForm } from "@/app/dashboard/calendar/FormCard"

dayjs.locale("es");

const localizer = dayjsLocalizer(dayjs);

export default function Page() {
  noStore();
  const [events, setEvents] = useState([]);  

  const [isOpen, setIsOpen] = useState(false);

  function handleDoubleClickEvent( event: { start: string | number | Date; end: string | number | Date; title: string }) {
    setIsOpen(true);
  }


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



/* 

  const handleSelectEvent = useCallback(
    (event: { start: string | number | Date; end: string | number | Date; title: string }) => window.alert(event.title),
    []
  ) */


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
        onDoubleClickEvent={handleDoubleClickEvent}
        onSelectEvent={handleDoubleClickEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        formats={{
          dayFormat: (date, culture, localizer) =>
            localizer ? localizer.format(date, "dddd D") : "",
        }}
      />

<Dialog open={isOpen} 
        onOpenChange={setIsOpen}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
        <CardWithForm className="my-custom-class"
          title="Notifications"
          description="You have 3 unread messages."    ></CardWithForm>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>


    
    </div>
  );
}
