import axios from "axios";
import winston from "winston";

const logger = winston.createLogger({
  level: "error",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports: [new winston.transports.File({ filename: "error.log" })],
});

// Add console transport if not in production
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

// List of fallback cat facts
const fallbackCatFacts = [
  "Cats sleep 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats have five toes on their front paws, but only four on their back paws.",
  "Cats can rotate their ears 180 degrees.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats have a third eyelid called a nictitating membrane.",
  "A cat's nose print is unique, much like a human fingerprint.",
  "Cats can make over 100 different sounds, while dogs can only make about 10.",
];

export const getCatFact = async () => {
  try {
    const response = await axios.get<{ fact: string; length: number }>(
      "https://catfact.ninja/fact",
      { timeout: 5000 }
    );

    return response.data.fact;
  } catch (error) {
    // Log the error with winston
    logger.error("Failed to fetch cat fact", {
      error: error instanceof Error ? error.message : error,
    });

    // Return a random cat fact as fallback
    const randIndex = Math.floor(Math.random() * fallbackCatFacts.length);
    return fallbackCatFacts[randIndex];
  }
};
