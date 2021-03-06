import faker from 'faker';
import { Mappable } from './CustomMap';

// Installing type definition files by 'npm install @types/faker' in terminal

export class User implements Mappable{
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  color: string = 'red';

// Used parseFloat on lat and lng, because faker has them as strings and not number

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  };

  markerContent(): string {
    return `User Name: ${this.name}`;
  }

};