// 4. Use a Set to manage the schedule of upcoming events. Each event has a unique identifier, 
//    and the set ensures that there are no conflicting events at the same time. 
//    Implement functions to add new events and check for scheduling conflicts.

const allEvents = [ {ID: 1, name: "call", date:'2023-25-12'}, {ID: 2, name: "meesage", date: '2023-26-12'}]
const events = new Set(allEvents)
console.log(events);

function add(event) {
  if (events.has(event)) {                              
    return `This event already exists`                               // doesn't work
  }
  events.add(event)
  return `Event ${event.name} added`
}

console.log(add({ID: 2, name: "meesage", date: '2023-26-12'}))