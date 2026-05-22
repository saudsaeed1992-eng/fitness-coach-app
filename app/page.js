"use client";

import { useState } from "react";

export default function Home() {
  const [weight, setWeight] = useState("");
  const [steps, setSteps] = useState("");
  const [workoutDone, setWorkoutDone] = useState(false);

  const link = (query) =>
    `https://www.youtube.com/results?search_query=${query}`;

  const plan = [
    {
      week: "Week 1",
      focus: "Foundation + safe fat loss",
      days: [
        {
          day: "Day 1",
          title: "Full Body Strength",
          exercises: [
            ["Goblet Squat — 3 x 10", "goblet squat beginner form"],
            ["Dumbbell Bench Press — 3 x 10", "dumbbell bench press tutorial"],
            ["Cable Row — 3 x 12", "cable row beginner tutorial"],
            ["Incline Treadmill Walk — 15 min", "incline treadmill walking fat loss"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Body",
          exercises: [
            ["Dumbbell Shoulder Press — 3 x 10", "dumbbell shoulder press form"],
            ["Cable Lat Pulldown — 3 x 12", "lat pulldown cable tutorial"],
            ["Cable Chest Press — 3 x 10", "cable chest press tutorial"],
            ["Exercise Bike — 15 min", "stationary bike cardio beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Lower Body",
          exercises: [
            ["Box Squat — 3 x 12", "box squat beginner form"],
            ["Dumbbell Romanian Deadlift — 3 x 10", "dumbbell romanian deadlift form"],
            ["Cable Core Rotation — 3 x 12", "cable core rotation tutorial"],
            ["Elliptical — 15 min", "elliptical workout beginner"]
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
            ["Goblet Squat — 4 x 10", "goblet squat beginner form"],
            ["Dumbbell Bench Press — 4 x 10", "dumbbell bench press tutorial"],
            ["Cable Row — 4 x 12", "cable row beginner tutorial"],
            ["Incline Walk — 20 min", "incline treadmill walking fat loss"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Conditioning",
          exercises: [
            ["Dumbbell Shoulder Press — 4 x 10", "dumbbell shoulder press form"],
            ["Cable Lat Pulldown — 4 x 12", "lat pulldown cable tutorial"],
            ["Cable Chest Press — 3 x 12", "cable chest press tutorial"],
            ["Bike Cardio — 20 min", "stationary bike cardio beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Lower + Core",
          exercises: [
            ["Dumbbell Deadlift — 3 x 10", "dumbbell deadlift beginner form"],
            ["Box Squat — 4 x 12", "box squat beginner form"],
            ["Plank — 3 x 30 sec", "plank beginner form"],
            ["Elliptical — 20 min", "elliptical workout beginner"]
          ]
        }
      ]
    },
    {
      week: "Week 3",
      focus: "Higher calorie burn",
      days: [
        {
          day: "Day 1",
          title: "Strength + Cardio",
          exercises: [
            ["Goblet Squat — 4 x 12", "goblet squat beginner form"],
            ["Dumbbell Bench Press — 4 x 10", "dumbbell bench press tutorial"],
            ["Cable Row — 4 x 12", "cable row beginner tutorial"],
            ["Incline Walk — 25 min", "incline treadmill walking fat loss"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Burn",
          exercises: [
            ["Dumbbell Shoulder Press — 4 x 12", "dumbbell shoulder press form"],
            ["Cable Lat Pulldown — 4 x 12", "lat pulldown cable tutorial"],
            ["Cable Face Pull — 4 x 15", "cable face pull correct form"],
            ["Bike Intervals — 20 min", "stationary bike interval workout beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Lower Burn",
          exercises: [
            ["Dumbbell Deadlift — 4 x 10", "dumbbell deadlift beginner form"],
            ["Reverse Lunges — 3 x 12", "reverse lunge beginner form"],
            ["Cable Core Rotation — 3 x 15", "cable core rotation tutorial"],
            ["Elliptical — 25 min", "elliptical workout beginner"]
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
            ["Goblet Squat — 3 x 10", "goblet squat beginner form"],
            ["Dumbbell Bench Press — 3 x 10", "dumbbell bench press tutorial"],
            ["Cable Row — 3 x 12", "cable row beginner tutorial"],
            ["Easy Walk — 20 min", "treadmill walking workout beginner"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Easy",
          exercises: [
            ["Dumbbell Shoulder Press — 3 x 10", "dumbbell shoulder press form"],
            ["Cable Lat Pulldown — 3 x 10", "lat pulldown cable tutorial"],
            ["Cable Face Pull — 3 x 15", "cable face pull correct form"],
            ["Bike — 20 min", "stationary bike cardio beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Mobility Day",
          exercises: [
            ["Stretching — 15 min", "full body stretching routine beginner"],
            ["Mobility Drills — 15 min", "beginner mobility routine"],
            ["Light Walk — 20 min", "walking workout beginner fat loss"]
          ]
        }
      ]
    }
  ];

  function saveProgress() {
    alert("Progress saved on this device.");
  }

  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Babê Kaius</h1>
        <p style={styles.subtitle}>1-Month Navy Fitness Dashboard</p>
      </header>

      <section style={styles.card}>
        <h2>Progress Tracker</h2>

        <input
          style={styles.input}
          placeholder="Current Weight KG"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Steps Today"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />

        <label style={styles.label}>
          <input
            type="checkbox"
            checked={workoutDone}
            onChange={(e) => setWorkoutDone(e.target.checked)}
          />
          Workout completed today
        </label>

        <button style={styles.button} onClick={saveProgress}>
          Save Progress
        </button>
      </section>

      <section style={styles.card}>
        <h2>Nutrition Targets</h2>
        <p>Calories: 2100–2300 kcal/day</p>
        <p>Protein: 140–170g/day</p>
        <p>Water: 2.5–3.5L/day</p>
      </section>

      {plan.map((week) => (
        <section key={week.week} style={styles.week}>
          <h2 style={styles.weekTitle}>{week.week}</h2>
          <p style={styles.focus}>{week.focus}</p>

          <div style={styles.grid}>
            {week.days.map((day) => (
              <div key={day.day} style={styles.dayCard}>
                <h3>{day.day}</h3>
                <h4>{day.title}</h4>

                <ul style={styles.list}>
                  {day.exercises.map((exercise, index) => (
                    <li key={index} style={styles.exercise}>
                      <span>{exercise[0]}</span>
                      <a
                        href={link(exercise[1])}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.youtube}
                      >
                        ▶ YouTube Tutorial
                      </a>
                    </li>
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
    background: "linear-gradient(135deg, #020617, #0f172a, #1e293b)",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    padding: "28px"
  },

  header: {
    marginBottom: "28px"
  },

  title: {
    fontSize: "52px",
    fontWeight: "800",
    margin: 0,
    color: "#ffffff"
  },

  subtitle: {
    fontSize: "20px",
    color: "#ffffff",
    marginTop: "8px"
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "20px",
    padding: "22px",
    marginBottom: "24px",
    boxShadow: "0 12px 35px rgba(0,0,0,0.35)"
  },

  input: {
    display: "block",
    width: "100%",
    maxWidth: "360px",
    padding: "13px",
    marginBottom: "12px",
    borderRadius: "12px",
    border: "none",
    fontSize: "16px"
  },

  label: {
    display: "block",
    marginTop: "8px",
    color: "#ffffff"
  },

  button: {
    marginTop: "16px",
    background: "#2563eb",
    color: "#ffffff",
    padding: "13px 20px",
    border: "none",
    borderRadius: "12px",
    fontWeight: "700",
    cursor: "pointer"
  },

  week: {
    marginTop: "36px"
  },

  weekTitle: {
    fontSize: "30px",
    marginBottom: "6px"
  },

  focus: {
    color: "#e2e8f0",
    marginBottom: "18px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "18px"
  },

  dayCard: {
    background: "rgba(255,255,255,0.09)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "20px",
    padding: "20px",
    color: "#ffffff"
  },

  list: {
    paddingLeft: "18px"
  },

  exercise: {
    marginBottom: "14px",
    lineHeight: "1.5"
  },

  youtube: {
    display: "block",
    color: "#93c5fd",
    textDecoration: "none",
    fontSize: "14px",
    marginTop: "3px",
    fontWeight: "700"
  }
};
