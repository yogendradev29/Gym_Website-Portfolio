360 Degree Fitness Club Website
A modern, responsive frontend website for 360 Degree Fitness Club, a premium gym and fitness studio located in Kanakpura, Jhotwara, Jaipur.

The site is built as a single-page landing website with a high-energy fitness aesthetic, strong call-to-action buttons, WhatsApp enquiry links, Google Maps directions, pricing cards, gallery sections, and a functional BMI calculator.

Live Preview
Run locally and open:

http://localhost:4173
Features
Sticky dark glassmorphism navbar
High-impact hero section with gym background imagery
Program cards for strength, hypertrophy, and nutrition guidance
Functional BMI calculator using vanilla JavaScript
WhatsApp CTA buttons with pre-filled messages
Floating WhatsApp chat button
Pricing cards for monthly, quarterly, and yearly plans
Trainer and gym gallery grid
Google Maps directions button and embedded map
Hypothetical phone number and Gmail contact links
Mobile-first responsive layout
Smooth scrolling navigation
Fade-in animations on scroll
Neon hover and lift effects
Tech Stack
HTML5
Tailwind CSS via CDN
Vanilla JavaScript
Google Fonts
Google Maps embed
WhatsApp deep links
Project Structure
360-fitness-gym/
├── index.html
├── README.md
├── script.js
└── styles.css
The active website is contained in index.html. The older script.js and styles.css files are not required by the current single-file build.

Getting Started
Clone the repository:

git clone https://github.com/your-username/360-fitness-gym.git
cd 360-fitness-gym
Start a local server:

python -m http.server 4173
Open in your browser:

http://localhost:4173
Customization
Update the contact details inside index.html:

const gymPhoneDisplay = "+91 98765 43210";
const gymPhoneHref = "+919876543210";
const gymEmail = "360degreefitnessclub@gmail.com";
const whatsappNumber = "919876543210";
Update pricing directly in the pricing section:

₹1,499
₹3,999
₹13,999
Update the Google Maps destination:

https://www.google.com/maps/dir/?api=1&destination=360%20Degree%20Fitness%20Club%2C%20Kanakpura%2C%20Jhotwara%2C%20Jaipur%2C%20Rajasthan
BMI Calculator
The BMI calculator accepts:

Height in centimeters
Weight in kilograms
Formula used:

BMI = weightKg / (heightM * heightM)
After calculation, the result section displays the BMI category and a WhatsApp button for a custom plan enquiry.

Deployment
This project can be deployed on any static hosting service:

GitHub Pages
Netlify
Vercel
Cloudflare Pages
For GitHub Pages:

Push the repository to GitHub.
Go to repository Settings.
Open Pages.
Select the branch and root folder.
Save and wait for the deployment URL.
Notes
Tailwind CSS is loaded via CDN for simplicity.
For a larger production project, consider installing Tailwind with a build step.
Replace all hypothetical contact details with official gym information before publishing.
