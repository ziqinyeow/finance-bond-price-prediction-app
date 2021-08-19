import { uploadFiles } from "@/lib/storage";
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "POST", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  if (req.method === "POST") {
    if (!req.body.files) {
      return res.json({ message: "No file found" });
    } else {
      try {
        const data = await uploadFiles(req.body.files);
        return res.json({ message: data });
      } catch (error) {
        return res.json({ message: error.message });
      }
    }
  } else {
    res.json({ message: "Invalid" });
  }
}

export default handler;
