import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarPage = () => {
    const handleDateSelect = () => {
        const title = prompt("Please enter a new title for your event");
        console.log("Title : ", title);

        // let calendarApi = selectInfo.view.calendar

        // calendarApi.unselect() // clear date selection

        // if (title) {
        //   calendarApi.addEvent({
        //     id: createEventId(),
        //     title,
        //     start: selectInfo.startStr,
        //     end: selectInfo.endStr,
        //     allDay: selectInfo.allDay
        //   })
        // }
    };

    const handleEventClick = () => {
        alert("Event Click");
    };
    return (
        <FullCalendar
            height="85vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            events={[
                { title: "event 1", date: "2023-08-19" },
                { title: "event 2", date: "2019-04-02" },
            ]}
            select={handleDateSelect}
            eventClick={handleEventClick}
        />
    );
};

export default CalendarPage;
