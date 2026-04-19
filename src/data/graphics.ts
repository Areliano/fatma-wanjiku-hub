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

export type GraphicItem = {
  image: string;
  title: string;
  client: string;
  category: string;
};

export const graphics: GraphicItem[] = [
  { image: openDay, title: "Open Day Countdown", client: "Appleton Schools", category: "Event Promo" },
  { image: admissions, title: "2026 Admissions Campaign", client: "Appleton Schools", category: "Marketing" },
  { image: empoweringMinds, title: "Empowering Minds", client: "Appleton Schools", category: "Brand Poster" },
  { image: unlockingPotential, title: "Unlocking Every Child's Potential", client: "Appleton Schools", category: "Brand Poster" },
  { image: consistency, title: "Consistency Builds Confident Children", client: "Appleton Schools", category: "Educational" },
  { image: welcomeBackStudents, title: "Welcome Back Students", client: "Appleton Schools", category: "Announcement" },
  { image: welcomeBackStaff, title: "Welcome Back Staff", client: "Appleton Schools", category: "Announcement" },
  { image: newYear, title: "Happy New Year 2026", client: "Appleton Schools", category: "Seasonal" },
  { image: happyHolidays, title: "Happy Holidays", client: "Appleton Schools", category: "Seasonal" },
  { image: eidMubarak, title: "Eid Mubarak", client: "Appleton Schools", category: "Seasonal" },
];
