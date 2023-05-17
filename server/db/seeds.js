use hotel;
db.dropDatabase();

db.guests.insertMany([
    {
        name: "Henry",
        email_address: "henry@insideno9.com",
        checked_in: true
    },
    {
        name: "Tracey",
        email_address: "tracey@insideno9.com",
        checked_in: false
    },
    {
        name: "Fred",
        email_address: "fred@insideno9.com",
        checked_in: false
    }
]);