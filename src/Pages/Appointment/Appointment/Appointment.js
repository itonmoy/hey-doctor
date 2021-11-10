import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableAppointment from '../AavailableAppointment/AvailableAppointment';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <h2>This is where you will get the appointment</h2>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;