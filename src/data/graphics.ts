import openDay from "@/assets/graphics/appleton-open-day.jpg";
import eidMubarak from "@/assets/graphics/appleton-eid-mubarak.jpg";
import consistency from "@/assets/graphics/appleton-consistency.jpg";
import unlockingPotential from "@/assets/graphics/appleton-unlocking-potential.jpg";
import empoweringMinds from "@/assets/graphics/appleton-empowering-minds.jpg";
import newYear from "@/assets/graphics/appleton-new-year-2026.jpg";
import welcomeBackStudents from "@/assets/graphics/appleton-welcome-back-students.jpg";
import welcomeBackStaff from "@/assets/graphics/appleton-welcome-back-staff.jpg";
import admissions from "@/assets/graphics/appleton-2026-admissions.jpg";
import happyHolidays from "@/assets/graphics/appleton-happy-holidays.jpg";
import openDayKilimani1 from "@/assets/graphics/appleton-open-day-kilimani-1.png";
import openDayKilimani2 from "@/assets/graphics/appleton-open-day-kilimani-2.png";
import openDayKilimani3 from "@/assets/graphics/appleton-open-day-kilimani-3.png";
import openDayStory from "@/assets/graphics/appleton-open-day-story.png";
import openDaySquare from "@/assets/graphics/appleton-open-day-square.png";
import openDayInvite from "@/assets/graphics/appleton-open-day-invite.jpg";
import ahadiWelcome from "@/assets/graphics/ahadi-welcome-back.png";
import cityArtFair from "@/assets/graphics/city-art-fair.jpg";
import foodFestival from "@/assets/graphics/local-food-festival.jpg";
import realEstate from "@/assets/graphics/real-estate-open-house.jpg";

export type GraphicItem = {
  image: string;
  title: string;
  client: string;
  category: string;
};

export const graphics: GraphicItem[] = [
  // Appleton Schools
  { image: openDay, title: "Open Day Countdown", client: "Appleton Schools", category: "Event Promo" },
  { image: openDaySquare, title: "Join Our Open Day", client: "Appleton Schools", category: "Event Promo" },
  { image: openDayStory, title: "Explore Our Learning Spaces (Story)", client: "Appleton Schools", category: "Social Story" },
  { image: openDayKilimani1, title: "Open Day — Nurturing Spaces", client: "Appleton Schools", category: "Event Promo" },
  { image: openDayKilimani2, title: "Open Day Countdown — Classroom", client: "Appleton Schools", category: "Event Promo" },
  { image: openDayKilimani3, title: "Open Day Countdown — Cultural", client: "Appleton Schools", category: "Event Promo" },
  { image: openDayInvite, title: "Open Day 2025 Invite", client: "Appleton Schools", category: "Invitation" },
  { image: admissions, title: "2026 Admissions Campaign", client: "Appleton Schools", category: "Marketing" },
  { image: empoweringMinds, title: "Empowering Minds", client: "Appleton Schools", category: "Brand Poster" },
  { image: unlockingPotential, title: "Unlocking Every Child's Potential", client: "Appleton Schools", category: "Brand Poster" },
  { image: consistency, title: "Consistency Builds Confident Children", client: "Appleton Schools", category: "Educational" },
  { image: welcomeBackStudents, title: "Welcome Back Students", client: "Appleton Schools", category: "Announcement" },
  { image: welcomeBackStaff, title: "Welcome Back Staff", client: "Appleton Schools", category: "Announcement" },
  { image: newYear, title: "Happy New Year 2026", client: "Appleton Schools", category: "Seasonal" },
  { image: happyHolidays, title: "Happy Holidays", client: "Appleton Schools", category: "Seasonal" },
  { image: eidMubarak, title: "Eid Mubarak", client: "Appleton Schools", category: "Seasonal" },
  // Other clients & personal work
  { image: ahadiWelcome, title: "Welcome Back Learners", client: "Ahadi Schools", category: "Education Flyer" },
  { image: cityArtFair, title: "City Art Fair 2025", client: "Personal Project", category: "Event Poster" },
  { image: foodFestival, title: "Taste the City Food Festival", client: "Personal Project", category: "Event Poster" },
  { image: realEstate, title: "Open House — Dream Home", client: "Real Estate", category: "Property Flyer" },
];
