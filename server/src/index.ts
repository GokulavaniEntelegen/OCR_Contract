import express, { NextFunction, Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware example
app.use(express.json());

// Typed route handler
app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello, world!' });
});

// Error handler with types
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
