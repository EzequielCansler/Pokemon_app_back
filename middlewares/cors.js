import cors from "cors";
// cross origin resource sharing

const ACCEPTED_ORIGINS = ["http://localhost:1234", "http://localhost:8080"];

export const corsMiddleware = ({ ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (ACCEPTED_ORIGINS.includes(origin)) {
        return callback(null, true);
      }
      if (!origin) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
  });
