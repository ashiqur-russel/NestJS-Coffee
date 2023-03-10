import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffees.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Vanilla Roast',
      brand: 'Vanilla Brew',
      flavors: ['Coca', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }
  findOne(id: string) {
    return this.coffees.find((item) => item.id === +id);
  }
  create(body: any) {
    return this.coffees.push(body);
  }

  update(id: string, updateCoffeeDto: any) {
    //const existingCoffe = this.coffees.find((item) => item.id === +id);
    const existingCoffee = this.findOne(id);

    if (existingCoffee) {
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
