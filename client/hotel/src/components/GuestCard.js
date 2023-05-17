import { deleteGuest } from "./GuestService";


const GuestCard = ({guest, removeGuest}) => {

    const handleDelete = () => {
        deleteGuest(guest._id)
        .then(() => {
            removeGuest(guest._id);
        })
    }

    return (
        <>
        <h1>{guest.name}</h1>
        <p>{guest.email_address}</p>
        <p>Checked in: {`${guest.checked_in}`}</p>
        <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default GuestCard;