import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";
import { VStack, useDisclosure } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AlertDialog, InputField, Modal } from "../components";
import { DateSelectArg, EventClickArg } from "fullcalendar/index.js";
import { MdTitle } from "react-icons/md";

const CalendarPage = () => {
    const [event, setEvent] = useState(false);
    const [deleteEvent, setDeleteEvent] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            title: "",
        },
    });

    const mehedi = {
        id: "",
        title: "",
        start: "",
        end: "",
        allDay: false,
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log("Data: " + JSON.stringify(data));
        console.log("Data2: " + JSON.stringify(mehedi));
    };

    const handleDateSelect = (selectInfo: DateSelectArg) => {
        setDeleteEvent(false);
        onOpen();
        setEvent(true);

        const calendarApi = selectInfo.view.calendar;
        (mehedi.id = "1"),
            (mehedi.start = selectInfo.startStr),
            (mehedi.end = selectInfo.endStr),
            (mehedi.allDay = selectInfo.allDay),
            calendarApi.unselect(); // clear date selection

        // if (title) {
        //     calendarApi.addEvent({
        //         id: "1",
        //         title,
        //         start: selectInfo.startStr,
        //         end: selectInfo.endStr,
        //         allDay: selectInfo.allDay,
        //     });
        // }
    };

    const handleEventClick = (clickInfo: EventClickArg) => {
        setEvent(false);
        onOpen();
        setDeleteEvent(true);
        console.log("Event clicked", clickInfo.event.title);
    };

    const handleEvents = () => {};

    const bodyContent = (
        <VStack>
            <InputField
                id="title"
                type="text"
                placeHolder="Event Title ..."
                register={register}
                icon={<MdTitle />}
                errors={errors}
                required
            />
        </VStack>
    );

    return (
        <>
            <FullCalendar
                themeSystem="lux"
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
                    { title: "event vfk", date: "2023-08-19" },
                    { title: "event 2", date: "2019-04-02" },
                ]}
                select={handleDateSelect}
                eventClick={handleEventClick}
                eventsSet={handleEvents}
            />
            {event && (
                <Modal
                    isOpen={isOpen}
                    onClose={onClose}
                    disabled={false}
                    title="Add Event"
                    body={bodyContent}
                    onSubmit={handleSubmit(onSubmit)}
                    actionLabel="Create"
                />
            )}
            {deleteEvent && (
                <AlertDialog
                    loading={false}
                    handleAction={() => ""}
                    isOpen={isOpen}
                    onClose={onClose}
                    body="You want to delete this Event!"
                    title="Are you sure?"
                />
            )}
        </>
    );
};

export default CalendarPage;
