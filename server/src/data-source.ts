import { DataSource } from 'typeorm';

import { config } from './config';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: config.dbPath,
    synchronize: true,
    logging: false,
    entities: [User],
});
