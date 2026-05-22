"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [weight, setWeight] = useState("");
  const [steps, setSteps] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setWeight(localStorage.getItem("weight") || "");
    setSteps(localStorage.getItem("steps") || "");
    setDone(localStorage.getItem("done") === "true");
  }, []);

  function saveProgress() {
    localStorage.setItem("weight", weight);
    localStorage.setItem("steps", steps);
    localStorage.setItem("done", done);
    alert("Progress saved!");
  }

  const workouts = [
    {
      day: "Day 1",
      title: "Full Body Strength + Incline Walk",
      exercises: [
        "Dumbbell Goblet Squat — 3 sets x 10 reps",
        "Dumbbell Bench Press — 3 sets x 10 reps",
        "Cable Row — 3 sets x 12 reps",
        "Incline Treadmill Walk — 20 minutes"
      ]
    },
    {
      day: "Day 2",
      title: "Upper Body + Bike Cardio",
      exercises: [
        "Seated Dumbbell Shoulder Press — 3 sets x 10 reps",
        "Cable Lat Pulldown — 3 sets x 12 reps",
        "Dumbbell Romanian Deadlift — 3 sets x 10 reps",
        "Exercise Bike — 20 minutes"
      ]
    },
    {
      day: "Day 3",
      title: "Lower Body + Elliptical",
      exercises: [
        "Box Squat — 3 sets x 12 reps",
        "Dumbbell Row — 3 sets x 12 reps",
        "Cable Face Pull — 3 sets x 15 reps",
        "Elliptical — 20 minutes"
      ]
    }
  ];

  return (
    <main style={{ padding: 20, fontFamily: "Arial", background: "#111", color: "white", minHeight: "100vh" }}>
      <h1>Fitness Coach App</h1>
      <p>104kg Fat Loss Plan — 3 Days Per Week</p>

      <section style={card}>
        <h2>Today Dashboard</h2>
        <label>Current Weight: </label>
        <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="kg" />
        <br /><br />
        <label>Steps Today: </label>
        <input value={steps} onChange={(e) => setSteps(e.target.value)} placeholder="steps" />
        <br /><br />
        <label>
          <input type="checkbox" checked={done} onChange={(e) => setDone(e.target.checked)} />
          Workout completed
        </label>
        <br /><br />
        <button onClick={saveProgress}>Save Progress</button>
      </section>

      <section style={card}>
        <h2>Weekly Workout Plan</h2>
        {workouts.map((w) => (
          <div key={w.day} style={box}>
            <h3>{w.day}: {w.title}</h3>
            <ul>
              {w.exercises.map((ex, i) => <li key={i}>{ex}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <section style={card}>
        <h2>Nutrition Target</h2>
        <p>Calories: around 2,100–2,300 kcal daily</p>
        <p>Protein: 140–170g daily</p>
        <p>Water: 2.5–3.5L daily</p>
      </section>

      <section style={card}>
        <h2>Video Instructions</h2>
        <p>Search YouTube for:</p>
        <ul>
          <li>Goblet squat beginner form</li>
          <li>Dumbbell bench press form</li>
          <li>Cable row beginner tutorial</li>
          <li>Face pull correct form</li>
        </ul>
      </section>
    </main>
  );
}

const card = {
  background: "#1f1f1f",
  padding: 20,
  borderRadius: 12,
  marginTop: 20
};

const box = {
  background: "#2b2b2b",
  padding: 15,
  borderRadius: 10,
  marginTop: 15
};
