"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const START_WEIGHT = 104;
  const TARGET_LOSS = 7;
  const TARGET_WEIGHT = START_WEIGHT - TARGET_LOSS;

  const [activeWeek, setActiveWeek] = useState(0);
  const [activeDay, setActiveDay] = useState(0);
  const [completed, setCompleted] = useState({});
  const [tracker, setTracker] = useState({
    weight: "",
    steps: "",
    sleep: "",
    water: "",
    energy: "",
    notes: ""
  });

  useEffect(() => {
    const savedTracker = localStorage.getItem("babeKaiusTracker");
    const savedCompleted = localStorage.getItem("babeKaiusCompleted");
    if (savedTracker) setTracker(JSON.parse(savedTracker));
    if (savedCompleted) setCompleted(JSON.parse(savedCompleted));
  }, []);

  const youtube = (q) =>
    https://www.youtube.com/results?search_query=${encodeURIComponent(q)};

  function updateTracker(field, value) {
    const updated = { ...tracker, [field]: value };
    setTracker(updated);
    localStorage.setItem("babeKaiusTracker", JSON.stringify(updated));
  }

  function toggleExercise(i) {
    const key = ${activeWeek}-${activeDay}-${i};
    const updated = { ...completed, [key]: !completed[key] };
    setCompleted(updated);
    localStorage.setItem("babeKaiusCompleted", JSON.stringify(updated));
  }

  function exportPDF() {
    window.print();
  }

  const plan = [
    {
      week: "Week 1",
      focus: "Foundation",
      targetWeight: 102.25,
      days: [
        {
          day: "Day 1",
          title: "Full Body Strength",
          duration: "55 min",
          exercises: [
            ["Goblet Squat", "3 x 10", "10–16kg", "🏋️", "goblet squat beginner form"],
            ["Dumbbell Bench Press", "3 x 10", "8–14kg", "💪", "dumbbell bench press tutorial"],
            ["Cable Row", "3 x 12", "20–35kg", "🚣", "cable row beginner tutorial"],
            ["Incline Walk", "15 min", "4–5 km/h", "🚶", "incline treadmill walking fat loss"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Body + Bike",
          duration: "50 min",
          exercises: [
            ["Shoulder Press", "3 x 10", "6–10kg", "🏋️‍♂️", "dumbbell shoulder press form"],
            ["Lat Pulldown", "3 x 12", "25–40kg", "🧲", "lat pulldown cable tutorial"],
            ["Cable Chest Press", "3 x 10", "15–30kg", "🔥", "cable chest press tutorial"],
            ["Bike", "15 min", "Moderate", "🚴", "stationary bike cardio beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Knee-Friendly Lower Body",
          duration: "45 min",
          exercises: [
            ["Box Squat", "3 x 12", "Bodyweight/10kg", "🪑", "box squat beginner form"],
            ["Glute Bridge", "3 x 12", "Bodyweight", "🌉", "glute bridge knee pain"],
            ["Terminal Knee Extension", "3 x 15", "Light band", "🦵", "terminal knee extension physical therapy"],
            ["Elliptical", "15 min", "Easy", "🌀", "elliptical workout beginner"]
          ]
        }
      ]
    },
    {
      week: "Week 2",
      focus: "Progression",
      targetWeight: 100.5,
      days: [
        {
          day: "Day 1",
          title: "Strength Progression",
          duration: "60 min",
          exercises: [
            ["Goblet Squat", "4 x 10", "12–18kg", "🏋️", "goblet squat beginner form"],
            ["Bench Press", "4 x 10", "10–16kg", "💪", "dumbbell bench press tutorial"],
            ["Cable Row", "4 x 12", "25–40kg", "🚣", "cable row beginner tutorial"],
            ["Incline Walk", "20 min", "4–5.2 km/h", "🚶", "incline treadmill walking fat loss"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Conditioning",
          duration: "55 min",
          exercises: [
            ["Shoulder Press", "4 x 10", "6–12kg", "🏋️‍♂️", "dumbbell shoulder press form"],
            ["Lat Pulldown", "4 x 12", "30–45kg", "🧲", "lat pulldown cable tutorial"],
            ["Face Pull", "3 x 15", "10–18kg", "🎯", "cable face pull correct form"],
            ["Bike", "20 min", "Moderate", "🚴", "stationary bike cardio beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Knee Recovery",
          duration: "35 min",
          exercises: [
            ["Wall Sit", "3 x 20 sec", "Bodyweight", "🧱", "wall sit knee rehab"],
            ["Step Ups", "3 x 10 each leg", "Bodyweight", "⬆️", "step up knee strengthening"],
            ["Straight Leg Raise", "3 x 12", "Bodyweight", "🦵", "straight leg raise knee rehab"],
            ["Bike", "15 min", "Easy", "🚴", "stationary bike knee rehab"]
          ]
        }
      ]
    },
    {
      week: "Week 3",
      focus: "Calorie Burn",
      targetWeight: 98.75,
      days: [
        {
          day: "Day 1",
          title: "Strength + Cardio",
          duration: "65 min",
          exercises: [
            ["Goblet Squat", "4 x 12", "14–20kg", "🏋️", "goblet squat beginner form"],
            ["Bench Press", "4 x 10", "10–18kg", "💪", "dumbbell bench press tutorial"],
            ["Cable Row", "4 x 12", "30–45kg", "🚣", "cable row beginner tutorial"],
            ["Incline Walk", "25 min", "4.5–5.5 km/h", "🚶", "incline treadmill walking fat loss"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Burn",
          duration: "60 min",
          exercises: [
            ["Shoulder Press", "4 x 12", "8–12kg", "🏋️‍♂️", "dumbbell shoulder press form"],
            ["Lat Pulldown", "4 x 12", "30–50kg", "🧲", "lat pulldown cable tutorial"],
            ["Face Pull", "4 x 15", "10–20kg", "🎯", "cable face pull correct form"],
            ["Bike Intervals", "20 min", "1 fast / 2 easy", "🚴", "stationary bike interval workout beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Knee + Mobility",
          duration: "40 min",
          exercises: [
            ["Hamstring Stretch", "3 x 30 sec", "Bodyweight", "🧘", "hamstring stretch physical therapy"],
            ["Glute Bridge", "3 x 15", "Bodyweight", "🌉", "glute bridge knee pain"],
            ["Side Leg Raise", "3 x 15", "Bodyweight", "➡️", "side leg raise knee strengthening"],
            ["Elliptical", "20 min", "Easy", "🌀", "elliptical knee pain rehab"]
          ]
        }
      ]
    },
    {
      week: "Week 4",
      focus: "Recovery + Consistency",
      targetWeight: 97,
      days: [
        {
          day: "Day 1",
          title: "Light Strength",
          duration: "50 min",
          exercises: [
            ["Goblet Squat", "3 x 10", "10–16kg", "🏋️", "goblet squat beginner form"],
            ["Bench Press", "3 x 10", "8–14kg", "💪", "dumbbell bench press tutorial"],
            ["Cable Row", "3 x 12", "20–35kg", "🚣", "cable row beginner tutorial"],
            ["Easy Walk", "20 min", "Comfortable", "🚶", "treadmill walking workout beginner"]
          ]
        },
        {
          day: "Day 2",
          title: "Upper Easy",
          duration: "45 min",
          exercises: [
            ["Shoulder Press", "3 x 10", "6–10kg", "🏋️‍♂️", "dumbbell shoulder press form"],
            ["Lat Pulldown", "3 x 10", "25–40kg", "🧲", "lat pulldown cable tutorial"],
            ["Face Pull", "3 x 15", "10–18kg", "🎯", "cable face pull correct form"],
            ["Bike", "20 min", "Easy", "🚴", "stationary bike cardio beginner"]
          ]
        },
        {
          day: "Day 3",
          title: "Mobility + Knee Care",
          duration: "50 min",
          exercises: [
            ["Stretching", "15 min", "Bodyweight", "🧘", "full body stretching routine beginner"],
            ["Mobility Drills", "15 min", "Bodyweight", "🤸", "beginner mobility routine"],
            ["Light Walk", "20 min", "Comfortable", "🚶", "walking workout beginner fat loss"]
          ]
        }
      ]
    }
  ];

  const foodPlan = [
    {
      meal: "Meal 1 — Workday Lunch",
      time: "1:00 PM",
      calories: "850–950 kcal",
      protein: "65–75g",
      carbs: "75–95g",
      fats: "22–30g",
      foods: [
        "200g grilled chicken or lean beef",
        "250g cooked rice or potato",
        "Large salad or vegetables",
        "1 tbsp olive oil or avocado",
        "Water or zero-calorie drink"
      ]
    },
    {
      meal: "Meal 2 — Dinner After Work",
      time: "7:30–8:30 PM",
      calories: "950–1050 kcal",
      protein: "75–90g",
      carbs: "70–90g",
      fats: "25–35g",
      foods: [
        "220g fish, chicken, turkey, or lean meat",
        "2 eggs or Greek yogurt side",
        "200g cooked rice, oats, or potatoes",
        "Vegetables or soup",
        "Fruit if still hungry"
      ]
    }
  ];

  const current = plan[activeWeek].days[activeDay];
  const currentWeight = Number(tracker.weight);
  const targetNow = plan[activeWeek].targetWeight;
  const weightLoss = currentWeight ? START_WEIGHT - currentWeight : 0;
  const monthProgress = Math.min(Math.max((weightLoss / TARGET_LOSS) * 100, 0), 100);
  const redFlag = currentWeight && currentWeight > targetNow;

  const doneCount = current.exercises.filter(
    (_, i) => completed[${activeWeek}-${activeDay}-${i}]
  ).length;
  const workoutProgress = Math.round((doneCount / current.exercises.length) * 100);

  return (
    <main style={styles.page}>
      <style>{`
        @media print {
          body { background: white !important; }
          .no-print { display: none !important; }
          main { background: white !important; color: black !important; }
          section, div { box-shadow: none !important; }
        }
      `}</style>

      <section style={styles.hero}>
        <div>
          <p style={styles.badge}>PRIVATE FITNESS APP</p>
          <h1 style={styles.title}>Babê Kaius</h1>
          <p style={styles.subtitle}>9:00 AM – 6:30 PM Workday Fat-Loss Dashboard</p>
        </div>
        <div style={styles.heroCard}>
          <div style={styles.heroNumber}>104kg</div>
          <div style={styles.heroText}>Start → Target 97kg</div>
        </div>
      </section>

      <section style={styles.dashboard}>
        <div style={styles.card}>
          <h2>Progress Tracker</h2>
          <input style={styles.input} placeholder="Current weight kg" value={tracker.weight} onChange={(e) => updateTracker("weight", e.target.value)} />
          <input style={styles.input} placeholder="Steps today" value={tracker.steps} onChange={(e) => updateTracker("steps", e.target.value)} />
          <input style={styles.input} placeholder="Sleep hours" value={tracker.sleep} onChange={(e) => updateTracker("sleep", e.target.value)} />
          <input style={styles.input} placeholder="Water liters" value={tracker.water} onChange={(e) => updateTracker("water", e.target.value)} />
          <input style={styles.input} placeholder="Energy /10" value={tracker.energy} onChange={(e) => updateTracker("energy", e.target.value)} />
          <textarea style={styles.textarea} placeholder="Notes" value={tracker.notes} onChange={(e) => updateTracker("notes", e.target.value)} />
          <button style={styles.button} onClick={() => alert("Progress saved.")}>Save Progress</button>
          <button style={styles.pdfButton} onClick={exportPDF}>Export Tracker To PDF</button>
        </div>

        <div style={redFlag ? styles.redCard : styles.card}>
          <h2>Motion Progress</h2>
          <p>Target this week: {targetNow}kg</p>
          <p>Current: {tracker.weight || "-"}kg</p>
          <div style={styles.progressTrack}>
            <div style={{ ...styles.progressFill, width: ${monthProgress}% }} />
          </div>
          <p>{Math.round(monthProgress)}% toward 7kg target</p>
          {redFlag && <p style={styles.redText}>⚠️ Red Flag: You are behind this week’s target. Increase steps, tighten snacks, and keep workouts consistent.</p>}
        </div>

        <div style={styles.card}>
          <h2>Today Training</h2>
          <p>{current.day} · {current.title}</p>
          <p>{current.duration}</p>
          <div style={styles.progressTrack}>
            <div style={{ ...styles.progressFill, width: ${workoutProgress}% }} />
          </div>
          <p>{workoutProgress}% workout completed</p>
        </div>
      </section>

      <section style={styles.foodSection}>
        <h2>2-Meal Daily Food Plan</h2>
        <p style={styles.warning}>7kg/month is aggressive. Keep this plan high-protein and do not starve yourself.</p>
        <div style={styles.foodGrid}>
          {foodPlan.map((meal, i) => (
            <div key={i} style={styles.foodCard}>
              <h3>{meal.meal}</h3>
              <p><strong>Time:</strong> {meal.time}</p>
              <p><strong>Calories:</strong> {meal.calories}</p>
              <p><strong>Protein:</strong> {meal.protein}</p>
              <p><strong>Carbs:</strong> {meal.carbs}</p>
              <p><strong>Fats:</strong> {meal.fats}</p>
              <ul>
                {meal.foods.map((f, x) => <li key={x}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="no-print" style={styles.selector}>
        {plan.map((w, i) => (
          <button key={i} onClick={() => { setActiveWeek(i); setActiveDay(0); }} style={i === activeWeek ? styles.activeTab : styles.tab}>
            {w.week}
          </button>
        ))}
      </section>

      <section className="no-print" style={styles.selector}>
        {plan[activeWeek].days.map((d, i) => (
          <button key={i} onClick={() => setActiveDay(i)} style={i === activeDay ? styles.activeDay : styles.day}>
            {d.day}
          </button>
        ))}
      </section>

      <section style={styles.trainingPanel}>
        <h2>{current.title}</h2>
        <p>{plan[activeWeek].focus} · {current.duration}</p>

        <div style={styles.exerciseGrid}>
          {current.exercises.map((ex, i) => {
            const key = ${activeWeek}-${activeDay}-${i};
            const done = completed[key];

            return (
              <div key={i} style={done ? styles.exerciseDone : styles.exercise}>
                <div style={styles.exerciseVisual}>{ex[3]}</div>
                <div>
                  <h3>{ex[0]}</h3>
                  <p>Sets/Reps: {ex[1]}</p>
                  <p>Weight: {ex[2]}</p>
                  <button className="no-print" style={styles.doneBtn} onClick={() => toggleExercise(i)}>
                    {done ? "Completed" : "Mark Done"}
                  </button>
                  <a className="no-print" href={youtube(ex[4])} target="_blank" rel="noopener noreferrer" style={styles.videoBtn}>
                    Watch Video
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section style={styles.warningCard}>
        <h2>⚠️ Knee Protection Rules</h2>
        <p>Stop sharp knee pain immediately. Avoid deep squats. Move slowly. Warm up before training.</p>
      </section>
    </main>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "linear-gradient(135deg,#020617,#0f172a,#111827)", color: "white", padding: "24px", fontFamily: "'Segoe UI','Trebuchet MS',Arial,sans-serif" },
  hero: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px", marginBottom: "24px" },
  badge: { color: "#93c5fd", letterSpacing: "2px", fontWeight: "900", fontSize: "12px" },
  title: { fontSize: "58px", margin: "8px 0" },
  subtitle: { color: "#dbeafe", fontSize: "20px" },
  heroCard: { background: "rgba(255,255,255,0.08)", padding: "24px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.15)" },
  heroNumber: { fontSize: "36px", fontWeight: "900" },
  heroText: { color: "#dbeafe" },
  dashboard: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "18px", marginBottom: "22px" },
  card: { background: "rgba(255,255,255,0.06)", borderRadius: "24px", padding: "22px", border: "1px solid rgba(255,255,255,0.12)" },
  redCard: { background: "rgba(239,68,68,0.18)", borderRadius: "24px", padding: "22px", border: "1px solid rgba(239,68,68,0.5)" },
  redText: { color: "#fecaca", fontWeight: "900" },
  input: { width: "100%", padding: "14px", borderRadius: "14px", border: "none", marginBottom: "12px", fontSize: "16px" },
  textarea: { width: "100%", minHeight: "80px", padding: "14px", borderRadius: "14px", border: "none", marginBottom: "12px", fontSize: "16px" },
  button: { width: "100%", padding: "14px", borderRadius: "14px", border: "none", background: "#2563eb", color: "white", fontWeight: "900", marginBottom: "10px" },
  pdfButton: { width: "100%", padding: "14px", borderRadius: "14px", border: "none", background: "#22c55e", color: "white", fontWeight: "900" },
  progressTrack: { width: "100%", height: "14px", background: "rgba(255,255,255,0.12)", borderRadius: "999px", overflow: "hidden", marginTop: "12px" },
  progressFill: { height: "100%", background: "linear-gradient(90deg,#38bdf8,#22c55e)", transition: "width 0.8s ease" },
  foodSection: { background: "rgba(14,165,233,0.1)", border: "1px solid rgba(147,197,253,0.25)", borderRadius: "28px", padding: "24px", marginBottom: "24px" },
  foodGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "18px" },
  foodCard: { background: "rgba(255,255,255,0.08)", borderRadius: "22px", padding: "20px", border: "1px solid rgba(255,255,255,0.12)" },
  warning: { color: "#fde68a", fontWeight: "900" },
  selector: { display: "flex", gap: "12px", overflowX: "auto", marginBottom: "16px" },
  tab: { padding: "12px 18px", borderRadius: "999px", border: "none", background: "rgba(255,255,255,0.08)", color: "white" },
  activeTab: { padding: "12px 18px", borderRadius: "999px", border: "none", background: "#2563eb", color: "white", fontWeight: "900" },
  day: { padding: "10px 16px", borderRadius: "14px", border: "none", background: "rgba(255,255,255,0.08)", color: "white" },
  activeDay: { padding: "10px 16px", borderRadius: "14px", border: "none", background: "#38bdf8", color: "#020617", fontWeight: "900" },
  trainingPanel: { background: "rgba(255,255,255,0.06)", borderRadius: "28px", padding: "24px", border: "1px solid rgba(255,255,255,0.12)" },
  exerciseGrid: { display: "grid", gap: "18px" },
  exercise: { display: "grid", gridTemplateColumns: "90px 1fr", gap: "18px", background: "rgba(255,255,255,0.07)", borderRadius: "24px", padding: "20px", border: "1px solid rgba(255,255,255,0.12)" },
  exerciseDone: { display: "grid", gridTemplateColumns: "90px 1fr", gap: "18px", background: "rgba(34,197,94,0.18)", borderRadius: "24px", padding: "20px", border: "1px solid rgba(34,197,94,0.4)" },
  exerciseVisual: { width: "72px", height: "72px", borderRadius: "18px", background: "linear-gradient(135deg,#1e40af,#38bdf8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "34px" },
  doneBtn: { background: "#22c55e", border: "none", color: "white", padding: "10px 14px", borderRadius: "14px", fontWeight: "900", marginRight: "8px" },
  videoBtn: { background: "#2563eb", color: "white", padding: "10px 14px", borderRadius: "14px", textDecoration: "none", fontWeight: "900" },
  warningCard: { background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.35)", borderRadius: "24px", padding: "22px", marginTop: "24px", color: "#fde68a" }
};
