import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavors')
  findAll() {
    return 'Give me all coffees';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Please return #${id} coffee`;
  }
}
