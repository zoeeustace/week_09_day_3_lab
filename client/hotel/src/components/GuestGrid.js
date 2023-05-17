import GuestCard from "./GuestCard";

const GuestGrid = ({guests, removeGuest}) => {
    const guestsList = guests.map((guest) => {
        return <GuestCard guest={guest} key={guest._id} removeGuest={removeGuest}/>
    });

    return (
        <>
            {guestsList}
        </>
    )
}

export default GuestGrid;