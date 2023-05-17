import React, {useState, useEffect} from 'react';
import './App.css';
import GuestGrid from './components/GuestGrid';
import { getGuests } from './components/GuestService';
import GuestForm from './components/GuestForm';

function App() {

  const [guests, setGuests] = useState([]);

  useEffect(() => {
    getGuests().then((allGuests) => {
      console.log("get guests called");
      setGuests(allGuests);
    })
  },[])

  const addGuest = (guest) =>{
    setGuests([...guests, guest]);
  }

  const removeGuest = (id) => {
    const guestsToKeep = guests.filter(guest => guest._id !== id)
    setGuests(guestsToKeep);
  }

  return (
    <div className="App">
      <GuestGrid guests={guests} removeGuest={removeGuest}/>
      <GuestForm addGuest={addGuest}/>
    </div>
  );
}

export default App;
