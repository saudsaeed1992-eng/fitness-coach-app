"use client";

import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [weight, setWeight] = useState("");
  const [steps, setSteps] = useState("");
  const [water, setWater] = useState("");
  const [sleep, setSleep] = useState("");

  const START_WEIGHT = 104;
  const TARGET_WEIGHT = 97;

  const currentWeight = Number(weight);

  const weightProgress = currentWeight
    ? Math.min(((START_WEIGHT - currentWeight) / (START_WEIGHT - TARGET_WEIGHT)) * 100, 100)
    : 0;

  const stepsProgress = Math.min((Number(steps) / 10000) * 100, 100);
  const water
