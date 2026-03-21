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
    name: "Meet",
    tagline: "The Engineering Student Who Lost 36 Kilos Without Quitting His Studies",
    stat: "110kg - 74kg",
    transformation: "36 Kilos Lost | 8 Months",
    age: "19",
    occupation: "Engineering Student",
    photo: "meet.jpeg",
    challenge:
      "Meet came to Zaid at 110kg. He was studying 12 hours a day preparing for entrance exams. No gym experience. No time for complex meals. Family cooked Indian food every night. He'd tried skipping meals before  it made him more tired and he'd binge by evening.",
    story: [
      "The first thing we did was stop treating his situation like a problem. 12 hours of studying is not a barrier  it's a lifestyle we had to build around.",
      "We set his calories at 1800 kcal. Not aggressive. Sustainable. All home food  dal, roti, sabzi, eggs. No supplements except creatine.",
      "Training was 3 days per week, 45 minutes each. All compound movements. Nothing complicated. His only job was to show up consistently and progressively overload.",
      "The first month was slow. 3 kilos. He texted asking if it was working. We stayed the course.",
      "Month 3: 12 kilos gone. His energy had improved. He was sleeping better. His study focus was sharper  something he hadn't expected.",
      "Months 4–8 followed the same pattern. Consistency. Small weekly adjustments. No dramatic changes. No crash phases.",
      "8 months later: 74kg. 36 kilos lost. Still studying. Still eating home food. Zero crash dieting. Zero cardio.",
    ],
    result:
      "Meet graduated with distinction and walked into his new college 36 kilos lighter. His family couldn't believe it was the same person.",
    quote:
      "\"I thought I didn't have time. Turns out I just didn't have the right system.\"",
    metrics: [
      { label: "Starting Weight", value: "110 kg" },
      { label: "Final Weight", value: "74 kg" },
      { label: "Lost", value: "36 kg" },
      { label: "Duration", value: "8 months" },
      { label: "Sessions/Week", value: "3" },
      { label: "Session Length", value: "45 min" },
    ],
  },
  {
    slug: "kabir",
    name: "Kabir",
    tagline: "Prediabetes Reversed. 35 Kilos Gone. 7 Months.",
    stat: "114kg - 79kg",
    transformation: "35 Kilos Lost | 7 Months",
    age: "27",
    occupation: "Working Professional",
    photo: "kabir.PNG",
    challenge:
      "Kabir had been obese his entire life. He came with prediabetes, high cholesterol, and a history of failed diets  keto, intermittent fasting, 6-day training programs. Nothing had worked. He was starting to believe his body just didn't respond to fat loss.",
    story: [
      "The first thing I told Kabir was: everything you've been doing has been too aggressive for your situation. Your body has been in a constant state of stress. We're going to do the opposite.",
      "We started at 2000 kcal  which felt like too much to him. But it was a number his lifestyle could sustain. Home food: rice, dal, eggs. Nothing exotic.",
      "Training was 3-4 sessions a week. No cardio. His joints wouldn't handle high-impact work and honestly  cardio is not where fat loss happens.",
      "Month 1: 5 kilos. Month 2: 9 kilos total. His blood sugar numbers started improving by month 3.",
      "By month 5, the doctor told him he was no longer prediabetic. His cholesterol had normalised. He cried at the appointment.",
      "We continued the programme with minor adjustments. Month 7: 79kg. 35 kilos gone.",
    ],
    result:
      "Kabir reversed his prediabetes completely. His doctor removed him from the at-risk category. He continued training independently after the programme ended.",
    quote:
      "\"I thought my body was broken. It wasn't. It just needed the right signals.\"",
    metrics: [
      { label: "Starting Weight", value: "114 kg" },
      { label: "Final Weight", value: "79 kg" },
      { label: "Lost", value: "35 kg" },
      { label: "Duration", value: "7 months" },
      { label: "Blood Sugar", value: "Normalised" },
      { label: "Cholesterol", value: "Normalised" },
    ],
  },
  {
    slug: "dr-ajinkya",
    name: "Dr. Ajinkya",
    tagline: "A Surgeon Who Reversed Type 2 Diabetes at 30",
    stat: "100kg - 75kg",
    transformation: "25 Kilos Lost | Type 2 Diabetes Reversed",
    age: "30",
    occupation: "Surgeon",
    photo: "drajinkya.jpeg",
    challenge:
      "Ajinkya was diagnosed with Type 2 diabetes at 23. He had COVID three times. As a surgeon, his hours were brutal  12–16 hour shifts. No time, minimal energy. He came to Zaid after a moment of clarity: \"What's the point of saving lives if I'm ruining mine?\"",
    story: [
      "The biggest challenge with Ajinkya wasn't his body  it was his schedule. We had to build a programme that could survive a 16-hour surgical shift, on-call nights, and hospital canteen food.",
      "We identified 3 meals he could control: morning pre-shift, post-shift dinner, and Sunday meal prep. Everything else was navigated around.",
      "Training happened 3 times per week, mostly in hospital gym windows or early mornings. 40-45 minutes. Full-body compound work.",
      "His HbA1c  the diabetes marker  dropped from 7.8 to 5.9 by month 4. His endocrinologist reduced his medication.",
      "By month 7, he was off medication entirely at his doctor's direction. His weight had come down from 100kg to 81kg.",
      "We continued. He set a personal goal: compete in a fitness event. He trained for it. He showed up. He won his age category.",
    ],
    result:
      "Dr. Ajinkya is now 75kg. His Type 2 diabetes is medically reversed. He competes in fitness events and still practices surgery  now with more energy than he had at 25.",
    quote:
      "\"Your body is the most expensive asset you own. It deserves the same precision you put into your work.\"",
    metrics: [
      { label: "Starting Weight", value: "100 kg" },
      { label: "Final Weight", value: "75 kg" },
      { label: "Lost", value: "25 kg" },
      { label: "Diabetes", value: "Reversed" },
      { label: "Medication", value: "Off completely" },
      { label: "Age", value: "30" },
    ],
  },
  {
    slug: "gaurav",
    name: "Gaurav",
    tagline: "Chronic Back Pain, Disc Herniation, and 17 Kilos  in 12 Weeks",
    stat: "92kg - 75kg",
    transformation: "17 Kilos Lost | 12 Weeks | Zero Back Pain",
    age: "37",
    occupation: "Corporate Professional",
    photo: "gaurav.PNG",
    challenge:
      "Gaurav had an MRI-confirmed L4-L5 disc herniation. Chronic back pain for 3 years. No gym in years. His physiotherapist said to avoid heavy lifting. He came to us sceptical  he didn't believe he could train at all.",
    story: [
      "Our first conversation lasted 90 minutes. I needed to understand his pain patterns, range of motion, triggers, and what his physio had said. This wasn't a standard programme.",
      "We built a completely custom lifting protocol around his spine. No deadlifts. No heavy squats. Instead: hip thrusts, cable work, machine-based leg press, upper body pulls. Everything that loaded his posterior chain without compressing the disc.",
      "Nutrition was set at 1900 kcal. Corporate life is full of client dinners and impromptu meals  we built flexibility into the approach.",
      "Week 3: He texted me saying his back pain had reduced by 60%. The controlled movement was actually rehabilitating the area, not aggravating it.",
      "Week 6: 8 kilos down. He added some light Romanian deadlifts with a belt at his request. Form was perfect. No pain.",
      "Week 12: 17 kilos lost. Back pain: gone. He walked into a regular gym on his own and did a full session  first time in 3 years.",
    ],
    result:
      "Gaurav is now active, training 3 days a week independently, and has had zero back pain episodes since completing the programme. He credits the structured, intelligent approach with both the fat loss and the rehabilitation.",
    quote:
      "\"Everyone told me I was too broken to train. They were wrong. I just needed to train smarter.\"",
    metrics: [
      { label: "Starting Weight", value: "92 kg" },
      { label: "Final Weight", value: "75 kg" },
      { label: "Lost", value: "17 kg" },
      { label: "Duration", value: "12 weeks" },
      { label: "Back Pain", value: "Eliminated" },
      { label: "Age", value: "37" },
    ],
  },
];
