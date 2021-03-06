const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  scalar Date

  type Booking {
    id: ID
    event: Event!
    user: User!
    createdAt: Date!
    updatedAt: Date!
  }

  type Event {
    id: ID!
    title: String!
    description: String!
    price: Float!
    date: Date!
    time: String!
    creator: User!
    createdAt: Date!
    updatedAt: Date!
  }
  
  type Auth {
    pseudo: String!
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  input EventInput {
    title: String!
    description: String!
    price: Float!
    date: Date!
    time: String!
  }

  type Query {
    event(id: ID!): Event
    events: [Event!]!
    bookings: [Booking!]!
    me: User!
  }

  type User {
    id: ID!
    email: String!
    pseudo: String!
    createdEvents: [Event!]
    createdAt: Date!
    updatedAt: Date!
  }

  input UserInput {
    email: String!
    password: String!
    pseudo: String!
  }

  type Mutation {
    createEvent(EventInput: EventInput!): Event
    removeEvent(id: ID!): Event!
    createUser(UserInput: UserInput!): User
    login(pseudo: String!, password: String!): Auth!
    bookEvent(eventID: ID!): Booking!
    cancelBooking(bookingID: ID!): Event!
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
