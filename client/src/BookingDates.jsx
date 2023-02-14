import React from "react";
import { differenceInCalendarDays, format } from "date-fns";

const BookingDates = ({ booking, className }) => {
  return (
    <div className={"" + className}>
      <div className="text-sm">
        {differenceInCalendarDays(
          new Date(booking.checkOut),
          new Date(booking.checkIn)
        )}{" "}
        Nights:
      </div>
      <div className="flex gap-1">
        {" "}
        <div className="flex gap-1 items-center ml-1 md:text-lg text-sm">
          {format(new Date(booking.checkIn), "yyyy-MM-dd")}
        </div>
        &rarr;
        <div className="flex gap-1 items-center md:text-lg text-sm">
          {format(new Date(booking.checkOut), "yyyy-MM-dd")}
        </div>
      </div>
    </div>
  );
};

export default BookingDates;
