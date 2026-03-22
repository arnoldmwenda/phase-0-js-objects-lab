//Write your code here
const attendee= {
  "attendeeId": "T001",
  "name": "Alice Smith",
  "event": "JavaScript Conference",
  "ticketType": "VIP",
  "ticketPrice": 150.00
}

function logAttendeeName(attendee){
  if(attendee){
    console.log(attendee["name"])
  }else{
    console.log("No Entry Entered")
  }
}
logAttendeeName()

function logTicketPrice(attendee){
 if(attendee){
   console.log(attendee["ticketPrice"])
 }else{
  console.log("No Entry Entered")
 }
}
logTicketPrice()

function updateTicketType(attendee,newType){
  if(attendee && newType){
    attendee["ticketType"]= newType
    console.log(attendee)
  }else{
    console.log("No Entry Entered")
  }
}
updateTicketType()

function updateTicketPrice(attendee,newPrice){
  if(attendee && newPrice){
    attendee["ticketPrice"]= newPrice
    console.log(attendee)
  }else{
    console.log("No Entry Entered")
  }
}
updateTicketPrice()

function removeEventProperty(attendee){
  if(attendee){
    delete attendee["event"]
    console.log(attendee)
  }else{
    console.log("No Entry Entered")
  }
}
removeEventProperty()

function addCheckedInProperty(attendee){
  if(attendee){
    attendee["checkedIn"]= true
    console.log(attendee)
  }else{
    console.log("No Entry Entered")
  }
}
addCheckedInProperty()


//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};