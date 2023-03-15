import { GraphQLScalarType } from 'graphql'
import GraphQLJSON from 'graphql-type-json'
import { Kind } from 'graphql/language'

export const resolverMap = {
	Date: new GraphQLScalarType({
		name: 'Date',
		description: 'Date custom scalar type',
		serialize(value) {
			if (value instanceof Date) {
				return value.getTime() // value from the client
			}
			throw Error('GraphQL Date Scalar serializer expected a `Date` object')
		},
		parseValue(value) {
			if (typeof value === 'number') {
				return new Date(value) // value send to the client
			}
			throw new Error('GraphQL Date Scalar parser expected a `number`')
		},
		parseLiteral(ast) {
			if (ast.kind === Kind.INT) {
				// ast value is always in string format
				return new Date(parseInt(ast.value, 10))
			}
			// Invalid hard-coded value (not an integer)
			return null
		},
	}),
	JSON: GraphQLJSON,
}
