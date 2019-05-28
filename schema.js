import {makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
type AirTemperature{
    id: ID
    value: Int!
    date: String
    resource: String
    dataStorage: String
    syncedAt: String
}

type RelativeHumidity{
    id: ID
    value: Int!
    date: String
    resource: String
    dataStorage: String
    syncedAt: String
}

type Query {
    ResourceAirTemperature(resource: String): [AirTemperature]
    AirTemperatures: [AirTemperature]
    RelativeHumidities: [RelativeHumidity]
  }


`;
const schema = makeExecutableSchema({typeDefs, resolvers})

export default schema;