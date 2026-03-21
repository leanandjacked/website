@AGENTS.md

# Lean & Jacked  Fat Loss Blueprint Sales Page

## Project Overview
This is the official landing page for the **Lean & Jacked Fat Loss Blueprint** by Zaid. It is a standalone HTML sales page (no framework) for a ₹999 digital fat loss guide targeted at Indian students and beginners.

**Live file:** `index.html` (single-file standalone HTML  no build step required)

---

## Brand Identity

### Colors
| Variable | Hex | Usage |
|---|---|---|
| `--orange` | `#FF6B00` | Primary CTA, highlights, accents |
| `--orange-light` | `#FF8C00` | Hover states |
| `--black` | `#0A0A0A` | Primary background |
| `--dark` | `#111111` | Secondary background |
| `--dark2` | `#1A1A1A` | Alternating section background |
| `--white` | `#FFFFFF` | Text, primary |
| `--grey` | `#AAAAAA` | Secondary text, descriptions |
| `--red` | `#D62828` | Pain point borders, "not for you" accents |

### Typography
- **Headlines / Logo**: `Bebas Neue` (Google Fonts)  all caps, wide tracking
- **Body / Buttons**: `Montserrat`  400 / 600 / 700 / 900 weights
- **Supporting**: `Inter`  400 / 500 weights

### Design Language
- Dark mode throughout, no light sections
- Orange CTAs on dark backgrounds, black CTAs on orange backgrounds
- `Bebas Neue` for all section headers  large, bold, dramatic
- 680px max content width with 20px horizontal padding
- Border-left accents (orange or red) on cards for visual hierarchy
- Sticky bottom CTA bar always visible

---

## Page Structure (Top to Bottom)

1. **Sticky CTA Bar**  fixed bottom, always visible, "Get Access →"
2. **Launch Banner**  orange strip, "Launch Price: ₹999  Limited Time"
3. **Logo Bar**  "Lean & Jacked by Zaid"
4. **Hero**  Hook headline about engineering student losing 36kg, before/after image placeholder, CTA
5. **Pain Section** (`#dark2`)  4 pain points with red left-border cards
6. **Solution Section**  Introduces "The Lean & Jacked Fat Loss Blueprint", tags, CTA
7. **What's Inside** (`#dark2`)  5 deliverables with orange checkmark circles
8. **Social Proof**  4 client stories (Meet, Kabir, Dr. Ajinkya, Gaurav) with orange left-border cards
9. **Is This For You?** (`#dark2`)  Green "yes" box, Red "no" box
10. **FAQ**  4 questions
11. **Price / Buy** (`#buy`)  Orange background, ₹999 large, Razorpay payment button, 7-day guarantee
12. **Who Is Lean & Jacked?** (`#dark2`)  Community storytelling section, 4 client cards + orange final CTA box
13. **Competition Proof**  3 stats grid (0 steroids, 3x/week, 45min), comp story
14. **Meet Zaid (Coach)** (`#dark2`)  Coach bio with image placeholder
15. **Final CTA** (`#dark2`)  Last buy push with guarantee
16. **1:1 Coaching Upsell**  ₹27k / ₹45k coaching prices, booking link
17. **Footer**  Logo, copyright, links

---

## Key Content Details

### The Product
- **Name**: Lean & Jacked Fat Loss Blueprint
- **Price**: ₹999 (launch price)
- **Guarantee**: 7-day money-back, no questions asked
- **Payment**: Razorpay (UPI, Card, Net Banking, Wallets)
- **Delivery**: Instant digital download after payment

### What's Included
1. Calorie Calculator (personalized)
2. 3 Done-For-You Indian Meal Plans (1600 / 1800 / 2000 kcal, veg + non-veg)
3. 8-Week HIT Training Program (gym + home versions)
4. Beginner Bodyweight Program (zero equipment)
5. Bloodwork Basics Guide  **Exclusive** (5 blood markers to check)

### Client Transformations
| Client | Before → After | Timeframe | Key Note |
|---|---|---|---|
| Meet | 110kg → 74kg | 8 months | Engineering student, 12hr study days |
| Kabir | 114kg → 79kg | 7 months | Prediabetes reversed |
| Dr. Ajinkya | 100kg → 75kg |  | Type 2 diabetes reversed, age 30 |
| Gaurav | 92kg → 75kg | 12 weeks | Disc herniation, zero back pain after |

### Coach  Zaid
- Ex-engineering student, bullied in college
- Certified personal trainer
- Coached 100+ clients in person
- 50+ online clients (students, surgeons, corporates)
- Competed on stage (40+ kg transformation category), natural

### 1:1 Coaching Pricing
- ₹27,000 / 3 months
- ₹45,000 / 6 months (saves ₹9,000)
- Free 15-min "Fat Loss Diagnosis Call" via Calendly

---

## Payment Integration (TODO)

The `#rzp-button` anchor currently has `href="#"`. To activate payment:

1. Log in to [razorpay.com](https://razorpay.com)
2. Go to **Payment Links → Create Link**
3. Set amount to ₹999, product name: "Lean & Jacked Fat Loss Blueprint"
4. Copy the generated payment link URL
5. Replace `href="#"` on `#rzp-button` with the Razorpay payment link
6. Set up redirect after payment to the Google Drive PDF download link

---

## Images Required (Placeholders in Code)

All `*-img-placeholder` divs need real photos:

| Placeholder | What to Insert |
|---|---|
| Hero image | Meet's before/after side-by-side photo |
| Meet proof card | Meet's before/after transformation photo |
| Kabir proof card | Kabir's before/after transformation photo |
| Dr. Ajinkya proof card | Ajinkya's before/after photo |
| Gaurav proof card | Gaurav's before/after photo |
| Competition section | Zaid's competition stage photo |
| Coach section | Zaid's portrait  dark background, tank top |

To add an image, replace the placeholder `div` with:
```html
<img src="path/to/image.jpg" alt="Description" style="width: 100%; border-radius: 8px; margin-bottom: 12px;">
```

---

## Development Notes

- **No build step needed.** Edit `index.html` directly and open in browser.
- **No external JS dependencies.** Pure HTML/CSS only.
- All internal links use `#buy` anchor for the purchase section.
- The sticky CTA is always visible  great for conversion.
- All `href="https://calendly.com/YOURLINKHERE"` links should be updated with Zaid's actual Calendly booking URL.
- Footer links (`Privacy Policy`, `Refund Policy`, `Contact`) are `href="#"`  create separate pages if needed.
