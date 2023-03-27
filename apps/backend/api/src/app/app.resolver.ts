import { GraphQLScalarType } from 'graphql'
import GraphQLJSON from 'graphql-type-json'
import { Kind } from 'graphql/language'

export const resolverMap = {
	// serialize dates in graphql queries and mutations
	Date: new GraphQLScalarType({
		name: 'Date',
		description: 'Date custom scalar type',
		// checks if the value is an instance of Date and returns the time in milliseconds since January 1, 1970
		serialize(value) {
			if (value instanceof Date) {
				return value.toISOString() // value from the client
			}
			throw Error('GraphQL Date Scalar serializer expected a `Date` object')
		},
		// check value is number
		parseValue(value) {
			if (typeof value === 'number') {
				return new Date(value) // value send to the client
			}
			throw new Error('GraphQL Date Scalar parser expected a `number`')
		},
		// checks AST (Abstract Syntax Tree) value is an integer
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
