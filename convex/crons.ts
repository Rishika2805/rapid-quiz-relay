import { cronJobs } from "convex/server";
import { internal } from "./_generated/api";

const crons = cronJobs();

// Run the deleteOldQuizzes mutation every day
crons.daily(
  "delete old quizzes",
  { hourUTC: 0, minuteUTC: 0 }, // Run at midnight UTC
  internal.quizzes.deleteOldQuizzes
);

export default crons;
