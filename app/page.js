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
      focus: "Foundation",
      days: [
        {
          day: "Day 1",
          title: "Full Body Strength",
          duration: "55 min",
          exercises: [
            ["Goblet Squat", "3 x 10", "10–16kg", "goblet squat beginner form"],
            ["Dumbbell Bench Press", "3 x 10", "8–14kg each hand", "dumbbell bench press tutorial"],
            ["Cable Row", "3 x 12", "20–35kg", "cable row beginner tutorial"],
            ["Incline Walk", "15 min", "4–5 km/h", "incline treadmill walking fat loss"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Body",
          duration: "50 min",
          exercises: [
            ["Shoulder Press", "3 x 10", "6–10kg each hand", "dumbbell shoulder press form"],
            ["Lat Pulldown", "3 x 12", "25–40kg", "lat pulldown cable tutorial"],
            ["Cable Chest Press", "3 x 10", "15–30kg", "cable chest press tutorial"],
            ["Bike", "15 min", "Easy/moderate", "stationary bike cardio beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Lower Body",
          duration: "50 min",
          exercises: [
            ["Box Squat", "3 x 12", "Bodyweight/10kg", "box squat beginner form"],
            ["Romanian Deadlift", "3 x 10", "12–20kg each hand", "dumbbell romanian deadlift form"],
            ["Cable Core Rotation", "3 x 12", "8–15kg", "cable core rotation tutorial"],
            ["Elliptical", "15 min", "Easy/moderate", "elliptical workout beginner"]
          ]
        }
      ]
    },
    {
      week: "Week 2",
      focus: "Progression",
      days: [
        {
          day: "Day 1",
          title: "Strength Progression",
          duration: "60 min",
          exercises: [
            ["Goblet Squat", "4 x 10", "12–18kg", "goblet squat beginner form"],
            ["Dumbbell Bench Press", "4 x 10", "10–16kg each hand", "dumbbell bench press tutorial"],
            ["Cable Row", "4 x 12", "25–40kg", "cable row beginner tutorial"],
            ["Incline Walk", "20 min", "4–5.2 km/h", "incline treadmill walking fat loss"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Conditioning",
          duration: "55 min",
          exercises: [
            ["Shoulder Press", "4 x 10", "6–12kg each hand", "dumbbell shoulder press form"],
            ["Lat Pulldown", "4 x 12", "30–45kg", "lat pulldown cable tutorial"],
            ["Cable Chest Press", "3 x 12", "20–35kg", "cable chest press tutorial"],
            ["Bike Cardio", "20 min", "Moderate", "stationary bike cardio beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Lower + Core",
          duration: "55 min",
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
      focus: "Calorie Burn",
      days: [
        {
          day: "Day 1",
          title: "Strength + Cardio",
          duration: "65 min",
          exercises: [
            ["Goblet Squat", "4 x 12", "14–20kg", "goblet squat beginner form"],
            ["Dumbbell Bench Press", "4 x 10", "10–18kg each hand", "dumbbell bench press tutorial"],
            ["Cable Row", "4 x 12", "30–45kg", "cable row beginner tutorial"],
            ["Incline Walk", "25 min", "4.5–5.5 km/h", "incline treadmill walking fat loss"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Burn",
          duration: "60 min",
          exercises: [
            ["Shoulder Press", "4 x 12", "8–12kg each hand", "dumbbell shoulder press form"],
            ["Lat Pulldown", "4 x 12", "30–50kg", "lat pulldown cable tutorial"],
            ["Face Pull", "4 x 15", "10–20kg", "cable face pull correct form"],
            ["Bike Intervals", "20 min", "1 fast / 2 easy", "stationary bike interval workout beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Lower Burn",
          duration: "60 min",
          exercises: [
            ["Dumbbell Deadlift", "4 x 10", "16–24kg each hand", "dumbbell deadlift beginner form"],
            ["Reverse Lunges", "3 x 12", "Bodyweight/5–8kg", "reverse lunge beginner form"],
            ["Cable Core Rotation", "3 x 15", "10–18kg", "cable core rotation tutorial"],
            ["Elliptical", "25 min", "Moderate", "elliptical workout beginner"]
          ]
        }
      ]
    },
    {
      week: "Week 4",
      focus: "Recovery + Consistency",
      days: [
        {
          day: "Day 1",
          title: "Light Strength",
          duration: "50 min",
          exercises: [
            ["Goblet Squat", "3 x 10", "10–16kg", "goblet squat beginner form"],
            ["Dumbbell Bench Press", "3 x 10", "8–14kg each hand", "dumbbell bench press tutorial"],
            ["Cable Row", "3 x 12", "20–35kg", "cable row beginner tutorial"],
            ["Easy Walk", "20 min", "Comfortable", "treadmill walking workout beginner"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Easy",
          duration: "45 min",
          exercises: [
            ["Shoulder Press", "3 x 10", "6–10kg each hand", "dumbbell shoulder press form"],
            ["Lat Pulldown", "3 x 10", "25–40kg", "lat pulldown cable tutorial"],
            ["Face Pull", "3 x 15", "10–18kg", "cable face pull correct form"],
            ["Bike", "20 min", "Easy/moderate", "stationary bike cardio beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Mobility Day",
          duration: "50 min",
          exercises: [
            ["Stretching", "15 min", "Bodyweight", "full body stretching routine beginner"],
            ["Mobility Drills", "15 min", "Bodyweight", "beginner mobility routine"],
            ["Light Walk", "20 min", "Comfortable", "walking workout beginner fat loss"]
          ]
        }
      ]
    }
  ];

  const current = plan[activeWeek].days[activeDay];
  const totalExercises = current.exercises.length;
  const doneCount = current.exercises.filter((_, i) => completed[`${activeWeek}-${activeDay}-${i}`]).length;
  const progress = Math.round((doneCount / totalExercises) * 100);

  function toggleExercise(i) {
    const key = `${activeWeek}-${activeDay}-${i}`;
    setCompleted({ ...completed, [key]: !completed[key] });
  }

  function saveProgress() {
    alert("Progress saved for today.");
  }

  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div>
          <p style={styles.badge}>PRIVATE COACHING APP</p>
          <h1 style={styles.title}>Babê Kaius</h1>
          <p style={styles.subtitle}>Interactive Navy Fitness Dashboard</p>
        </div>

        <div style={styles.statCard}>
          <div style={styles.statNumber}>104kg</div>
          <div style={styles.statLabel}>Starting Weight</div>
        </div>
      </section>

      <section style={styles.dashboard}>
        <div style={styles.card}>
          <h2>Today Module</h2>
          <p style={styles.muted}>{current.day} · {current.title}</p>
          <p>{current.duration}</p>

          <div style={styles.progressTrack}>
            <div style={{ ...styles.progressFill, width: `${progress}%` }} />
          </div>

          <p style={styles.muted}>{progress}% completed</p>
        </div>

        <div style={styles.card}>
          <h2>Progress Tracker</h2>
          <input style={styles.input} placeholder="Current weight kg" value={weight} onChange={(e) => setWeight(e.target.value)} />
          <input style={styles.input} placeholder="Steps today" value={steps} onChange={(e) => setSteps(e.target.value)} />
          <button style={styles.button} onClick={saveProgress}>Save Progress</button>
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
            onClick={() => { setActiveWeek(i); setActiveDay(0); }}
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
            <p style={styles.muted}>{current.duration} · Rest 60–90 sec between sets</p>
          </div>
          <div style={styles.circle}>{progress}%</div>
        </div>

        <div style={styles.exerciseGrid}>
          {current.exercises.map((ex, i) => (
            <div key={i} style={completed[`${activeWeek}-${activeDay}-${i}`] ? styles.exerciseDone : styles.exerciseCard}>
              <div>
                <p style={styles.exerciseName}>{ex[0]}</p>
                <p style={styles.exerciseMeta}>Sets/Reps: {ex[1]}</p>
                <p style={styles.exerciseMeta}>Weight: {ex[2]}</p>
              </div>

              <div style={styles.actions}>
                <button style={styles.checkBtn} onClick={() => toggleExercise(i)}>
                  {completed[`${activeWeek}-${activeDay}-${i}`] ? "Done" : "Mark"}
                </button>

                <a href={youtube(ex[3])} target="_blank" rel="noopener noreferrer" style={styles.videoBtn}>
                  Video
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.card}>
        <h2>Training Rules</h2>
        <p>Start with the lower weight range. Increase only when your form stays clean.</p>
        <p>If pain appears, stop the exercise and choose a lighter option.</p>
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
    fontFamily: "'Trebuchet MS', 'Segoe UI', Arial, sans-serif",
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
    display: "flex",
    justifyContent: "space-between",
    gap: "14px",
    alignItems: "center",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "20px",
    padding: "16px"
  },
  exerciseDone: {
    display: "flex",
    justifyContent: "space-between",
    gap: "14px",
    alignItems: "center",
    background: "rgba(34,197,94,0.18)",
    border: "1px solid rgba(34,197,94,0.45)",
    borderRadius: "20px",
    padding: "16px"
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
