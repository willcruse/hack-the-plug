import React from "react"
import { Table } from "react-bootstrap"
import tableitem from "./tableitem"
const Timetable = () => (
  <div style={{
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: "rgb(249, 255, 240)",
    minWidth: "100%",
    padding: 50
  }}>
    <h1 style={{
      marginBottom: 20
    }}>Timetable</h1>
    <Table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Event</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
      {
        tableItems.map((item) => {
          console.log(item)
          return (
            <tr>
              <td>{item.time}</td>
              <td>{item.event}</td>
              <td>{item.location}</td>
            </tr>
          )
        })
      }
      </tbody>
    </Table>
  </div>
)
export default Timetable

const tableItems = [
  {
    time: "10:00",
    event: "Registration Opens",
    location: "Level 1 Foyer"
  },
  {
    time: "10:45",
    event: "Opening Ceremony",
    location: "Lecture Theater 1.10"
  },
  {
    time: "12:00",
    event: "Lunch",
    location: "Level 1 Foyer"
  },
  {
    time: "12:00",
    event: "Hacking Starts!!",
    location: ""
  },
  {
    time: "19:00",
    event: "Dinner",
    location: "Level 1 Foyer"
  },
  {
    time: "00:00",
    event: "Midnight Snack",
    location: "Level 1 Foyer"
  },
  {
    time: "7:00",
    event: "Breakfast",
    location: "Level 1 Foyer"
  },
  {
    time: "12:00",
    event: "Lunch",
    location: "Level 1 Foyer"
  },
  {
    time: "12:00",
    event: "Hacking Ends",
    location: ""
  },
  {
    time: "13:00",
    event: "Judging Starts",
    location: ""
  },
  {
    time: "14:40",
    event: "Final Judging",
    location: "Lecture Theater 1.10"
  },
  {
    time: "15:30",
    event: "Results + Closing Ceremony",
    location: "Lecture Theater 1.10"
  },
  {
    time: "17:00",
    event: "Participants Take Off",
    location: ""
  }
]
