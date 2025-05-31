import { Body, Get, JsonController, Param, Post } from 'routing-controllers';

import { AppDataSource } from '../data-source';
import { User } from '../entities/User';

@JsonController('/users')
export class UserController {
    private userRepository = AppDataSource.getRepository(User);

    @Get()
    async getAll() {
        return await this.userRepository.find();
    }

    @Get('/:id')
    async getOne(@Param('id') id: number) {
        return await this.userRepository.findOneBy({ id });
    }

    @Post()
    async create(@Body() user: User) {
        return await this.userRepository.save(user);
    }
}
