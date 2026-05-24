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

          title: "Full Body Strength",

          workouts: [
            {
              name: "Goblet Squat",
              details:
                "3 x 10 — Light/Moderate Weight",

              image: "🏋️",

              youtube:
                "https://www.youtube.com/results?search_query=goblet+squat+form",
            },

            {
              name: "Dumbbell Bench Press",

              details: "3 x 10",

              image: "💪",

              youtube:
                "https://www.youtube.com/results?search_query=dumbbell+bench+press",
            },

            {
              name: "Cable Row",

              details: "3 x 12",

              image: "🚣",

              youtube:
                "https://www.youtube.com/results?search_query=cable+row+exercise",
            },

            {
              name: "Incline Walk",

              details: "15–25 min",

              image: "🚶",

              youtube:
                "https://www.youtube.com/results?search_query=incline+treadmill+walk",
            },
          ],
        },

        {
          day: "Day 2",

          title: "Upper Body + Cardio",

          workouts: [
            {
              name: "Shoulder Press",

              details: "3 x 10",

              image: "🏋️‍♂️",

              youtube:
                "https://www.youtube.com/results?search_query=shoulder+press+exercise",
            },

            {
              name: "Lat Pulldown",

              details: "3 x 12",

              image: "🧲",

              youtube:
                "https://www.youtube.com/results?search_query=lat+pulldown+exercise",
            },

            {
              name: "Face Pull",

              details: "3 x 15",

              image: "🎯",

              youtube:
                "https://www.youtube.com/results?search_query=face+pull+exercise",
            },

            {
              name: "Bike Cardio",

              details: "15–20 min",

              image: "🚴",

              youtube:
                "https://www.youtube.com/results?search_query=stationary+bike+cardio",
            },
          ],
        },

        {
          day: "Day 3",

          title: "Lower Body Knee-Safe",

          workouts: [
            {
              name: "Box Squat",

              details: "3 x 10",

              image: "🪑",

              youtube:
                "https://www.youtube.com/results?search_query=box+squat+exercise",
            },

            {
              name: "Glute Bridge",

              details: "3 x 12",

              image: "🌉",

              youtube:
                "https://www.youtube.com/results?search_query=glute+bridge",
            },

            {
              name: "Romanian Deadlift",

              details: "3 x 10",

              image: "⚡",

              youtube:
                "https://www.youtube.com/results?search_query=romanian+deadlift",
            },

            {
              name: "Elliptical",

              details: "15–20 min",

              image: "🌀",

              youtube:
                "https://www.youtube.com/results?search_query=elliptical+workout",
            },
          ],
        },

        {
          day: "Day 4",

          title:
            "Knee Strength — Max 20 Minutes",

          workouts: [
            {
              name:
                "Terminal Knee Extension",

              details: "2 x 15",

              image: "🦵",

              youtube:
                "https://www.youtube.com/results?search_query=terminal+knee+extension",
            },

            {
              name:
                "Straight Leg Raise",

              details: "2 x 12",

              image: "⬆️",

              youtube:
                "https://www.youtube.com/results?search_query=straight+leg+raise+knee",
            },

            {
              name: "Wall Sit",

              details: "2 x 20 sec",

              image: "🧱",

              youtube:
                "https://www.youtube.com/results?search_query=wall+sit+knee+rehab",
            },

            {
              name: "Easy Bike",

              details: "8–10 min",

              image: "🚴",

              youtube:
                "https://www.youtube.com/results?search_query=easy+bike+knee+rehab",
            },
          ],
        },
      ],
    })
  );

  return (
    <main style={styles.page}>
      <h1 style={styles.title}>
        Babê Kaius
      </h1>

      <p style={styles.subtitle}>
        2-Month Transformation Dashboard
      </p>

      <section style={styles.card}>
        <h2>📊 Live Progress Tracker</h2>

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
            ⚠️ Red Flag:
            Weight loss target behind
            schedule.
          </div>
        )}
      </section>

      <section style={styles.warning}>
        <h2>⚠️ Knee Safety</h2>

        <p>
          Avoid deep squats and jumping.
          Stop any sharp knee pain.
        </p>
      </section>

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
                  style={
                    day.day === "Day 4"
                      ? styles.kneeDay
                      : styles.dayCard
                  }
                >
                  <h3>{day.day}</h3>

                  <h4>{day.title}</h4>

                  {day.workouts.map(
                    (workout, index) => (
                      <div
                        key={index}
                        style={
                          styles.workoutCard
                        }
                      >
                        <div
                          style={
                            styles.workoutIcon
                          }
                        >
                          {workout.image}
                        </div>

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
   <section style={styles.card}>
  <h2>🥗 Dubai Fat Loss Food Plan</h2>

  <div style={styles.foodGrid}>

    {/* BREAKFAST */}
    <div style={styles.foodCard}>
      <h3>Breakfast (10:00 AM)</h3>

      <p><strong>High Protein Egg & Oats Bowl</strong></p>

      <p>Calories: 620 kcal</p>
      <p>Protein: 45g</p>
      <p>Carbs: 50g</p>
      <p>Fats: 18g</p>

      <br />

      <p><strong>Ingredients:</strong></p>

      <p>• 4 Egg Whites</p>
      <p>• 2 Full Eggs</p>
      <p>• 80g Oats</p>
      <p>• 1 Banana</p>
      <p>• Cinnamon</p>
      <p>• 1 tbsp Peanut Butter</p>

      <br />

      <p><strong>Preparation:</strong></p>

      <p>
        1. Cook oats with hot water.
        <br />
        2. Add sliced banana and cinnamon.
        <br />
        3. Cook eggs separately with low oil.
        <br />
        4. Add peanut butter on top.
      </p>

      <br />

      <p><strong>Dubai Ingredient Prices:</strong></p>

      <p>Eggs — Carrefour — ~18 AED</p>
      <p>Oats — Lulu — ~14 AED</p>
      <p>Bananas — Viva — ~7 AED</p>
      <p>Peanut Butter — Carrefour — ~24 AED</p>

      <br />

      <a
        href="https://www.youtube.com/results?search_query=high+protein+breakfast+recipe"
        target="_blank"
        style={styles.link}
      >
        ▶️ Watch Breakfast Recipe
      </a>
    </div>

    {/* SNACKS */}
    <div style={styles.foodCard}>
      <h3>Healthy Snacks (3:30 PM)</h3>

      <p><strong>Option 1:</strong> Greek Yogurt + Almonds</p>

      <p>Calories: 250 kcal</p>
      <p>Protein: 20g</p>
      <p>Carbs: 12g</p>
      <p>Fats: 10g</p>

      <br />

      <p><strong>Option 2:</strong> Protein Shake + Banana</p>

      <p>Calories: 280 kcal</p>
      <p>Protein: 30g</p>
      <p>Carbs: 22g</p>
      <p>Fats: 6g</p>

      <br />

      <p><strong>Preparation:</strong></p>

      <p>
        1. Mix protein powder with cold water.
        <br />
        2. Eat banana separately.
        <br />
        3. Greek yogurt can be mixed with almonds.
      </p>

      <br />

      <p><strong>Dubai Ingredient Prices:</strong></p>

      <p>Greek Yogurt — Carrefour — ~18 AED</p>
      <p>Almonds — Lulu — ~22 AED</p>
      <p>Protein Powder — Life Pharmacy — ~220 AED</p>
      <p>Bananas — Viva — ~7 AED</p>

      <br />

      <a
        href="https://www.youtube.com/results?search_query=healthy+high+protein+snacks"
        target="_blank"
        style={styles.link}
      >
        ▶️ Watch Snack Recipes
      </a>
    </div>

    {/* DINNER */}
    <div style={styles.foodCard}>
      <h3>Dinner (7:00 PM)</h3>

      <p><strong>Salmon & Sweet Potato Plate</strong></p>

      <p>Calories: 720 kcal</p>
      <p>Protein: 60g</p>
      <p>Carbs: 55g</p>
      <p>Fats: 24g</p>

      <br />

      <p><strong>Ingredients:</strong></p>

      <p>• 220g Salmon</p>
      <p>• 250g Sweet Potato</p>
      <p>• Spinach</p>
      <p>• Olive Oil</p>
      <p>• Lemon</p>

      <br />

      <p><strong>Preparation:</strong></p>

      <p>
        1. Grill salmon for 8–10 minutes.
        <br />
        2. Bake sweet potato in oven.
        <br />
        3. Add spinach with olive oil and lemon.
      </p>

      <br />

      <p><strong>Dubai Ingredient Prices:</strong></p>

      <p>Salmon — Carrefour — ~55 AED/kg</p>
      <p>Sweet Potato — Lulu — ~12 AED</p>
      <p>Spinach — Viva — ~7 AED</p>
      <p>Olive Oil — Carrefour — ~35 AED</p>

      <br />

      <a
        href="https://www.youtube.com/results?search_query=healthy+salmon+meal+prep"
        target="_blank"
        style={styles.link}
      >
        ▶️ Watch Dinner Recipe
      </a>
    </div>

  </div>

  <div style={styles.warningBox}>
    ⚠️ Target: Lose 7kg between 26/05/2026 and 26/07/2026
    <br />
    <br />

    Maintain:
    <br />
    • 8,000–10,000 daily steps
    <br />
    • 3 workout days weekly
    <br />
    • 1 knee recovery day
    <br />
    • Water: 3L daily
    <br />
    • Sleep: Minimum 7 hours
  </div>
</section>
    </main>
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
    fontSize: 58,

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

    transition:
      "width 0.8s ease",
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

    border:
      "1px solid rgba(255,255,255,0.12)",
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

  kneeDay: {
    background:
      "rgba(234,179,8,0.18)",

    color: "#fff7ed",

    padding: 18,

    borderRadius: 18,

    border:
      "1px solid rgba(234,179,8,0.4)",
  },

  workoutCard: {
    display: "flex",

    gap: 12,

    alignItems: "center",

    background:
      "rgba(255,255,255,0.08)",

    padding: 14,

    borderRadius: 16,

    marginTop: 12,
  },

  workoutIcon: {
    width: 52,

    height: 52,

    borderRadius: 14,

    background:
      "linear-gradient(135deg,#2563eb,#38bdf8)",

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    fontSize: 26,
  },

  workoutName: {
    fontWeight: 700,

    marginBottom: 4,
  },

  link: {
    color: "#7dd3fc",

    textDecoration: "none",

    fontWeight: 700,
  },
};
