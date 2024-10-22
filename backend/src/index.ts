import express, { Request, Response } from "express";

// Create a new express application instance
const app = express();

// Set the network port
const port = process.env.PORT || 3000;

const cors = { origin: ["http://localhost:5173/"], default: '*' }
  
app.all('*', function(req:any, res, next) {   
    if(!req.header){
        throw new Error('Request header undefined')
    }

    const origin = cors.origin.includes(req.header('origin').toLowerCase()) ? req.headers.origin : cors.default;
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Define the root path with a greeting message
app.get("/", (_req: Request, res: Response) => {
    res.json({ message: "Welcome to the Express + TypeScript Server!" });
});

app.post("/signup", (req: Request, res: Response) => {
    res.json({ message: "account created"})
});

app.post("/login", (req: Request, res: Response) => {
    res.json({message: "logged in"})
});

app.get("/user", (req: Request, res: Response) => {
    res.json({
        user:{
            id: 1,
            username: "Filip",
            email: "filip.swacha.dev@gmail.com",
            password: "password",
            settings: {
                theme: "dark",
                language: "en"
            },
        }
    })
});

app.get("/recipes", (req: Request, res: Response) => {
    res.json({
        recipes: [
            {
                title: "Recipe 1",
                description: "Description 1",
                tags: ["sweet", "awesome", "party"],
                servings: 1,
                imgSrc: "someImageUrl",
                ingredients: [
                    ["rum", 100, "ml"],
                    ["orange juice", 100, "ml"],
                    ["banana juice", 100, "ml"],
                    ["apple", 1, ""]
                ],
            }
        ]
    });
})

app.patch("/user/:userId", (req: Request, res: Response) => {
    
});

app.delete("/user/:userId", (req: Request, res: Response) => {
    const userId = req.params.userId;
    res.json({message: `user ${userId} deleted`});
});

// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});