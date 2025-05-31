import 'reflect-metadata';

import { createExpressServer } from 'routing-controllers';

import { config } from './config';
import { UserController } from './controllers/UserController';
import { AppDataSource } from './data-source';

async function startServer() {
    try {
        await AppDataSource.initialize();
        console.log('💽 Connected to SQLite database.');

        const app = createExpressServer({
            controllers: [UserController],
            cors: true,
        });

        app.listen(config.port, () => {
            console.log(`🚀 Server running at http://localhost:${config.port}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
    }
}

startServer();
