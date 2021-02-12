import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateCatDto } from "../dtos/create-cat.dto";
import { ResponseDto } from "../dtos/response.dto";
import { UpdateCatDto } from "../dtos/update-cat.dto";
import { CatsService } from "../services/cats.service";

@Controller('cats')
@ApiTags('cats')
export class CatsController {
    constructor(
        private readonly catsService: CatsService
    ) { }

    @Post()
    async create(@Body() cat: CreateCatDto) {
        const newCat = await this.catsService.create(cat);

        return new ResponseDto({
            success: true,
            message: 'Cat cadastrado com sucesso!',
            data: newCat
        });
    }

    @Get()
    async findAll() {
        const cats = await this.catsService.findAll();

        return new ResponseDto({
            success: true,
            message: 'Lista de cats!',
            data: cats
        });
    }

    @Get('por-raca')
    async findByBreed(@Query('breed') breed: string) {
        const cats = await this.catsService.findByBreed(breed);

        return new ResponseDto({
            success: true,
            message: `Cats da raça (${breed})`,
            data: cats
        });
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const cat = await this.catsService.findById(id);

        return new ResponseDto({
            success: true,
            message: 'Cat por id!',
            data: cat
        });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() bodyCat: UpdateCatDto) {
        await this.catsService.update(id, bodyCat);
        const catAfterUpdate = await this.catsService.findById(id);

        return new ResponseDto({
            success: true,
            message: 'Update cat!',
            data: catAfterUpdate
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.catsService.delete(id);

        return new ResponseDto({
            success: true,
            message: 'Update cat!',
            data: null
        });
    }
}