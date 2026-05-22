"use client";

import { useEffect, useMemo, useState } from "react";
import { Activity, CalendarCheck, Dumbbell, Flame, HeartPulse, Home, LineChart, NotebookPen, PlayCircle, Salad, Save, Scale, Timer, TrendingDown } from "lucide-react";

const workouts = [
  {
    id: "day1",
    title: "Day 1 - Full Body Strength + Incline Walk",
    duration: "55-65 min",
    focus: "Strength foundation, posture, low-impact fat loss",
    warmup: ["Treadmill easy walk - 6 min", "Shoulder circles - 30 sec", "Hip hinges - 10 reps", "Bodyweight box squat - 10 reps"],
    exercises: [
      { name: "Dumbbell Goblet Squat", sets: "3", reps: "10-12", rest: "75 sec", muscles: "legs, glutes, core", video: "YouTube: goblet squat beginner form Squat University", cues: "Hold one dumbbell close to chest. Sit hips back. Keep knees tracking over toes." },
      { name: "Incline Dumbbell Press", sets: "3", reps: "10-12", rest: "75 sec", muscles: "chest, shoulders, triceps", video: "YouTube: incline dumbbell press beginner Jeff Nippard", cues: "Shoulder blades back. Lower slowly. Press without bouncing." },
      { name: "Seated Cable Row", sets: "3", reps: "10-12", rest: "75 sec", muscles: "back, rear shoulders, biceps", video: "YouTube: seated cable row proper form Jeremy Ethier", cues: "Chest tall. Pull elbows back. Do not shrug." },
      { name: "Dumbbell Romanian Deadlift", sets: "3", reps: "10", rest: "90 sec", muscles: "hamstrings, glutes, lower back", video: "YouTube: dumbbell Romanian deadlift beginner form", cues: "Soft knees. Hinge at hips. Keep weights close to legs." },
      { name: "Pallof Press", sets: "2", reps: "10 each side", rest: "45 sec", muscles: "core, anti-rotation", video: "YouTube: cable Pallof press beginner form", cues: "Stand tall. Press cable straight out. Resist twisting." }
    ],
    cardio: "Treadmill incline walk: 12-18 min, incline 4-8%, speed comfortable, breathing controlled.",
    cooldown: ["Slow walk - 3 min", "Chest stretch - 45 sec", "Hamstring stretch - 45 sec each", "Deep breathing - 1 min"]
  },
  {
    id: "day2",
    title: "Day 2 - Upper/Lower + Bike Conditioning",
    duration: "50-60 min",
    focus: "Joint-friendly strength and stamina",
    warmup: ["Bike easy pace - 6 min", "Cat-cow - 8 reps", "Wall slides - 10 reps", "Glute bridges - 12 reps"],
    exercises: [
      { name: "Dumbbell Step-Up", sets: "3", reps: "8-10 each leg", rest: "75 sec", muscles: "legs, glutes, balance", video: "YouTube: dumbbell step up beginner form", cues: "Use a low bench. Step through the heel. Control the descent." },
      { name: "Cable Lat Pulldown", sets: "3", reps: "10-12", rest: "75 sec", muscles: "lats, upper back, biceps", video: "YouTube: lat pulldown form beginner Jeremy Ethier", cues: "Pull elbows down. Keep chest proud. Avoid leaning too far back." },
      { name: "Dumbbell Bench Press", sets: "3", reps: "10-12", rest: "75 sec", muscles: "chest, shoulders, triceps", video: "YouTube: dumbbell bench press beginner form", cues: "Feet planted. Lower with control. Press evenly." },
      { name: "Cable Face Pull", sets: "3", reps: "12-15", rest: "45 sec", muscles: "rear shoulders, upper back, posture", video: "YouTube: cable face pull form Athlean X", cues: "Pull toward upper face. Elbows high. Squeeze shoulder blades." },
      { name: "Dead Bug", sets: "2", reps: "8 each side", rest: "45 sec", muscles: "core, stability", video: "YouTube: dead bug exercise beginner form", cues: "Lower back stays on floor. Move slowly. Breathe out as leg extends." }
    ],
    cardio: "Bike intervals: 10 rounds of 30 sec faster + 60 sec easy. Keep it challenging but not exhausting.",
    cooldown: ["Easy bike - 3 min", "Lat stretch - 45 sec each", "Quad stretch - 45 sec each", "Breathing - 1 min"]
  },
  {
    id: "day3",
    title: "Day 3 - Full Body Circuit + Elliptical",
    duration: "55-70 min",
    focus: "Calorie burn, full-body conditioning, consistency",
    warmup: ["Elliptical easy - 6 min", "Arm swings - 30 sec", "Bodyweight lunges assisted - 8 each", "Plank shoulder taps from bench - 10 reps"],
    exercises: [
      { name: "Dumbbell Split Squat", sets: "3", reps: "8-10 each leg", rest: "90 sec", muscles: "legs, glutes", video: "YouTube: dumbbell split squat beginner form", cues: "Hold support if needed. Keep front foot stable. Move slowly." },
      { name: "Cable Chest Press", sets: "3", reps: "10-12", rest: "75 sec", muscles: "chest, shoulders, triceps", video: "YouTube: standing cable chest press beginner form", cues: "Stagger stance. Press forward. Keep ribs down." },
      { name: "One-Arm Dumbbell Row", sets: "3", reps: "10 each side", rest: "75 sec", muscles: "back, biceps", video: "YouTube: one arm dumbbell row form Jeff Nippard", cues: "Support on bench. Pull elbow to hip. Avoid twisting." },
      { name: "Dumbbell Shoulder Press", sets: "2", reps: "10", rest: "75 sec", muscles: "shoulders, triceps", video: "YouTube: seated dumbbell shoulder press beginner", cues: "Use light weights. Brace core. Do not arch back." },
      { name: "Farmer Carry", sets: "4", reps: "30-45 sec", rest: "45 sec", muscles: "grip, core, posture", video: "YouTube: farmer carry exercise form", cues: "Stand tall. Walk slowly. Shoulders down and back." }
    ],
    cardio: "Elliptical steady pace: 15-20 min. Keep effort around 6/10.",
    cooldown: ["Slow walk - 3 min", "Hip flexor stretch - 45 sec each", "Shoulder stretch - 45 sec", "Breathing - 1 min"]
  }
];

const nutritionTips = [
  "Aim for a small calorie deficit, not starvation.",
  "Protein target: roughly 130-170g daily if tolerated.",
  "Build meals around protein + vegetables + controlled carbs.",
  "Drink 2.5-3.5L water daily, more if sweating.",
  "Reduce sugary drinks, fried foods, and large late-night snacks."
];

const defaultLog = { weight: "", steps: "", sleep: "", energy: "", workoutDone: false, water: false, protein: false, notes: "" };

export default function FitnessCoachApp() {
  const [tab, setTab] = useState("home");
  const [log, setLog] = useState(defaultLog);
  const [history, setHistory] = useState([]);
  const todayWorkout = useMemo(() => workouts[new Date().getDay() % 3], []);

  useEffect(() => {
    const savedLog = localStorage.getItem("fitnessCoachLog");
    const savedHistory = localStorage.getItem("fitnessCoachHistory");
    if (savedLog) setLog(JSON.parse(savedLog));
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  useEffect(() => {
    localStorage.setItem("fitnessCoachLog", JSON.stringify(log));
  }, [log]);

  function saveToday() {
    const entry = { ...log, date: new Date().toLocaleDateString() };
    const updated = [entry, ...history].slice(0, 30);
    setHistory(updated);
    localStorage.setItem("fitnessCoachHistory", JSON.stringify(updated));
    alert("Saved today's check-in on this device.");
  }

  const tabs = [
    ["home", Home, "Home"], ["today", Timer, "Today"], ["plan", Dumbbell, "Plan"], ["tracker", LineChart, "Track"], ["nutrition", Salad, "Food"]
  ];

  return (
    <main className="min-h-screen pb-24">
      <section className="bg-slate-950 text-white px-5 pt-8 pb-7 rounded-b-[2rem] shadow-soft">
        <p className="text-sm text-emerald-300 font-semibold">104KG FAT LOSS COACH</p>
        <h1 className="text-3xl font-black mt-2">Your Mobile Fitness Dashboard</h1>
        <p className="text-slate-300 mt-2">3 days/week • 40-70 min • limited gym equipment • progress saved on this phone</p>
        <div className="grid grid-cols-3 gap-3 mt-5">
          <Metric icon={<Scale size={18}/>} label="Weight" value="104 kg" />
          <Metric icon={<TrendingDown size={18}/>} label="Goal" value="Fat loss" />
          <Metric icon={<CalendarCheck size={18}/>} label="Weekly" value="3 days" />
        </div>
      </section>

      <section className="p-5 max-w-3xl mx-auto">
        {tab === "home" && <HomeView setTab={setTab} todayWorkout={todayWorkout} />}
        {tab === "today" && <WorkoutView workout={todayWorkout} />}
        {tab === "plan" && <PlanView />}
        {tab === "tracker" && <TrackerView log={log} setLog={setLog} saveToday={saveToday} history={history} />}
        {tab === "nutrition" && <NutritionView />}
      </section>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-2 py-2 grid grid-cols-5 gap-1">
        {tabs.map(([id, Icon, label]) => (
          <button key={id} onClick={() => setTab(id)} className={`rounded-2xl py-2 text-xs font-bold flex flex-col items-center gap-1 ${tab === id ? "bg-slate-950 text-white" : "text-slate-500"}`}>
            <Icon size={19}/>{label}
          </button>
        ))}
      </nav>
    </main>
  );
}

function Metric({ icon, label, value }) {
  return <div className="bg-white/10 rounded-2xl p-3"><div className="text-emerald-300">{icon}</div><p className="text-xs text-slate-300 mt-1">{label}</p><p className="font-bold">{value}</p></div>;
}

function Card({ children, className = "" }) { return <div className={`bg-white rounded-3xl p-5 shadow-soft border border-slate-100 ${className}`}>{children}</div>; }
function Title({ icon, children }) { return <h2 className="text-xl font-black flex items-center gap-2 mb-3">{icon}{children}</h2>; }

function HomeView({ setTab, todayWorkout }) {
  return <div className="space-y-4">
    <Card><Title icon={<Flame/>}>Today Focus</Title><p className="font-bold">{todayWorkout.title}</p><p className="text-slate-600 mt-1">{todayWorkout.focus}</p><button onClick={() => setTab("today")} className="mt-4 w-full bg-slate-950 text-white rounded-2xl py-3 font-bold">Open Today's Workout</button></Card>
    <Card><Title icon={<CalendarCheck/>}>Weekly Schedule</Title><div className="space-y-2 text-sm"><p>Monday: Day 1 strength + treadmill</p><p>Wednesday: Day 2 strength + bike</p><p>Friday: Day 3 circuit + elliptical</p><p className="text-slate-500">Rest days: walking, mobility, sleep focus.</p></div></Card>
    <Card><Title icon={<HeartPulse/>}>Daily Targets</Title><ul className="list-disc pl-5 space-y-1 text-slate-700"><li>7,000-9,000 steps</li><li>2.5-3.5L water</li><li>Protein with each meal</li><li>7-8 hours sleep</li></ul></Card>
  </div>;
}

function WorkoutView({ workout }) {
  return <div className="space-y-4">
    <Card><Title icon={<Dumbbell/>}>{workout.title}</Title><p className="text-slate-600">Duration: {workout.duration}</p><p className="text-slate-600">Focus: {workout.focus}</p></Card>
    <Card><h3 className="font-black mb-2">Warmup</h3>{workout.warmup.map((x,i)=><CheckLine key={i} text={x}/>)}</Card>
    {workout.exercises.map((ex)=><ExerciseCard key={ex.name} ex={ex}/>) }
    <Card><h3 className="font-black flex gap-2"><Activity/>Cardio</h3><p className="text-slate-700 mt-2">{workout.cardio}</p></Card>
    <Card><h3 className="font-black mb-2">Cooldown</h3>{workout.cooldown.map((x,i)=><CheckLine key={i} text={x}/>)}</Card>
  </div>;
}

function ExerciseCard({ ex }) {
  return <Card><h3 className="text-lg font-black">{ex.name}</h3><p className="text-sm text-slate-500 mt-1">{ex.muscles}</p><div className="grid grid-cols-3 gap-2 mt-3 text-center"><div className="bg-slate-100 rounded-2xl p-2"><b>{ex.sets}</b><p className="text-xs">sets</p></div><div className="bg-slate-100 rounded-2xl p-2"><b>{ex.reps}</b><p className="text-xs">reps</p></div><div className="bg-slate-100 rounded-2xl p-2"><b>{ex.rest}</b><p className="text-xs">rest</p></div></div><p className="mt-3 text-slate-700"><b>Form:</b> {ex.cues}</p><p className="mt-3 text-slate-700 flex gap-2"><PlayCircle className="shrink-0"/><span>{ex.video}</span></p></Card>;
}

function PlanView() { return <div className="space-y-4">{workouts.map(w=><WorkoutView key={w.id} workout={w}/>)}</div>; }
function CheckLine({ text }) { return <label className="flex gap-3 py-2 text-slate-700"><input type="checkbox" className="mt-1"/> {text}</label>; }

function TrackerView({ log, setLog, saveToday, history }) {
  const set = (k,v)=>setLog({...log,[k]:v});
  return <div className="space-y-4">
    <Card><Title icon={<NotebookPen/>}>Daily Check-In</Title><div className="grid grid-cols-2 gap-3"><Input label="Weight" value={log.weight} onChange={v=>set("weight",v)} /><Input label="Steps" value={log.steps} onChange={v=>set("steps",v)} /><Input label="Sleep hours" value={log.sleep} onChange={v=>set("sleep",v)} /><Input label="Energy /10" value={log.energy} onChange={v=>set("energy",v)} /></div><label className="flex gap-2 mt-3"><input type="checkbox" checked={log.workoutDone} onChange={e=>set("workoutDone",e.target.checked)}/> Workout done</label><label className="flex gap-2 mt-2"><input type="checkbox" checked={log.water} onChange={e=>set("water",e.target.checked)}/> Water target reached</label><label className="flex gap-2 mt-2"><input type="checkbox" checked={log.protein} onChange={e=>set("protein",e.target.checked)}/> Protein target reached</label><textarea className="w-full mt-3 border rounded-2xl p-3" placeholder="Notes" value={log.notes} onChange={e=>set("notes",e.target.value)} /><button onClick={saveToday} className="mt-3 w-full bg-emerald-600 text-white rounded-2xl py-3 font-bold flex justify-center gap-2"><Save/>Save Today</button></Card>
    <Card><Title icon={<LineChart/>}>Recent History</Title>{history.length===0?<p className="text-slate-500">No saved check-ins yet.</p>:history.map((h,i)=><div key={i} className="border-b py-2 text-sm"><b>{h.date}</b> - {h.weight || "no weight"} kg - steps {h.steps || "-"} - workout {h.workoutDone ? "yes" : "no"}</div>)}</Card>
  </div>;
}

function Input({ label, value, onChange }) { return <label className="text-sm font-bold text-slate-600">{label}<input className="mt-1 w-full border rounded-2xl p-3 font-normal" value={value} onChange={e=>onChange(e.target.value)} /></label>; }

function NutritionView() {
  return <div className="space-y-4"><Card><Title icon={<Salad/>}>Nutrition Dashboard</Title>{nutritionTips.map((t,i)=><CheckLine key={i} text={t}/>)}</Card><Card><h3 className="font-black mb-2">Simple Meal Formula</h3><p>Protein + vegetables + controlled carbs + healthy fats.</p><p className="mt-2 text-slate-600">Examples: grilled chicken bowl, tuna sandwich + salad, eggs + yogurt, beef/chicken rice bowl with vegetables.</p></Card><Card><h3 className="font-black mb-2">Weekly Check-In</h3><p className="text-slate-600">Every 7 days, compare weight trend, workout completion, steps, sleep, and energy. If weight is not moving for 2 weeks, reduce portions slightly or add 10 minutes cardio.</p></Card></div>;
}
