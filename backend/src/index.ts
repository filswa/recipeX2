import express, { Request, Response } from "express";

// Create a new express application instance
const app = express();

const cors = { origin: ["http://localhost:5173/"], default: '*' }
  
app.all('*', function(req:any, res, next) {   
    if(!req.header){
        throw new Error('Request header undefined')
        return;
    }
    const origin = cors.origin.includes(req.header('origin').toLowerCase()) ? req.headers.origin : cors.default;
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Set the network port
const port = process.env.PORT || 3000;

// Define the root path with a greeting message
app.get("/", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the Express + TypeScript Server!" });
});

// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});