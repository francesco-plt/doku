"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var express_rate_limit_1 = __importDefault(require("express-rate-limit"));
var helmet_1 = __importDefault(require("helmet"));
function printRequestData(req) {
    var clientData = {
        ip: req.ip,
        hostname: req.hostname,
        protocol: req.protocol,
        method: req.method,
        headers: req.headers,
    };
    console.debug("serving ".concat(req.url, " to ").concat(JSON.stringify(clientData), "\n"));
}
var port = 3001;
var app = (0, express_1.default)();
var docsPath = "".concat(process.cwd(), "/docs");
// Apply security measures
app.use((0, helmet_1.default)());
// Apply rate limiting to prevent spam or DDoS attacks
var limiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 1000,
    max: 100, // Limit each IP to 100 requests per minute
});
app.use(limiter);
// Endpoint to retrieve the list of filenames
app.get("/api/docs", function (req, res) {
    printRequestData(req);
    fs_1.default.readdir(docsPath, function (err, fileNames) {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to read files" });
            return;
        }
        // only return the base filename without the extension
        // and only return markdown files
        fileNames = fileNames
            .filter(function (fileName) { return fileName.endsWith(".md"); })
            .map(function (fileName) { return fileName.replace(".md", ""); });
        res.json({ fileNames: fileNames });
    });
});
// Endpoint to retrieve the content of a single file
app.get("/api/docs/:basefilename", function (req, res) {
    var basefilename = req.params.basefilename;
    printRequestData(req);
    var filePath = path_1.default.join(docsPath, "".concat(basefilename, ".md"));
    // Validate the filename to prevent unauthorized access
    if (!fs_1.default.existsSync(filePath)) {
        res.status(404).json({ error: "File not found" });
        return;
    }
    fs_1.default.readFile(filePath, "utf-8", function (err, data) {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Failed to read file" });
            return;
        }
        res.json({ fileContent: data });
    });
});
// Start the server
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
