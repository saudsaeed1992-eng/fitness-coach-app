"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [tracker, setTracker] = useState({
    weight: "",
    steps: "",
    water: "",
  });

  const [completed, setCompleted] = useState({});
  const [activeWeek, setActiveWeek] = useState("Week 1");
  const [activeDay, setActiveDay] = useState("Day 1");

  useEffect(() => {
    const savedTracker = localStorage.getItem("babeKaiusTracker");
    const savedCompleted = localStorage.getItem("babeKaiusCompleted");

    if (savedTracker) {
      setTracker(JSON.parse(savedTracker));
    }

    if (savedCompleted) {
      setCompleted(JSON.parse(savedCompleted));
    }
  }, []);

  const youtube = (q) =>
    `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

  function updateTracker(field, value) {
    const updated = {
      ...tracker,
      [field]: value,
    };

    setTracker(updated);

    localStorage.setItem(
      "babeKaiusTracker",
      JSON.stringify(updated)
    );
  }

  function toggleExercise(i) {
    const key = `${activeWeek}-${activeDay}-${i}`;

    const updated = {
      ...completed,
      [key]: !completed[key],
    };

    setCompleted(updated);

    localStorage.setItem(
      "babeKaiusCompleted",
      JSON.stringify(updated)
    );
  }

  function exportPDF() {
    window.print();
  }

  const plan = [
    {
      week: "Week 1",
      focus: "Foundation + Knee Strength",
      days: [
        {
          day: "Day 1",
          title: "Upper Body + Incline Walk",
          exercises: [
            {
              name: "Incline Treadmill Walk",
              sets: "20 min",
              reps: "-",
              weight: "Bodyweight",
              youtube: youtube("incline treadmill walk fat loss"),
            },
            {
              name: "Dumbbell Bench Press",
              sets: "4",
              reps: "12",
              weight: "12kg",
              youtube: youtube("dumbbell bench press"),
            },
            {
              name: "Cable Row",
              sets: "4",
              reps: "12",
              weight: "25kg",
              youtube: youtube("cable row proper form"),
            },
            {
              name: "Knee Extensions",
              sets: "3",
              reps: "15",
              weight: "Light",
              youtube: youtube("knee strengthening exercises"),
            },
          ],
        },

        {
          day: "Day 2",
          title: "Lower Body Knee Safe",
          exercises: [
            {
              name: "Leg Press",
              sets: "4",
              reps: "15",
              weight: "50kg",
              youtube: youtube("leg press knee safe"),
            },
            {
              name: "Glute Bridge",
              sets: "4",
              reps: "15",
              weight: "Bodyweight",
              youtube: youtube("glute bridge"),
            },
            {
              name: "Step Ups",
              sets: "3",
              reps: "12",
              weight: "5kg",
              youtube: youtube("step ups exercise"),
            },
          ],
        },
      ],
    },

    {
      week: "Week 2",
      focus: "Fat Loss Intensification",
      days: [
        {
          day: "Day 1",
          title: "Push Workout",
          exercises: [
            {
              name: "Chest Press",
              sets: "4",
              reps: "10",
              weight: "20kg",
              youtube: youtube("machine chest press"),
            },
            {
              name: "Shoulder Press",
              sets: "4",
              reps: "10",
              weight: "10kg",
              youtube: youtube("dumbbell shoulder press"),
            },
          ],
        },
      ],
    },
  ];

  const currentWeek =
    plan.find((w) => w.week === activeWeek);

  const currentDay =
    currentWeek.days.find((d) => d.day === activeDay);

  return (
    <div
      style={{
        background: "#071739",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          fontSize: "52px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Babê Kaius
      </h1>

      <p
        style={{
          color: "#8ba3d1",
          marginBottom: "30px",
        }}
      >
        Premium Fat Loss & Knee Recovery Dashboard
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#10254f",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>📈 Progress Tracker</h2>

          <input
            placeholder="Current Weight"
            value={tracker.weight}
            onChange={(e) =>
              updateTracker("weight", e.target.value)
            }
            style={inputStyle}
          />

          <input
            placeholder="Daily Steps"
            value={tracker.steps}
            onChange={(e) =>
              updateTracker("steps", e.target.value)
            }
            style={inputStyle}
          />

          <input
            placeholder="Water Intake"
            value={tracker.water}
            onChange={(e) =>
              updateTracker("water", e.target.value)
            }
            style={inputStyle}
          />

          <button
            onClick={exportPDF}
            style={buttonStyle}
          >
            Export PDF
          </button>
        </div>

        <div
          style={{
            background: "#10254f",
            padding: "25px",
            borderRadius: "20px",
          }}
        >
          <h2>🥗 Nutrition Plan</h2>

          <p>Calories: 2100-2300 kcal</p>
          <p>Protein: 170g</p>
          <p>Carbs: 180g</p>
          <p>Fats: 70g</p>

          <hr />

          <h3>Meal 1</h3>
          <p>Chicken + Rice + Salad</p>

          <h3>Meal 2</h3>
          <p>Salmon + Sweet Potato + Vegetables</p>

          <h3>Snacks</h3>
          <p>Greek Yogurt + Almonds</p>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "#10254f",
          padding: "25px",
          borderRadius: "20px",
        }}
      >
        <h2>🏋️ Monthly Workout Plan</h2>

        <div style={{ marginBottom: "20px" }}>
          {plan.map((week) => (
            <button
              key={week.week}
              onClick={() => {
                setActiveWeek(week.week);
                setActiveDay(week.days[0].day);
              }}
              style={{
                ...buttonStyle,
                marginRight: "10px",
              }}
            >
              {week.week}
            </button>
          ))}
        </div>

        <div style={{ marginBottom: "20px" }}>
          {currentWeek.days.map((day) => (
            <button
              key={day.day}
              onClick={() => setActiveDay(day.day)}
              style={{
                ...buttonStyle,
                marginRight: "10px",
              }}
            >
              {day.day}
            </button>
          ))}
        </div>

        <h3>{currentDay.title}</h3>

        {currentDay.exercises.map((ex, i) => {
          const key = `${activeWeek}-${activeDay}-${i}`;

          return (
            <div
              key={i}
              style={{
                background: "#1b3568",
                padding: "20px",
                borderRadius: "15px",
                marginBottom: "15px",
              }}
            >
              <h4>{ex.name}</h4>

              <p>Sets: {ex.sets}</p>
              <p>Reps: {ex.reps}</p>
              <p>Weight: {ex.weight}</p>

              <a
                href={ex.youtube}
                target="_blank"
                style={{
                  color: "#4ec9ff",
                }}
              >
                ▶ Watch Training
              </a>

              <br />
              <br />

              <button
                onClick={() =>
                  toggleExercise(i)
                }
                style={{
                  ...buttonStyle,
                  background: completed[key]
                    ? "#16a34a"
                    : "#2563eb",
                }}
              >
                {completed[key]
                  ? "Completed"
                  : "Mark Complete"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "15px",
  marginTop: "15px",
  borderRadius: "12px",
  border: "none",
  background: "#1b3568",
  color: "white",
};

const buttonStyle = {
  padding: "14px 20px",
  borderRadius: "12px",
  border: "none",
  background: "#2563eb",
  color: "white",
  cursor: "pointer",
  marginTop: "15px",
};
