"use client";

import { useState } from "react";

export default function Home() {
  const [weight, setWeight] = useState("");
  const [steps, setSteps] = useState("");
  const [workoutDone, setWorkoutDone] = useState(false);

  const plan = [
    {
      week: "Week 1",
      focus: "Foundation + safe fat loss",
      days: [
        {
          day: "Day 1",
          title: "Full Body Strength",
          exercises: [
            "Goblet Squat — 3 x 10",
            "Bench Press — 3 x 10",
            "Cable Row — 3 x 12",
            "Incline Walk — 15 min"
          ]
        },
        {
          day: "Day 2",
          title: "Upper Body",
          exercises: [
            "Shoulder Press — 3 x 10",
            "Lat Pulldown — 3 x 12",
            "Chest Press — 3 x 10",
            "Bike — 15 min"
          ]
        },
        {
          day: "Day 3",
          title: "Lower Body",
          exercises: [
            "Box Squat — 3 x 12",
            "Romanian Deadlift — 3 x 10",
            "Cable Rotation — 3 x 12",
            "Elliptical — 15 min"
          ]
        }
      ]
    },

    {
      week: "Week 2",
      focus: "Fat loss progression",
      days: [
        {
          day: "Day 1",
          title: "Strength Progression",
          exercises: [
            "Goblet Squat — 4 x 10",
            "Bench Press — 4 x 10",
            "Cable Row — 4 x 12",
            "Incline Walk — 20 min"
          ]
        },
        {
          day: "Day 2",
          title: "Upper Conditioning",
          exercises: [
            "Shoulder Press — 4 x 10",
            "Lat Pulldown — 4 x 12",
            "Chest Press — 3 x 12",
            "Bike — 20 min"
          ]
        },
        {
          day: "Day 3",
          title: "Lower + Core",
          exercises: [
            "Deadlift — 3 x 10",
            "Box Squat — 4 x 12",
            "Plank — 3 x 30 sec",
            "Elliptical — 20 min"
          ]
        }
      ]
    },

    {
      week: "Week 3",
      focus: "High calorie burn",
      days: [
        {
          day: "Day 1",
          title: "Strength + Cardio",
          exercises: [
            "Goblet Squat — 4 x 12",
            "Bench Press — 4 x 10",
            "Cable Row — 4 x 12",
            "Incline Walk — 25 min"
          ]
        },
        {
          day: "Day 2",
          title: "Upper Burn",
          exercises: [
            "Shoulder Press — 4 x 12",
            "Lat Pulldown — 4 x 12",
            "Face Pull — 4 x 15",
            "Bike Intervals — 20 min"
          ]
        },
        {
          day: "Day 3",
          title: "Lower Burn",
          exercises: [
            "Deadlift — 4 x 10",
            "Lunges — 3 x 12",
            "Cable Rotation — 3 x 15",
            "Elliptical — 25 min"
          ]
        }
      ]
    },

    {
      week: "Week 4",
      focus: "Recovery + consistency",
      days: [
        {
          day: "Day 1",
          title: "Light Strength",
          exercises: [
            "Goblet Squat — 3 x 10",
            "Bench Press — 3 x 10",
            "Cable Row — 3 x 12",
            "Walk — 20 min"
          ]
        },
        {
          day: "Day 2",
          title: "Upper Easy",
          exercises: [
            "Shoulder Press — 3 x 10",
            "Lat Pulldown — 3 x 10",
            "Bike — 20 min"
          ]
        },
        {
          day: "Day 3",
          title: "Mobility Day",
          exercises: [
            "Stretching — 15 min",
            "Mobility Drills — 15 min",
            "Light Walk — 20 min"
          ]
        }
      ]
    }
  ];

  function saveProgress() {
    alert("Progress Saved Successfully!");
  }

  return (
    <main style={styles.page}>
      <h1 style={styles.title}>🏋️ Babê Kaius</h1>
      <p style={styles.subtitle}>Modern Navy Fitness Dashboard</p>

      <section style={styles.card}>
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

        <label style={{ color: "white" }}>
          <input
            type="checkbox"
            checked={workoutDone}
            onChange={(e) => setWorkoutDone(e.target.checked)}
          />{" "}
          Workout Completed
        </label>

        <button style={styles.button} onClick={saveProgress}>
          Save Progress
        </button>
      </section>

      <section style={styles.card}>
        <h2>🥗 Nutrition</h2>
        <p>Calories: 2100–2300 kcal</p>
        <p>Protein: 140–170g</p>
        <p>Water: 3 Liters</p>
      </section>

      {plan.map((week) => (
        <section key={week.week} style={styles.week}>
          <h2>{week.week}</h2>
          <p style={styles.focus}>{week.focus}</p>

          <div style={styles.grid}>
            {week.days.map((day) => (
              <div key={day.day} style={styles.dayCard}>
                <h3>{day.day}</h3>
                <h4>{day.title}</h4>

                <ul>
                  {day.exercises.map((exercise, index) => (
                    <li key={index}>{exercise}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #020617, #0f172a, #1e293b)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: "30px"
  },

  title: {
    fontSize: "52px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#ffffff"
  },

  subtitle: {
    color: "#ffffff",
    marginBottom: "30px",
    fontSize: "20px"
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "18px",
    padding: "22px",
    marginBottom: "25px",
    backdropFilter: "blur(10px)"
  },

  input: {
    width: "100%",
    maxWidth: "350px",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px"
  },

  button: {
    marginTop: "10px",
    background: "#22c55e",
    color: "white",
    padding: "12px 18px",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer"
  },

  week: {
    marginTop: "40px"
  },

  focus: {
    color: "#e2e8f0",
    marginBottom: "15px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px"
  },

  dayCard: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "18px",
    padding: "20px",
    color: "white"
  }
};
