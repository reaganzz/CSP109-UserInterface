import { useState } from "react";
import "./App.css";

export default function App() {
  const [announcements, setAnnouncements] = useState([
    {
      title: "Barangay Clean-Up Drive",
      description: "Join us this Saturday at 7:00 AM in the barangay hall.",
    },
    {
      title: "Free Medical Check-up",
      description: "Available on Friday from 8:00 AM to 3:00 PM.",
    },
  ]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addAnnouncement = (e) => {
    e.preventDefault();

    if (!title || !description) return;

    setAnnouncements([
      ...announcements,
      { title, description },
    ]);

    setTitle("");
    setDescription("");
  };

  return (
    <div className="container">
      <h1>📢 Community Announcements</h1>
      <p className="subtitle">
        A Web-based Interactive Public Display for Community Information
      </p>

      <div className="content">
        {/* Announcements Section */}
        <div className="board">
          <h2>Announcement Board</h2>
          {announcements.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Admin Panel */}
        <div className="admin">
          <h2>Admin Panel</h2>
          <form onSubmit={addAnnouncement}>
            <input
              type="text"
              placeholder="Announcement Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Announcement Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Announcement</button>
          </form>
        </div>
      </div>
    </div>
  );
}
