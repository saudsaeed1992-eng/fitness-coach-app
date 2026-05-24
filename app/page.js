"use client";

import { useState } from "react";

export default function Home() {
  const [weight, setWeight] = useState("");
  const [steps, setSteps] = useState("");
  const [water, setWater] = useState("");
  const [sleep, setSleep] = useState("");

  const START_WEIGHT = 104;
  const TARGET_WEIGHT = 97;

  const currentWeight = Number(weight);

  const weightProgress = currentWeight
    ? Math.min(
        ((START_WEIGHT - currentWeight) /
          (START_WEIGHT - TARGET_WEIGHT)) *
          100,
        100
      )
    : 0;

  const stepsProgress = Math.min(
    (Number(steps) / 10000) * 100,
    100
  );

  const waterProgress = Math.min(
    (Number(water) / 3) * 100,
    100
  );

  const sleepProgress = Math.min(
    (Number(sleep) / 8) * 100,
    100
  );

  const redFlag =
    currentWeight && currentWeight > 102;

  const weeks = Array.from(
    { length: 8 },
    (_, i) => ({
      week: `Week ${i + 1}`,

      days: [
        {
          day: "Day 1",

          workouts: [
            {
              name: "Goblet Squat",
              details:
                "3 x 10 — Light Weight",
              youtube:
                "https://www.youtube.com/results?search_query=goblet+squat+form",
            },

            {
              name:
                "Dumbbell Bench Press",

              details: "3 x 10",

              youtube:
                "https://www.youtube.com/results?search_query=dumbbell+bench+press",
            },

            {
              name: "Cable Row",

              details: "3 x 12",

              youtube:
                "https://www.youtube.com/results?search_query=cable+row+exercise",
            },
          ],
        },

        {
          day: "Day 2",

          workouts: [
            {
              name: "Shoulder Press",

              details: "3 x 10",

              youtube:
                "https://www.youtube.com/results?search_query=shoulder+press+exercise",
            },

            {
              name: "Lat Pulldown",

              details: "3 x 12",

              youtube:
                "https://www.youtube.com/results?search_query=lat+pulldown+exercise",
            },

            {
              name: "Bike Cardio",

              details: "20 min",

              youtube:
                "https://www.youtube.com/results?search_query=stationary+bike+cardio",
            },
          ],
        },

        {
          day: "Day 3",

          workouts: [
            {
              name: "Box Squat",

              details: "3 x 10",

              youtube:
                "https://www.youtube.com/results?search_query=box+squat+exercise",
            },

            {
              name: "Romanian Deadlift",

              details: "3 x 10",

              youtube:
                "https://www.youtube.com/results?search_query=romanian+deadlift",
            },

            {
              name: "Elliptical",

              details: "15 min",

              youtube:
                "https://www.youtube.com/results?search_query=elliptical+workout",
            },
          ],
        },

        {
          day: "Day 4",

          workouts: [
            {
              name:
                "Terminal Knee Extension",

              details: "2 x 15",

              youtube:
                "https://www.youtube.com/results?search_query=terminal+knee+extension",
            },

            {
              name:
                "Straight Leg Raise",

              details: "2 x 12",

              youtube:
                "https://www.youtube.com/results?search_query=straight+leg+raise+knee",
            },

            {
              name: "Wall Sit",

              details: "2 x 20 sec",

              youtube:
                "https://www.youtube.com/results?search_query=wall+sit+knee+rehab",
            },
          ],
        },
      ],
    })
  );

  return (
    <>
      <main style={styles.page}>
        <h1 style={styles.title}>
          Babê Kaius
        </h1>

        <p style={styles.subtitle}>
          Premium Fitness Dashboard
        </p>

        {/* PROGRESS */}
        <section style={styles.card}>
          <h2>
            📊 Live Progress Tracker
          </h2>

          <input
            style={styles.input}
            placeholder="Current Weight (kg)"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
          />

          <input
            style={styles.input}
            placeholder="Daily Steps"
            value={steps}
            onChange={(e) =>
              setSteps(e.target.value)
            }
          />

          <input
            style={styles.input}
            placeholder="Water Intake (L)"
            value={water}
            onChange={(e) =>
              setWater(e.target.value)
            }
          />

          <input
            style={styles.input}
            placeholder="Sleep Hours"
            value={sleep}
            onChange={(e) =>
              setSleep(e.target.value)
            }
          />

          <Chart
            label="Weight Progress"
            value={weightProgress}
          />

          <Chart
            label="Steps Progress"
            value={stepsProgress}
          />

          <Chart
            label="Water Progress"
            value={waterProgress}
          />

          <Chart
            label="Sleep Progress"
            value={sleepProgress}
          />

          {redFlag && (
            <div style={styles.redFlag}>
              ⚠️ Weight target behind
              schedule
            </div>
          )}
        </section>

        {/* KNEE WARNING */}
        <section style={styles.warning}>
          <h2>⚠️ Knee Safety</h2>

          <p>
            Avoid deep squats and jumping.
            Stop any sharp knee pain.
          </p>
        </section>

        {/* WORKOUT */}
        <section style={styles.planSection}>
          <h2>
            🏋️ 8-Week Workout Plan
          </h2>

          {weeks.map((week) => (
            <div
              key={week.week}
              style={styles.weekCard}
            >
              <h2>{week.week}</h2>

              <div style={styles.dayGrid}>
                {week.days.map((day) => (
                  <div
                    key={day.day}
                    style={styles.dayCard}
                  >
                    <h3>{day.day}</h3>

                    {day.workouts.map(
                      (workout, index) => (
                        <div
                          key={index}
                          style={
                            styles.workoutCard
                          }
                        >
                          <div>
                            <p
                              style={
                                styles.workoutName
                              }
                            >
                              {workout.name}
                            </p>

                            <p>
                              {
                                workout.details
                              }
                            </p>

                            <a
                              href={
                                workout.youtube
                              }
                              target="_blank"
                              rel="noreferrer"
                              style={
                                styles.link
                              }
                            >
                              ▶ Watch Training
                            </a>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* FOOD */}
        <section style={styles.card}>
          <h2>
            🍲 Dubai Fat Loss Food Plan
          </h2>

          <div style={styles.foodGrid}>

            <div style={styles.foodCard}>
              <h3>
                Breakfast (10:00 AM)
              </h3>

              <p>
                Eggs + Oats + Protein Shake
              </p>

              <a
                href="https://www.youtube.com/watch?v=OrfmAAgKJmE"
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                ▶️ Watch Breakfast Video
              </a>
            </div>

            <div style={styles.foodCard}>
              <h3>Snack</h3>

              <p>
                Banana + Protein Shake
              </p>

              <a
                href="https://www.youtube.com/watch?v=hcXRwtPvjSg"
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                ▶️ Watch Snack Video
              </a>
            </div>

            <div style={styles.foodCard}>
              <h3>Dinner</h3>

              <p>
                Chicken + Rice + Salad
              </p>

              <a
                href="https://www.youtube.com/watch?v=EAmC5DhRbz4"
                target="_blank"
                rel="noreferrer"
                style={styles.link}
              >
                ▶️ Watch Dinner Video
              </a>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}

function Chart({ label, value }) {
  return (
    <div style={{ marginTop: 18 }}>
      <p>
        {label}:{" "}
        {Math.round(value)}%
      </p>

      <div style={styles.chartTrack}>
        <div
          style={{
            ...styles.chartFill,
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",

    background:
      "linear-gradient(135deg,#020617,#0f172a,#111827)",

    color: "white",

    padding: 24,

    fontFamily:
      "Segoe UI, Arial, sans-serif",
  },

  title: {
    fontSize: 52,

    fontWeight: 900,

    marginBottom: 5,
  },

  subtitle: {
    color: "#bfdbfe",

    fontSize: 20,
  },

  card: {
    background:
      "rgba(255,255,255,0.07)",

    padding: 24,

    borderRadius: 24,

    marginTop: 24,

    border:
      "1px solid rgba(255,255,255,0.12)",
  },

  input: {
    width: "100%",

    padding: 14,

    borderRadius: 14,

    border: "none",

    marginBottom: 12,

    fontSize: 16,
  },

  chartTrack: {
    height: 18,

    background:
      "rgba(255,255,255,0.13)",

    borderRadius: 999,

    overflow: "hidden",
  },

  chartFill: {
    height: "100%",

    background:
      "linear-gradient(90deg,#38bdf8,#22c55e)",
  },

  redFlag: {
    marginTop: 20,

    padding: 16,

    borderRadius: 16,

    background:
      "rgba(239,68,68,0.25)",

    color: "#fecaca",

    fontWeight: 800,
  },

  warning: {
    background:
      "rgba(234,179,8,0.12)",

    color: "#fde68a",

    padding: 22,

    borderRadius: 24,

    marginTop: 24,

    border:
      "1px solid rgba(234,179,8,0.35)",
  },

  planSection: {
    marginTop: 30,
  },

  weekCard: {
    background:
      "rgba(255,255,255,0.06)",

    padding: 22,

    borderRadius: 24,

    marginTop: 22,
  },

  dayGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",

    gap: 16,
  },

  dayCard: {
    background:
      "rgba(37,99,235,0.18)",

    padding: 18,

    borderRadius: 18,
  },

  workoutCard: {
    background:
      "rgba(255,255,255,0.08)",

    padding: 14,

    borderRadius: 16,

    marginTop: 12,
  },

  workoutName: {
    fontWeight: 700,

    marginBottom: 4,
  },

  foodGrid: {
    display: "grid",

    gridTemplateColumns:
      "repeat(auto-fit,minmax(250px,1fr))",

    gap: 16,
  },

  foodCard: {
    background:
      "rgba(255,255,255,0.08)",

    padding: 18,

    borderRadius: 18,
  },

  link: {
    color: "#7dd3fc",

    textDecoration: "none",

    fontWeight: 700,
  },
};
