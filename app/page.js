"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [weight, setWeight] = useState(105);
  const [steps, setSteps] = useState(6000);

  const targetWeight = 98;

  const progress =
    ((105 - weight) / (105 - targetWeight)) * 100;

  const stepProgress = (steps / 12000) * 100;

  useEffect(() => {
    localStorage.setItem("weight", weight);
    localStorage.setItem("steps", steps);
  }, [weight, steps]);

  const workouts = [
    {
      day: "Monday",
      title: "Upper Body + Fat Burn",
      exercises: [
        {
          name: "Incline Treadmill Walk",
          sets: "20 min",
          reps: "-",
          weight: "Bodyweight",
          youtube:
            "https://www.youtube.com/results?search_query=incline+treadmill+walk",
        },
        {
          name: "Dumbbell Bench Press",
          sets: "4",
          reps: "12",
          weight: "12kg",
          youtube:
            "https://www.youtube.com/results?search_query=dumbbell+bench+press",
        },
      ],
    },

    {
      day: "Tuesday",
      title: "Knee Strength Recovery",
      exercises: [
        {
          name: "Leg Extensions",
          sets: "4",
          reps: "15",
          weight: "10kg",
          youtube:
            "https://www.youtube.com/results?search_query=knee+strengthening+exercise",
        },

        {
          name: "Glute Bridges",
          sets: "4",
          reps: "20",
          weight: "Bodyweight",
          youtube:
            "https://www.youtube.com/results?search_query=glute+bridge",
        },
      ],
    },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(180deg,#071739,#0b1f4d,#122d69)",
        minHeight: "100vh",
        color: "white",
        padding: "30px",
        fontFamily: "Segoe UI",
      }}
    >
      <h1
        style={{
          fontSize: "70px",
          fontWeight: "900",
          marginBottom: "5px",
        }}
      >
        Babê Kaius
      </h1>

      <p
        style={{
          color: "#9ab3ff",
          fontSize: "22px",
          marginBottom: "40px",
        }}
      >
        Premium 2-Month Transformation Dashboard
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "30px",
            borderRadius: "25px",
            backdropFilter: "blur(12px)",
          }}
        >
          <h2>📈 Live Progress Tracker</h2>

          <p>Current Weight: {weight} kg</p>

          <input
            type="range"
            min="90"
            max="110"
            value={weight}
            onChange={(e) =>
              setWeight(Number(e.target.value))
            }
            style={{
              width: "100%",
            }}
          />

          <div
            style={{
              background: "#1b3568",
              height: "30px",
              borderRadius: "30px",
              overflow: "hidden",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                background:
                  progress > 50
                    ? "#00ff88"
                    : "#ff9800",
                height: "100%",
                transition: "1s",
              }}
            />
          </div>

          <p style={{ marginTop: "20px" }}>
            Daily Steps: {steps}
          </p>

          <input
            type="range"
            min="1000"
            max="15000"
            value={steps}
            onChange={(e) =>
              setSteps(Number(e.target.value))
            }
            style={{
              width: "100%",
            }}
          />

          <div
            style={{
              background: "#1b3568",
              height: "30px",
              borderRadius: "30px",
              overflow: "hidden",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                width: `${stepProgress}%`,
                background: "#00c2ff",
                height: "100%",
                transition: "1s",
              }}
            />
          </div>

          {weight > 103 && (
            <div
              style={{
                marginTop: "20px",
                background: "#7f1d1d",
                padding: "15px",
                borderRadius: "15px",
              }}
            >
              🚨 Red Flag:
              Weight loss target behind schedule.
            </div>
          )}
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "25px",
            borderRadius: "25px",
          }}
        >
          <h2>🥗 Dubai Nutrition Plan</h2>

          <p>Calories: 2100 kcal</p>
          <p>Protein: 170g</p>
          <p>Carbs: 180g</p>
          <p>Fats: 65g</p>

          <hr />

          <h3>Meal 1</h3>

          <p>
            Chicken Breast + Jasmine Rice +
            Broccoli
          </p>

          <p>
            Ingredients Price (Dubai):
          </p>

          <ul>
            <li>Chicken Breast: 32 AED/kg</li>
            <li>Rice: 14 AED</li>
            <li>Broccoli: 9 AED</li>
          </ul>

          <a
            href="https://www.youtube.com/results?search_query=healthy+chicken+rice+meal+prep"
            target="_blank"
            style={{
              color: "#4ec9ff",
            }}
          >
            ▶ Cooking Tutorial
          </a>

          <hr />

          <h3>Meal 2</h3>

          <p>
            Salmon + Sweet Potato + Salad
          </p>

          <ul>
            <li>Salmon: 55 AED/kg</li>
            <li>Sweet Potato: 12 AED</li>
            <li>Salad Mix: 10 AED</li>
          </ul>

          <a
            href="https://www.youtube.com/results?search_query=salmon+sweet+potato+meal+prep"
            target="_blank"
            style={{
              color: "#4ec9ff",
            }}
          >
            ▶ Cooking Tutorial
          </a>

          <hr />

          <h3>Dubai Sources</h3>

          <ul>
            <li>Carrefour UAE</li>
            <li>Lulu Hypermarket</li>
            <li>Union Coop</li>
            <li>Spinneys</li>
          </ul>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "rgba(255,255,255,0.08)",
          padding: "30px",
          borderRadius: "25px",
        }}
      >
        <h2>
          🏋️ 2-Month Workout Plan
        </h2>

        <p>
          Duration:
          26/05/2026 → 26/07/2026
        </p>

        {workouts.map((workout, i) => (
          <div
            key={i}
            style={{
              background: "#16356f",
              padding: "20px",
              borderRadius: "20px",
              marginTop: "20px",
            }}
          >
            <h3>
              {workout.day} — {workout.title}
            </h3>

            {workout.exercises.map((ex, x) => (
              <div
                key={x}
                style={{
                  background: "#1f4488",
                  padding: "15px",
                  borderRadius: "15px",
                  marginTop: "15px",
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
                    color: "#67e8f9",
                  }}
                >
                  ▶ Watch Exercise
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
