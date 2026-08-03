import { useEffect, useState } from "react";
import axios from "axios";

function Ticket() {

    const [ticket, setTicket] = useState(null);

    const bookingId = localStorage.getItem("bookingId");

   useEffect(() => {

    const token = localStorage.getItem("token");

    axios.get(
        `http://localhost:8080/tickets/booking/${bookingId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
    .then((res) => {
        setTicket(res.data);
    })
    .catch((err) => {
        console.log(err);
    });

}, [bookingId]);

    if (!ticket) {
        return <h2>Loading Ticket...</h2>;
    }

    return (
        <div className="container mt-4">

            <h2>Issued Ticket</h2>

            <hr />

            <p><b>Ticket No:</b> {ticket.ticketNumber}</p>
            <p><b>Customer:</b> {ticket.customerName}</p>
            <p><b>Package:</b> {ticket.packageName}</p>
            <p><b>Destination:</b> {ticket.destination}</p>
            <p><b>Travel Date:</b> {ticket.travelDate}</p>
            <p><b>Persons:</b> {ticket.numberOfPersons}</p>
            <p><b>Amount:</b> ₹{ticket.amount}</p>

        </div>
    );
}

export default Ticket;