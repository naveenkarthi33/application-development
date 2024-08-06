import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="info-section">
        <h1>Welcome to TaskMaster</h1>
        <p className="intro-text">Manage your tasks, track your time, and collaborate with your team efficiently.</p>
        <div className="info-grid">
          <div className="info-item">
            <h2>Task Management</h2>
            <p>Organize and prioritize your tasks to boost productivity.</p>
          </div>
          <div className="info-item">
            <h2>Time Tracking</h2>
            <p>Track the time spent on each task and improve time management.</p>
          </div>
          <div className="info-item">
            <h2>Progress Monitoring</h2>
            <p>Monitor the progress of your tasks with visual progress bars.</p>
          </div>
          <div className="info-item">
            <h2>Collaboration</h2>
            <p>Collaborate with your team and share tasks for better teamwork.</p>
          </div>
        </div>
        <Link to="/login" className="get-started-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
