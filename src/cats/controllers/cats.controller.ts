import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { CreateCatDto } from "src/cats/dtos/create-cat.dto";
import { UpdateCatDto } from "src/cats/dtos/update-cat.dto";
import { Cat } from "../interfaces/cat.interface";
import { CatsService } from "../services/cats.service";

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
        this.catsService.create(createCatDto);
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return `This action returns one cat by id ${id}`;
    // }

    @Get()
    async findAll(@Query() query: any): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    // @Put(':id')
    // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    //     return updateCatDto;
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return `This action remove one cat by id ${id}`;
    // }
}