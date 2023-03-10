import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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

  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return `this method update #${id} coffee`;
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return `this method delete #${id} coffee`;
  }
}
