import AirTemperature from './models/air-temperature';
import RelativeHumidity from './models/relative-humidity';

export const resolvers = {
  Query :{
    ResourceAirTemperature: async(_, {resource}) => {
      return await AirTemperature.find({resource: resource});
    },
    AirTemperatures: async() => {
      return await AirTemperature.find().populate();
    },
    RelativeHumidities: async() => {
      return await RelativeHumidity.find().populate();
    }
  }

};