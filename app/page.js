"use client";

import { useState } from "react";

export default function Home() {
  const [weight, setWeight] = useState("");
  const [steps, setSteps] = useState("");

  const workouts = [
    "Full Body Strength",
    "Incline Treadmill Walk",
    "Dumbbell Bench Press",
    "Cable Row",
    "Face Pulls",
    "Bike Cardio"
  ];

  return (
    <main style={styles.page}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>🏋️ Fitness Coach</h1>
        <p style={styles.subtitle}>
          Modern Fat Loss Dashboard
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2>📊 Progress Tracker</h2>

            <input
              style={styles.input}
              placeholder="Current Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />

            <input
              style={styles.input}
              placeholder="Daily Steps"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
            />

            <button style={styles.button}>
              Save Progress
            </button>
          </div>

          <div style={styles.card}>
            <h2>🔥 Workout Plan</h2>

            {workouts.map((workout, index) => (
              <div key={index} style={styles.workout}>
                ✅ {workout}
              </div>
            ))}
          </div>

          <div style={styles.card}>
            <h2>🥗 Nutrition</h2>

            <p>Calories: 2100–2300 kcal</p>
            <p>Protein: 140–170g</p>
            <p>Water: 3 Liters</p>
          </div>

          <div style={styles.card}>
            <h2>🚶 Daily Goal</h2>

            <div style={styles.bigNumber}>10,000</div>
            <p>Steps Target</p>
          </div>
        </div>
      </div>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0f172a, #111827, #1e293b)",
    color: "white",
    fontFamily: "Arial",
    padding: "40px"
  },

  overlay: {
    maxWidth: "1200px",
    margin: "0 auto"
  },

  title: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "10px"
  },

  subtitle: {
    color: "#94a3b8",
    marginBottom: "40px",
    fontSize: "20px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px"
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "20px",
    padding: "25px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)"
  },

  input: {
    width: "100%",
    padding: "14px",
    marginTop: "10px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px"
  },

  button: {
    background: "#22c55e",
    color: "white",
    padding: "14px 20px",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
    width: "100%"
  },

  workout: {
    padding: "12px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "10px",
    marginTop: "10px"
  },

  bigNumber: {
    fontSize: "54px",
    fontWeight: "bold",
    color: "#22c55e"
  }
};
