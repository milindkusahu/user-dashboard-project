import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

const UserDashboard = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async (id) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setUser(response.data.data);
    } catch (error) {
      setUser(null);
      if (id === 100) {
        alert("User not found");
      }
    }
  };

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <div className="button-group">
        <button className="user-button" onClick={() => fetchUser(1)}>
          User 1
        </button>
        <button className="user-button" onClick={() => fetchUser(2)}>
          User 2
        </button>
        <button className="user-button" onClick={() => fetchUser(3)}>
          User 3
        </button>
        <button className="user-button" onClick={() => fetchUser(100)}>
          User 100
        </button>
      </div>

      <div className="user-card">
        {user && (
          <div className="user-info">
            <img
              className="user-avatar"
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
            />
            <div className="user-details">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Name:</strong> {user.first_name} {user.last_name}
              </p>
            </div>
          </div>
        )}

        {!user && (
          <div className="placeholder">
            <img
              className="placeholder-avatar"
              src="https://via.placeholder.com/150"
              alt="Placeholder"
            />
            <div className="placeholder-details">
              <p>
                <strong>Email:</strong>{" "}
              </p>
              <p>
                <strong>Name:</strong>{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
