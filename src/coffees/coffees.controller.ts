import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  findAll() {
    return this.coffeeService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeeService.findOne(id);
  }
  @Post()
  create(@Body() createCoffee: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffee);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffee: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffee);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
