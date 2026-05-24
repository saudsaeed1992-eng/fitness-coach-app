"use client";

import { useState } from "react";

export default function Home() {
  const [weight, setWeight] = useState("");
  const [steps, setSteps] = useState("");
  const [water, setWater] = useState("");
  const [sleep, setSleep] = useState("");

  const startWeight = 104;
  const targetWeight = 97;

  const currentWeight = Number(weight);
  const weightProgress = currentWeight
    ? Math.min(((startWeight - currentWeight) / (startWeight - targetWeight)) * 100, 100)
    : 0;

  const stepsProgress = Math.min((Number(steps) / 10000) * 100, 100);
  const waterProgress = Math.min((Number(water) / 3) * 100, 100);
  const sleepProgress = Math.min((Number(sleep) / 8) * 100, 100);

  const redFlag =
    currentWeight && currentWeight > 102;

  const weeks = Array.from({ length: 8 }, (_, i) => ({
    week: `Week ${i + 1}`,
    days: [
      {
        day: "Day 1",
        title: "Full Body Strength",
        workouts: [
          "Goblet Squat — 3 x 10 — light/moderate",
          "Dumbbell Bench Press — 3 x 10",
          "Cable Row — 3 x 12",
          "Incline Walk — 15–25 min"
        ]
      },
      {
        day: "Day 2",
        title: "Upper Body + Cardio",
        workouts: [
          "Shoulder Press — 3 x 10",
          "Lat Pulldown — 3 x 12",
          "Face Pull — 3 x 15",
          "Bike Cardio — 15–20 min"
        ]
      },
      {
        day: "Day 3",
        title: "Lower Body Knee-Safe",
        workouts: [
          "Box Squat — 3 x 10",
          "Glute Bridge — 3 x 12",
          "Romanian Deadlift — 3 x 10",
          "Elliptical — 15–20 min"
        ]
      },
      {
        day: "Day 4",
        title: "Knee Strength — Max 20 Min",
        workouts: [
          "Terminal Knee Extension — 2 x 15",
          "Straight Leg Raise — 2 x 12",
          "Wall Sit — 2 x 20 sec",
          "Easy Bike — 8–10 min"
        ]
      }
    ]
  }));

  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Babê Kaius</h1>
      <p style={styles.subtitle}>2-Month Fat Loss + Knee-Safe Training Plan</p>

      <section style={styles.card}>
        <h2>📊 Live Progress Tracker</h2>

        <input style={styles.input} placeholder="Enter current weight kg" value={weight} onChange={(e) => setWeight(e.target.value)} />
        <input style={styles.input} placeholder="Enter steps today" value={steps} onChange={(e) => setSteps(e.target.value)} />
        <input style={styles.input} placeholder="Enter water liters" value={water} onChange={(e) => setWater(e.target.value)} />
        <input style={styles.input} placeholder="Enter sleep hours" value={sleep} onChange={(e) => setSleep(e.target.value)} />

        <Chart label="Weight Progress to 97kg" value={weightProgress} />
        <Chart label="Steps Progress to 10,000" value={stepsProgress} />
        <Chart label="Water Progress to 3L" value={waterProgress} />
        <Chart label="Sleep Progress to 8h" value={sleepProgress} />

        {redFlag && (
          <div style={styles.redFlag}>
            ⚠️ Red Flag: weight is above the planned pace. Keep meals controlled and increase daily steps.
          </div>
        )}
      </section>

      <section style={styles.warning}>
        <h2>⚠️ Knee Pain Note</h2>
        <p>Because you have knee pain, avoid deep squats, jumping, and heavy leg work. Stop any exercise that causes sharp pain.</p>
      </section>

      <section style={styles.planSection}>
        <h2>🏋️ Separate Workout Plan</h2>

        {weeks.map((week) => (
          <div key={week.week} style={styles.weekCard}>
            <h2>{week.week}</h2>

            <div style={styles.dayGrid}>
              {week.days.map((day) => (
                <div key={day.day} style={day.day === "Day 4" ? styles.kneeDay : styles.dayCard}>
                  <h3>{day.day}</h3>
                  <h4>{day.title}</h4>

                  <ul>
                    {day.workouts.map((workout, index) => (
                      <li key={index}>{workout}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

function Chart({ label, value }) {
  return (
    <div style={{ marginTop: 18 }}>
      <p>{label}: {Math.round(value)}%</p>
      <div style={styles.chartTrack}>
        <div style={{ ...styles.chartFill, width: `${value}%` }} />
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#020617,#0f172a,#111827)",
    color: "white",
    padding: 24,
    fontFamily: "Segoe UI, Arial, sans-serif"
  },
  title: {
    fontSize: 56,
    fontWeight: 900,
    marginBottom: 5
  },
  subtitle: {
    color: "#bfdbfe",
    fontSize: 20
  },
  card: {
    background: "rgba(255,255,255,0.07)",
    padding: 24,
    borderRadius: 24,
    marginTop: 24,
    border: "1px solid rgba(255,255,255,0.12)"
  },
  input: {
    width: "100%",
    padding: 14,
    borderRadius: 14,
    border: "none",
    marginBottom: 12,
    fontSize: 16
  },
  chartTrack: {
    height: 18,
    background: "rgba(255,255,255,0.13)",
    borderRadius: 999,
    overflow: "hidden"
  },
  chartFill: {
    height: "100%",
    background: "linear-gradient(90deg,#38bdf8,#22c55e)",
    transition: "width 0.8s ease"
  },
  redFlag: {
    marginTop: 20,
    padding: 16,
    borderRadius: 16,
    background: "rgba(239,68,68,0.25)",
    color: "#fecaca",
    fontWeight: 800
  },
  warning: {
    background: "rgba(234,179,8,0.12)",
    color: "#fde68a",
    padding: 22,
    borderRadius: 24,
    marginTop: 24,
    border: "1px solid rgba(234,179,8,0.35)"
  },
  planSection: {
    marginTop: 30
  },
  weekCard: {
    background: "rgba(255,255,255,0.06)",
    padding: 22,
    borderRadius: 24,
    marginTop: 22,
    border: "1px solid rgba(255,255,255,0.12)"
  },
  dayGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 16
  },
  dayCard: {
    background: "rgba(37,99,235,0.18)",
    padding: 18,
    borderRadius: 18
  },
  kneeDay: {
    background: "rgba(234,179,8,0.18)",
    color: "#fff7ed",
    padding: 18,
    borderRadius: 18,
    border: "1px solid rgba(234,179,8,0.4)"
  }
};
