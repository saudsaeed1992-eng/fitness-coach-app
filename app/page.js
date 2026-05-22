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
            ["Goblet Squat", "3 x 10", "10–16kg", "goblet squat beginner form"],
            ["Dumbbell Bench Press", "3 x 10", "8–14kg each hand", "dumbbell bench press tutorial"],
            ["Cable Row", "3 x 12", "20–35kg", "cable row beginner tutorial"],
            ["Incline Treadmill Walk", "15 min", "Speed 4–5 km/h", "incline treadmill walking fat loss"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Body",
          exercises: [
            ["Dumbbell Shoulder Press", "3 x 10", "6–10kg each hand", "dumbbell shoulder press form"],
            ["Cable Lat Pulldown", "3 x 12", "25–40kg", "lat pulldown cable tutorial"],
            ["Cable Chest Press", "3 x 10", "15–30kg", "cable chest press tutorial"],
            ["Exercise Bike", "15 min", "Easy/moderate", "stationary bike cardio beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Lower Body",
          exercises: [
            ["Box Squat", "3 x 12", "Bodyweight or 10kg", "box squat beginner form"],
            ["Dumbbell Romanian Deadlift", "3 x 10", "12–20kg each hand", "dumbbell romanian deadlift form"],
            ["Cable Core Rotation", "3 x 12", "8–15kg", "cable core rotation tutorial"],
            ["Elliptical", "15 min", "Easy/moderate", "elliptical workout beginner"]
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
            ["Goblet Squat", "4 x 10", "12–18kg", "goblet squat beginner form"],
            ["Dumbbell Bench Press", "4 x 10", "10–16kg each hand", "dumbbell bench press tutorial"],
            ["Cable Row", "4 x 12", "25–40kg", "cable row beginner tutorial"],
            ["Incline Walk", "20 min", "Speed 4–5.2 km/h", "incline treadmill walking fat loss"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Conditioning",
          exercises: [
            ["Dumbbell Shoulder Press", "4 x 10", "6–12kg each hand", "dumbbell shoulder press form"],
            ["Cable Lat Pulldown", "4 x 12", "30–45kg", "lat pulldown cable tutorial"],
            ["Cable Chest Press", "3 x 12", "20–35kg", "cable chest press tutorial"],
            ["Bike Cardio", "20 min", "Moderate", "stationary bike cardio beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Lower + Core",
          exercises: [
            ["Dumbbell Deadlift", "3 x 10", "14–22kg each hand", "dumbbell deadlift beginner form"],
            ["Box Squat", "4 x 12", "10–16kg", "box squat beginner form"],
            ["Plank", "3 x 30 sec", "Bodyweight", "plank beginner form"],
            ["Elliptical", "20 min", "Moderate", "elliptical workout beginner"]
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
            ["Goblet Squat", "4 x 12", "14–20kg", "goblet squat beginner form"],
            ["Dumbbell Bench Press", "4 x 10", "10–18kg each hand", "dumbbell bench press tutorial"],
            ["Cable Row", "4 x 12", "30–45kg", "cable row beginner tutorial"],
            ["Incline Walk", "25 min", "Speed 4.5–5.5 km/h", "incline treadmill walking fat loss"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Burn",
          exercises: [
            ["Dumbbell Shoulder Press", "4 x 12", "8–12kg each hand", "dumbbell shoulder press form"],
            ["Cable Lat Pulldown", "4 x 12", "30–50kg", "lat pulldown cable tutorial"],
            ["Cable Face Pull", "4 x 15", "10–20kg", "cable face pull correct form"],
            ["Bike Intervals", "20 min", "1 min fast / 2 min easy", "stationary bike interval workout beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Lower Burn",
          exercises: [
            ["Dumbbell Deadlift", "4 x 10", "16–24kg each hand", "dumbbell deadlift beginner form"],
            ["Reverse Lunges", "3 x 12", "Bodyweight or 5–8kg each hand", "reverse lunge beginner form"],
            ["Cable Core Rotation", "3 x 15", "10–18kg", "cable core rotation tutorial"],
            ["Elliptical", "25 min", "Moderate", "elliptical workout beginner"]
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
            ["Goblet Squat", "3 x 10", "10–16kg", "goblet squat beginner form"],
            ["Dumbbell Bench Press", "3 x 10", "8–14kg each hand", "dumbbell bench press tutorial"],
            ["Cable Row", "3 x 12", "20–35kg", "cable row beginner tutorial"],
            ["Easy Walk", "20 min", "Comfortable pace", "treadmill walking workout beginner"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Easy",
          exercises: [
            ["Dumbbell Shoulder Press", "3 x 10", "6–10kg each hand", "dumbbell shoulder press form"],
            ["Cable Lat Pulldown", "3 x 10", "25–40kg", "lat pulldown cable tutorial"],
            ["Cable Face Pull", "3 x 15", "10–18kg", "cable face pull correct form"],
            ["Bike", "20 min", "Easy/moderate", "stationary bike cardio beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Mobility Day",
          exercises: [
            ["Stretching", "15 min", "Bodyweight", "full body stretching routine beginner"],
            ["Mobility Drills", "15 min", "Bodyweight", "beginner mobility routine"],
            ["Light Walk", "20 min", "Comfortable pace", "walking workout beginner fat loss"]
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
      <header style={styles.hero}>
        <div>
          <p style={styles.badge}>PRIVATE FITNESS DASHBOARD</p>
          <h1 style={styles.title}>Babê Kaius</h1>
          <p style={styles.subtitle}>Luxury Navy 1-Month Fat Loss Plan</p>
        </div>
        <div style={styles.statBox}>
          <span style={styles.statNumber}>104kg</span>
          <span style={styles.statLabel}>Starting Weight</span>
        </div>
      </header>

      <section style={styles.topGrid}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Progress Tracker</h2>

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
            <span> Workout completed today</span>
          </label>

          <button style={styles.button} onClick={saveProgress}>
            Save Progress
          </button>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Nutrition Targets</h2>
          <p style={styles.text}>Calories: 2100–2300 kcal/day</p>
          <p style={styles.text}>Protein: 140–170g/day</p>
          <p style={styles.text}>Water: 2.5–3.5L/day</p>
          <p style={styles.note}>Goal: steady fat loss without crash dieting.</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Weekly Rules</h2>
          <p style={styles.text}>Train 3 days per week.</p>
          <p style={styles.text}>Rest 60–90 sec between sets.</p>
          <p style={styles.text}>Increase weight only when form is clean.</p>
        </div>
      </section>

      {plan.map((week) => (
        <section key={week.week} style={styles.week}>
          <div style={styles.weekHeader}>
            <h2 style={styles.weekTitle}>{week.week}</h2>
            <p style={styles.focus}>{week.focus}</p>
          </div>

          <div style={styles.grid}>
            {week.days.map((day) => (
              <div key={day.day} style={styles.dayCard}>
                <p style={styles.dayBadge}>{day.day}</p>
                <h3 style={styles.dayTitle}>{day.title}</h3>

                <div>
                  {day.exercises.map((exercise, index) => (
                    <div key={index} style={styles.exercise}>
                      <div>
                        <strong>{exercise[0]}</strong>
                        <p style={styles.exerciseMeta}>
                          {exercise[1]} • {exercise[2]}
                        </p>
                      </div>

                      <a
                        href={link(exercise[3])}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.youtube}
                      >
                        Watch
                      </a>
                    </div>
                  ))}
                </div>
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
      "radial-gradient(circle at top left, #1e3a8a 0, transparent 35%), linear-gradient(135deg, #020617 0%, #0f172a 50%, #111827 100%)",
    color: "#ffffff",
    fontFamily:
      "'Trebuchet MS', 'Segoe UI', Arial, sans-serif",
    padding: "26px"
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    alignItems: "center",
    marginBottom: "28px",
    flexWrap: "wrap"
  },

  badge: {
    letterSpacing: "3px",
    color: "#93c5fd",
    fontSize: "12px",
    fontWeight: "800"
  },

  title: {
    fontSize: "58px",
    fontWeight: "900",
    margin: "8px 0",
    color: "#ffffff",
    letterSpacing: "-2px"
  },

  subtitle: {
    fontSize: "20px",
    color: "#e0f2fe",
    margin: 0
  },

  statBox: {
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.16)",
    borderRadius: "24px",
    padding: "22px",
    minWidth: "180px",
    boxShadow: "0 20px 45px rgba(0,0,0,0.35)"
  },

  statNumber: {
    display: "block",
    fontSize: "36px",
    fontWeight: "900"
  },

  statLabel: {
    color: "#dbeafe",
    fontSize: "14px"
  },

  topGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px"
  },

  card: {
    background: "rgba(15, 23, 42, 0.78)",
    border: "1px solid rgba(147,197,253,0.22)",
    borderRadius: "24px",
    padding: "22px",
    boxShadow: "0 18px 50px rgba(0,0,0,0.38)",
    backdropFilter: "blur(14px)"
  },

  cardTitle: {
    marginTop: 0,
    fontSize: "22px"
  },

  input: {
    display: "block",
    width: "100%",
    padding: "14px",
    marginBottom: "12px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.18)",
    fontSize: "16px",
    background: "#ffffff",
    color: "#020617"
  },

  label: {
    display: "block",
    marginTop: "8px",
    color: "#ffffff"
  },

  button: {
    marginTop: "16px",
    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
    color: "#ffffff",
    padding: "14px 20px",
    border: "none",
    borderRadius: "14px",
    fontWeight: "900",
    cursor: "pointer",
    width: "100%",
    fontSize: "15px"
  },

  text: {
    color: "#ffffff",
    margin: "8px 0"
  },

  note: {
    color: "#bfdbfe",
    marginTop: "14px"
  },

  week: {
    marginTop: "42px"
  },

  weekHeader: {
    marginBottom: "18px"
  },

  weekTitle: {
    fontSize: "34px",
    margin: 0
  },

  focus: {
    color: "#dbeafe",
    marginTop: "6px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(285px, 1fr))",
    gap: "18px"
  },

  dayCard: {
    background:
      "linear-gradient(180deg, rgba(30,58,138,0.55), rgba(15,23,42,0.88))",
    border: "1px solid rgba(147,197,253,0.22)",
    borderRadius: "26px",
    padding: "22px",
    boxShadow: "0 18px 50px rgba(0,0,0,0.35)"
  },

  dayBadge: {
    color: "#93c5fd",
    fontWeight: "900",
    letterSpacing: "2px",
    fontSize: "12px"
  },

  dayTitle: {
    fontSize: "22px",
    marginTop: "4px",
    marginBottom: "18px"
  },

  exercise: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "16px",
    padding: "14px",
    marginBottom: "12px"
  },

  exerciseMeta: {
    color: "#dbeafe",
    margin: "5px 0 0",
    fontSize: "14px"
  },

  youtube: {
    background: "rgba(56,189,248,0.18)",
    color: "#ffffff",
    border: "1px solid rgba(125,211,252,0.35)",
    padding: "8px 12px",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "900"
  }
};
