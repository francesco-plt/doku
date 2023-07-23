import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import rateLimit from "express-rate-limit";
import helmet from "helmet";

class Server {
  private readonly port: number;
  private readonly app: express.Application;
  private readonly docsPath: string;

  constructor(port: number, docsPath: string) {
    this.port = port;
    this.app = express();
    this.docsPath = docsPath;

    this.configureSecurity();
    this.configureRateLimiting();
    this.configureRoutes();
  }

  private configureSecurity(): void {
    this.app.use(helmet());
  }

  private configureRateLimiting(): void {
    const limiter = rateLimit({
      windowMs: 60 * 1000, // 1 minute
      max: 100, // Limit each IP to 100 requests per minute
    });
    this.app.use(limiter);
  }

  private configureRoutes(): void {
    this.app.get("/api/docs", this.handleGetDocs.bind(this));
    this.app.get(
      "/api/docs/:basefilename",
      this.handleGetDocContent.bind(this)
    );
  }

  private handleGetDocs(req: Request, res: Response): void {
    this.printRequestData(req);
    fs.readdir(this.docsPath, (err, fileNames) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to read files" });
        return;
      }

      fileNames = fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => fileName.replace(".md", ""));
      res.json({ fileNames });
    });
  }

  private handleGetDocContent(req: Request, res: Response): void {
    const { basefilename } = req.params;
    this.printRequestData(req);

    const filePath = path.join(this.docsPath, `${basefilename}.md`);

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
  }

  private printRequestData(req: Request): void {
    const clientData = {
      ip: req.ip,
      hostname: req.hostname,
      protocol: req.protocol,
      method: req.method,
      headers: req.headers,
    };
    console.debug(`serving ${req.url} to ${JSON.stringify(clientData)}\n`);
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

const port = 3001;
const docsPath = `${process.cwd()}/docs`;

const server = new Server(port, docsPath);
server.start();
