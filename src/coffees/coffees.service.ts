import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Coffee } from './entities/coffees.entity';
import { Model } from 'mongoose';
@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [];

  constructor(
    @InjectModel(Coffee.name) private readonly coffeeModel: Model<Coffee>,
  ) {}
}
