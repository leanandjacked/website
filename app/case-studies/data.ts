export type CaseStudy = {
  slug: string;
  name: string;
  tagline: string;
  stat: string;
  transformation: string;
  age: string;
  occupation: string;
  photo: string;
  challenge: string;
  story: string[];
  result: string;
  quote: string;
  metrics: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "meet",
    name: "MEET",
    tagline: "Engineering student preparing for entrance exams. Studying 12 hours a day. No gym background. No time for complex diets. Trained 3 days a week on home-cooked food. Zero crash dieting. Zero cardio. 36 kilos gone.",
    stat: "110KG → 74KG",
    transformation: "36 KILOS LOST | 8 MONTHS",
    age: "19",
    occupation: "Engineering Student",
    photo: "meet.jpeg",
    challenge: "Engineering student preparing for entrance exams. Studying 12 hours a day. No gym background. No time for complex diets. Trained 3 days a week on home-cooked food. Zero crash dieting. Zero cardio. 36 kilos gone.",
    story: [],
    result: "",
    quote: "",
    metrics: [],
  },
  {
    slug: "kabir",
    name: "KABIR",
    tagline: "Struggled with obesity his entire life. Tried keto, intermittent fasting, 6-day programs. Nothing worked. Came with prediabetes and high cholesterol. We did the opposite 3–4 sessions a week, home food, no cardio. Reversed it all.",
    stat: "114KG → 79KG",
    transformation: "35 KILOS LOST | 7 MONTHS",
    age: "27",
    occupation: "Working Professional",
    photo: "kabir.PNG",
    challenge: "Struggled with obesity his entire life. Tried keto, intermittent fasting, 6-day programs. Nothing worked. Came with prediabetes and high cholesterol. We did the opposite 3–4 sessions a week, home food, no cardio. Reversed it all.",
    story: [],
    result: "",
    quote: "",
    metrics: [],
  },
  {
    slug: "dr-ajinkya",
    name: "DR. AJINKYA",
    tagline: "Diagnosed with Type 2 diabetes at 23. Got COVID three times. Busy surgeon long hours, no time, no energy. Today he is 75kg. Stronger than his 20s. Diabetes reversed.",
    stat: "100KG → 75KG",
    transformation: "TYPE 2 DIABETES REVERSED | AGE 30",
    age: "30",
    occupation: "Surgeon",
    photo: "drajinkya.jpeg",
    challenge: "Diagnosed with Type 2 diabetes at 23. Got COVID three times. Busy surgeon long hours, no time, no energy. Today he is 75kg. Stronger than his 20s. Diabetes reversed.",
    story: [],
    result: "",
    quote: "",
    metrics: [],
  },
  {
    slug: "gaurav",
    name: "GAURAV",
    tagline: "37 years old. Corporate job. MRI-confirmed disc herniation. Chronic back pain. No gym in years. We did not train harder we trained smarter. 12 weeks. 17 kilos gone. Zero back pain.",
    stat: "92KG → 75KG",
    transformation: "12 WEEKS | ZERO BACK PAIN",
    age: "37",
    occupation: "Corporate Professional",
    photo: "gaurav.PNG",
    challenge: "37 years old. Corporate job. MRI-confirmed disc herniation. Chronic back pain. No gym in years. We did not train harder we trained smarter. 12 weeks. 17 kilos gone. Zero back pain.",
    story: [],
    result: "",
    quote: "",
    metrics: [],
  },
];
