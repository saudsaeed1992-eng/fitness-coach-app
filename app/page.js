"use client";

import { useState } from "react";

export default function Home() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeDay, setActiveDay] = useState(0);
  const [completed, setCompleted] = useState({});
  const [weight, setWeight] = useState("");
  const [steps, setSteps] = useState("");

  const youtube = (q) =>
    `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;

  const plan = [
    {
      week: "Week 1",
      focus: "Foundation + safe fat loss",
      days: [
        {
          day: "Day 1",
          title: "Full Body Strength",
          duration: "55 min",
          exercises: [
            {
              name: "Goblet Squat",
              sets: "3 x 10",
              weight: "10–16kg",
              image: "🏋️",
              video: "goblet squat beginner form",
              tip: "Keep chest up and sit hips back."
            },
            {
              name: "Dumbbell Bench Press",
              sets: "3 x 10",
              weight: "8–14kg each hand",
              image: "💪",
              video: "dumbbell bench press tutorial",
              tip: "Control the dumbbells and keep shoulders stable."
            },
            {
              name: "Cable Row",
              sets: "3 x 12",
              weight: "20–35kg",
              image: "🚣",
              video: "cable row beginner tutorial",
              tip: "Pull elbows back and squeeze shoulder blades."
            },
            {
              name: "Incline Treadmill Walk",
              sets: "15 min",
              weight: "4–5 km/h",
              image: "🚶",
              video: "incline treadmill walking fat loss",
              tip: "Walk tall and breathe steadily."
            }
          ]
        },
        {
          day: "Day 2",
          title: "Upper Body",
          duration: "50 min",
          exercises: [
            {
              name: "Dumbbell Shoulder Press",
              sets: "3 x 10",
              weight: "6–10kg each hand",
              image: "🏋️‍♂️",
              video: "dumbbell shoulder press form",
              tip: "Do not arch your lower back."
            },
            {
              name: "Cable Lat Pulldown",
              sets: "3 x 12",
              weight: "25–40kg",
              image: "🧲",
              video: "lat pulldown cable tutorial",
              tip: "Pull bar toward upper chest."
            },
            {
              name: "Cable Chest Press",
              sets: "3 x 10",
              weight: "15–30kg",
              image: "🔥",
              video: "cable chest press tutorial",
              tip: "Press forward without shrugging shoulders."
            },
            {
              name: "Exercise Bike",
              sets: "15 min",
              weight: "Easy/moderate",
              image: "🚴",
              video: "stationary bike cardio beginner",
              tip: "Keep pace smooth and controlled."
            }
          ]
        },
        {
          day: "Day 3",
          title: "Lower Body",
          duration: "50 min",
          exercises: [
            {
              name: "Box Squat",
              sets: "3 x 12",
              weight: "Bodyweight or 10kg",
              image: "🪑",
              video: "box squat beginner form",
              tip: "Sit back softly, then stand strong."
            },
            {
              name: "Dumbbell Romanian Deadlift",
              sets: "3 x 10",
              weight: "12–20kg each hand",
              image: "⚡",
              video: "dumbbell romanian deadlift form",
              tip: "Hinge from hips, keep back neutral."
            },
            {
              name: "Cable Core Rotation",
              sets: "3 x 12",
              weight: "8–15kg",
              image: "🔁",
              video: "cable core rotation tutorial",
              tip: "Rotate with control, not speed."
            },
            {
              name: "Elliptical",
              sets: "15 min",
              weight: "Easy/moderate",
              image: "🌀",
              video: "elliptical workout beginner",
              tip: "Stay upright and avoid leaning heavily."
            }
          ]
        }
      ]
    },
    {
      week: "Week 2",
      focus: "Progression + better stamina",
      days: [
        {
          day: "Day 1",
          title: "Strength Progression",
          duration: "60 min",
          exercises: [
            {
              name: "Goblet Squat",
              sets: "4 x 10",
              weight: "12–18kg",
              image: "🏋️",
              video: "goblet squat beginner form",
              tip: "Increase only if form feels clean."
            },
            {
              name: "Dumbbell Bench Press",
              sets: "4 x 10",
              weight: "10–16kg each hand",
              image: "💪",
              video: "dumbbell bench press tutorial",
              tip: "Lower slowly and press smoothly."
            },
            {
              name: "Cable Row",
              sets: "4 x 12",
              weight: "25–40kg",
              image: "🚣",
              video: "cable row beginner tutorial",
              tip: "Avoid pulling with your neck."
            },
            {
              name: "Incline Walk",
              sets: "20 min",
              weight: "4–5.2 km/h",
              image: "🚶",
              video: "incline treadmill walking fat loss",
              tip: "Keep effort moderate."
            }
          ]
        },
        {
          day: "Day 2",
          title: "Upper Conditioning",
          duration: "55 min",
          exercises: [
            {
              name: "Dumbbell Shoulder Press",
              sets: "4 x 10",
              weight: "6–12kg each hand",
              image: "🏋️‍♂️",
              video: "dumbbell shoulder press form",
              tip: "Keep ribs down."
            },
            {
              name: "Cable Lat Pulldown",
              sets: "4 x 12",
              weight: "30–45kg",
              image: "🧲",
              video: "lat pulldown cable tutorial",
              tip: "Lead with elbows."
            },
            {
              name: "Cable Chest Press",
              sets: "3 x 12",
              weight: "20–35kg",
              image: "🔥",
              video: "cable chest press tutorial",
              tip: "Pause briefly at full extension."
            },
            {
              name: "Bike Cardio",
              sets: "20 min",
              weight: "Moderate",
              image: "🚴",
              video: "stationary bike cardio beginner",
              tip: "Use steady breathing."
            }
          ]
        },
        {
          day: "Day 3",
          title: "Lower + Core",
          duration: "55 min",
          exercises: [
            {
              name: "Dumbbell Deadlift",
              sets: "3 x 10",
              weight: "14–22kg each hand",
              image: "⚡",
              video: "dumbbell deadlift beginner form",
              tip: "Push floor away with legs."
            },
            {
              name: "Box Squat",
              sets: "4 x 12",
              weight: "10–16kg",
              image: "🪑",
              video: "box squat beginner form",
              tip: "Control the lowering phase."
            },
            {
              name: "Plank",
              sets: "3 x 30 sec",
              weight: "Bodyweight",
              image: "🧱",
              video: "plank beginner form",
              tip: "Keep hips level."
            },
            {
              name: "Elliptical",
              sets: "20 min",
              weight: "Moderate",
              image: "🌀",
              video: "elliptical workout beginner",
              tip: "Smooth pace, no rushing."
            }
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
          duration: "65 min",
          exercises: [
            {
              name: "Goblet Squat",
              sets: "4 x 12",
              weight: "14–20kg",
              image: "🏋️",
              video: "goblet squat beginner form",
              tip: "Stay controlled every rep."
            },
            {
              name: "Dumbbell Bench Press",
              sets: "4 x 10",
              weight: "10–18kg each hand",
              image: "💪",
              video: "dumbbell bench press tutorial",
              tip: "Keep elbows slightly tucked."
            },
            {
              name: "Cable Row",
              sets: "4 x 12",
              weight: "30–45kg",
              image: "🚣",
              video: "cable row beginner tutorial",
              tip: "Do not swing the body."
            },
            {
              name: "Incline Walk",
              sets: "25 min",
              weight: "4.5–5.5 km/h",
              image: "🚶",
              video: "incline treadmill walking fat loss",
              tip: "Fat-loss pace, not sprinting."
            }
          ]
        },
        {
          day: "Day 2",
          title: "Upper Burn",
          duration: "60 min",
          exercises: [
            {
              name: "Dumbbell Shoulder Press",
              sets: "4 x 12",
              weight: "8–12kg each hand",
              image: "🏋️‍♂️",
              video: "dumbbell shoulder press form",
              tip: "Stop if shoulders feel painful."
            },
            {
              name: "Cable Lat Pulldown",
              sets: "4 x 12",
              weight: "30–50kg",
              image: "🧲",
              video: "lat pulldown cable tutorial",
              tip: "Keep chest lifted."
            },
            {
              name: "Cable Face Pull",
              sets: "4 x 15",
              weight: "10–20kg",
              image: "🎯",
              video: "cable face pull correct form",
              tip: "Pull toward face, elbows high."
            },
            {
              name: "Bike Intervals",
              sets: "20 min",
              weight: "1 min fast / 2 min easy",
              image: "🚴",
              video: "stationary bike interval workout beginner",
              tip: "Fast but still controlled."
            }
          ]
        },
        {
          day: "Day 3",
          title: "Lower Burn",
          duration: "60 min",
          exercises: [
            {
              name: "Dumbbell Deadlift",
              sets: "4 x 10",
              weight: "16–24kg each hand",
              image: "⚡",
              video: "dumbbell deadlift beginner form",
              tip: "Do not round your back."
            },
            {
              name: "Reverse Lunges",
              sets: "3 x 12",
              weight: "Bodyweight or 5–8kg each hand",
              image: "🦵",
              video: "reverse lunge beginner form",
              tip: "Step back slowly."
            },
            {
              name: "Cable Core Rotation",
              sets: "3 x 15",
              weight: "10–18kg",
              image: "🔁",
              video: "cable core rotation tutorial",
              tip: "Move through core, not arms only."
            },
            {
              name: "Elliptical",
              sets: "25 min",
              weight: "Moderate",
              image: "🌀",
              video: "elliptical workout beginner",
              tip: "Keep consistent rhythm."
            }
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
          duration: "50 min",
          exercises: [
            {
              name: "Goblet Squat",
              sets: "3 x 10",
              weight: "10–16kg",
              image: "🏋️",
              video: "goblet squat beginner form",
              tip: "Move clean and easy."
            },
            {
              name: "Dumbbell Bench Press",
              sets: "3 x 10",
              weight: "8–14kg each hand",
              image: "💪",
              video: "dumbbell bench press tutorial",
              tip: "Focus on technique."
            },
            {
              name: "Cable Row",
              sets: "3 x 12",
              weight: "20–35kg",
              image: "🚣",
              video: "cable row beginner tutorial",
              tip: "Squeeze shoulder blades."
            },
            {
              name: "Easy Walk",
              sets: "20 min",
              weight: "Comfortable pace",
              image: "🚶",
              video: "treadmill walking workout beginner",
              tip: "Recovery pace."
            }
          ]
        },
        {
          day: "Day 2",
          title: "Upper Easy",
          duration: "45 min",
          exercises: [
            {
              name: "Dumbbell Shoulder Press",
              sets: "3 x 10",
              weight: "6–10kg each hand",
              image: "🏋️‍♂️",
              video: "dumbbell shoulder press form",
              tip: "Keep movement smooth."
            },
            {
              name: "Cable Lat Pulldown",
              sets: "3 x 10",
              weight: "25–40kg",
              image: "🧲",
              video: "lat pulldown cable tutorial",
              tip: "Do not pull behind neck."
            },
            {
              name: "Cable Face Pull",
              sets: "3 x 15",
              weight: "10–18kg",
              image: "🎯",
              video: "cable face pull correct form",
              tip: "Great for posture."
            },
            {
              name: "Bike",
              sets: "20 min",
              weight: "Easy/moderate",
              image: "🚴",
              video: "stationary bike cardio beginner",
              tip: "Do not overpush recovery week."
            }
          ]
        },
        {
          day: "Day 3",
          title: "Mobility Day",
          duration: "50 min",
          exercises: [
            {
              name: "Stretching",
              sets: "15 min",
              weight: "Bodyweight",
              image: "🧘",
              video: "full body stretching routine beginner",
              tip: "Slow breathing."
            },
            {
              name: "Mobility Drills",
              sets: "15 min",
              weight: "Bodyweight",
              image: "🤸",
              video: "beginner mobility routine",
              tip: "Gentle range of motion."
            },
            {
              name: "Light Walk",
              sets: "20 min",
              weight: "Comfortable pace",
              image: "🚶",
              video: "walking workout beginner fat loss",
              tip: "Finish feeling better than you started."
            }
          ]
        }
      ]
    }
  ];

  const current = plan[activeWeek].days[activeDay];
  const doneCount = current.exercises.filter(
    (_, i) => completed[`${activeWeek}-${activeDay}-${i}`]
  ).length;
  const progress = Math.round((doneCount / current.exercises.length) * 100);

  function toggleExercise(i) {
    const key = `${activeWeek}-${activeDay}-${i}`;
    setCompleted({ ...completed, [key]: !completed[key] });
  }

  function saveProgress() {
    alert("Progress saved on this device.");
  }

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div>
          <p style={styles.badge}>PRIVATE COACHING APP</p>
          <h1 style={styles.title}>Babê Kaius</h1>
          <p style={styles.subtitle}>
            Interactive Navy Fitness Dashboard
          </p>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statNumber}>104kg</div>
          <div style={styles.statLabel}>Starting Weight</div>
        </div>
      </section>

      <section style={styles.dashboard}>
        <div style={styles.card}>
          <h2>Today Module</h2>
          <p style={styles.muted}>
            {current.day} · {current.title}
          </p>
          <p>{current.duration}</p>

          <div style={styles.progressTrack}>
            <div
              style={{
                ...styles.progressFill,
                width: `${progress}%`
              }}
            />
          </div>

          <p style={styles.muted}>{progress}% completed</p>
        </div>

        <div style={styles.card}>
          <h2>Progress Tracker</h2>

          <input
            style={styles.input}
            placeholder="Current weight kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          <input
            style={styles.input}
            placeholder="Steps today"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />

          <button style={styles.button} onClick={saveProgress}>
            Save Progress
          </button>
        </div>

        <div style={styles.card}>
          <h2>Nutrition Module</h2>
          <p>Calories: 2100–2300 kcal</p>
          <p>Protein: 140–170g</p>
          <p>Water: 2.5–3.5L</p>
        </div>
      </section>

      <section style={styles.selector}>
        {plan.map((w, i) => (
          <button
            key={w.week}
            onClick={() => {
              setActiveWeek(i);
              setActiveDay(0);
            }}
            style={i === activeWeek ? styles.activeTab : styles.tab}
          >
            {w.week}
          </button>
        ))}
      </section>

      <section style={styles.selector}>
        {plan[activeWeek].days.map((d, i) => (
          <button
            key={d.day}
            onClick={() => setActiveDay(i)}
            style={i === activeDay ? styles.activeDayTab : styles.dayTab}
          >
            {d.day}
          </button>
        ))}
      </section>

      <section style={styles.trainingPanel}>
        <div style={styles.trainingHeader}>
          <div>
            <p style={styles.badge}>{plan[activeWeek].focus}</p>
            <h2 style={styles.weekTitle}>{current.title}</h2>
            <p style={styles.muted}>
              {current.duration} · Rest 60–90 sec between sets
            </p>
          </div>

          <div style={styles.circle}>{progress}%</div>
        </div>

        <div style={styles.exerciseGrid}>
          {current.exercises.map((ex, i) => {
            const key = `${activeWeek}-${activeDay}-${i}`;
            const isDone = completed[key];

            return (
              <div
                key={i}
                style={isDone ? styles.exerciseDone : styles.exerciseCard}
              >
                <div style={styles.exerciseVisual}>{ex.image}</div>

                <div style={styles.exerciseContent}>
                  <p style={styles.exerciseName}>{ex.name}</p>
                  <p style={styles.exerciseMeta}>Sets/Reps: {ex.sets}</p>
                  <p style={styles.exerciseMeta}>Weight: {ex.weight}</p>
                  <p style={styles.tip}>Coach Tip: {ex.tip}</p>
                </div>

                <div style={styles.actions}>
                  <button
                    style={styles.checkBtn}
                    onClick={() => toggleExercise(i)}
                  >
                    {isDone ? "Done" : "Mark"}
                  </button>

                  <a
                    href={youtube(ex.video)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.videoBtn}
                  >
                    Video
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section style={styles.card}>
        <h2>Training Rules</h2>
        <p>Start with the lower weight range.</p>
        <p>Increase weight only when your form stays clean.</p>
        <p>If pain appears, stop and reduce weight.</p>
        <p>Goal: consistency first, intensity second.</p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, #1e3a8a 0, transparent 30%), linear-gradient(135deg, #020617, #0f172a 55%, #111827)",
    color: "#ffffff",
    fontFamily:
      "'Trebuchet MS', 'Segoe UI', Arial, sans-serif",
    padding: "24px"
  },

  hero: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "24px"
  },

  badge: {
    color: "#93c5fd",
    letterSpacing: "2px",
    fontWeight: "900",
    fontSize: "12px"
  },

  title: {
    fontSize: "56px",
    margin: "4px 0",
    letterSpacing: "-2px"
  },

  subtitle: {
    color: "#e0f2fe",
    fontSize: "19px"
  },

  statCard: {
    background: "rgba(15,23,42,0.85)",
    border: "1px solid rgba(147,197,253,0.25)",
    borderRadius: "24px",
    padding: "22px",
    minWidth: "180px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.4)"
  },

  statNumber: {
    fontSize: "36px",
    fontWeight: "900"
  },

  statLabel: {
    color: "#bfdbfe"
  },

  dashboard: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
    marginBottom: "24px"
  },

  card: {
    background: "rgba(15,23,42,0.78)",
    border: "1px solid rgba(147,197,253,0.22)",
    borderRadius: "24px",
    padding: "22px",
    boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
    marginBottom: "20px"
  },

  muted: {
    color: "#c7d2fe"
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    marginBottom: "12px",
    fontSize: "16px"
  },

  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "14px",
    border: "none",
    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
    color: "white",
    fontWeight: "900"
  },

  progressTrack: {
    height: "12px",
    background: "rgba(255,255,255,0.14)",
    borderRadius: "999px",
    overflow: "hidden",
    marginTop: "16px"
  },

  progressFill: {
    height: "100%",
    background: "linear-gradient(135deg, #38bdf8, #2563eb)"
  },

  selector: {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
    marginBottom: "14px"
  },

  tab: {
    padding: "12px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.06)",
    color: "white",
    fontWeight: "800"
  },

  activeTab: {
    padding: "12px 18px",
    borderRadius: "999px",
    border: "1px solid #93c5fd",
    background: "#2563eb",
    color: "white",
    fontWeight: "900"
  },

  dayTab: {
    padding: "10px 16px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.06)",
    color: "white"
  },

  activeDayTab: {
    padding: "10px 16px",
    borderRadius: "14px",
    border: "1px solid #93c5fd",
    background: "rgba(56,189,248,0.25)",
    color: "white",
    fontWeight: "900"
  },

  trainingPanel: {
    background: "rgba(15,23,42,0.86)",
    border: "1px solid rgba(147,197,253,0.25)",
    borderRadius: "30px",
    padding: "24px",
    boxShadow: "0 22px 60px rgba(0,0,0,0.42)",
    marginBottom: "24px"
  },

  trainingHeader: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "20px"
  },

  weekTitle: {
    fontSize: "32px",
    margin: "4px 0"
  },

  circle: {
    width: "86px",
    height: "86px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #2563eb, #38bdf8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
    fontSize: "20px"
  },

  exerciseGrid: {
    display: "grid",
    gap: "14px"
  },

  exerciseCard: {
    display: "grid",
    gridTemplateColumns: "70px 1fr auto",
    gap: "14px",
    alignItems: "center",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "22px",
    padding: "16px"
  },

  exerciseDone: {
    display: "grid",
    gridTemplateColumns: "70px 1fr auto",
    gap: "14px",
    alignItems: "center",
    background: "rgba(34,197,94,0.18)",
    border: "1px solid rgba(34,197,94,0.45)",
    borderRadius: "22px",
    padding: "16px"
  },

  exerciseVisual: {
    width: "58px",
    height: "58px",
    borderRadius: "18px",
    background: "linear-gradient(135deg, #1e40af, #38bdf8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    boxShadow: "0 12px 25px rgba(0,0,0,0.35)"
  },

  exerciseContent: {
    minWidth: 0
  },

  exerciseName: {
    fontWeight: "900",
    margin: 0,
    fontSize: "17px"
  },

  exerciseMeta: {
    color: "#dbeafe",
    margin: "5px 0 0",
    fontSize: "14px"
  },

  tip: {
    color: "#bfdbfe",
    margin: "6px 0 0",
    fontSize: "13px"
  },

  actions: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    justifyContent: "flex-end"
  },

  checkBtn: {
    border: "none",
    background: "#22c55e",
    color: "white",
    borderRadius: "999px",
    padding: "9px 13px",
    fontWeight: "900"
  },

  videoBtn: {
    background: "rgba(56,189,248,0.18)",
    color: "#ffffff",
    border: "1px solid rgba(125,211,252,0.35)",
    padding: "9px 13px",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "900"
  }
};
