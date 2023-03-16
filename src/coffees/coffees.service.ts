import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Coffee } from './entities/coffees.entity';
import { Model } from 'mongoose';
@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [];

  constructor(
    @InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>,
  ) {}

  findAll() {
    return this.coffeeModel.find().exec();
  }
  async findOne(id: string) {
    const coffee = await this.coffeeModel.findOne({ _id: id }).exec();

    if (!Coffee) {
      throw new NotFoundException(`Coffee with ${id} is not found`);
    }
    return coffee;
  }

  create(coffeeDto: any) {
    const coffee = new this.coffeeModel(coffeeDto);
    return coffee.save();
  }
}
