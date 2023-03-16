import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Coffee } from './entities/coffees.entity';
import { Model } from 'mongoose';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { PaginationQuearyDto } from 'src/common/dto/pagination-queary.dto/pagination-queary.dto';
@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [];

  constructor(
    @InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>,
  ) {}

  findAll(paginationQuery: PaginationQuearyDto) {
    const { limit, offset } = paginationQuery;
    return this.coffeeModel.find().skip(offset).limit(limit).exec();
  }
  async findOne(id: string) {
    const coffee = await this.coffeeModel.findOne({ _id: id }).exec();
    console.log(coffee);

    if (!coffee) {
      throw new NotFoundException(`Coffee with ${id} is not found`);
    }
    return coffee;
  }

  create(coffeeDto: CreateCoffeeDto) {
    const coffee = new this.coffeeModel(coffeeDto);
    return coffee.save();
  }

  async update(id: string, coffeeDto: UpdateCoffeeDto) {
    const existingCoffee = await this.coffeeModel
      .findByIdAndUpdate(
        {
          _id: id,
        },
        { $set: coffeeDto },
        { new: true },
      )
      .exec();

    if (!existingCoffee) {
      throw new NotFoundException(`Coffee with ${id} is not found!`);
    }

    return existingCoffee;
  }

  async remove(id: string) {
    const coffee = await this.findOne(id);

    if (!coffee) {
      throw new NotFoundException(`Coffee with #${id} not found!`);
    }
    return coffee.deleteOne();
  }
}
