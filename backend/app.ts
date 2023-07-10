import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

function printRequestData(req: Request): void {
  const clientData = {
    ip: req.ip,
    hostname: req.hostname,
    protocol: req.protocol,
    method: req.method,
    headers: req.headers,
  };
  console.debug(`serving ${req.url} to ${JSON.stringify(clientData)}\n`);
}

const port = 3001;
const app = express();
const docsPath = `${process.cwd()}/docs`;

// Apply security measures
app.use(helmet());

// Apply rate limiting to prevent spam or DDoS attacks
const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100, // Limit each IP to 100 requests per minute
});
app.use(limiter);

// Endpoint to retrieve the list of filenames
app.get("/api/docs", (req: Request, res: Response) => {
  printRequestData(req);
  fs.readdir(docsPath, (err, fileNames) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to read files" });
      return;
    }

    // only return the base filename without the extension
    // and only return markdown files
    fileNames = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => fileName.replace(".md", ""));
    res.json({ fileNames });
  });
});

// Endpoint to retrieve the content of a single file
app.get("/api/docs/:basefilename", (req: Request, res: Response) => {
  const { basefilename } = req.params;
  printRequestData(req);

  const filePath = path.join(docsPath, `${basefilename}.md`);

  // Validate the filename to prevent unauthorized access
  if (!fs.existsSync(filePath)) {
    res.status(404).json({ error: "File not found" });
    return;
  }

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to read file" });
      return;
    }
    res.json({ fileContent: data });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
