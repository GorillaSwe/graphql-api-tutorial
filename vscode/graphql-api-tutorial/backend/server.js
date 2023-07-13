const { ApolloServer, gql } = require("apollo-server");

const books = [
    {
        title: "ハリーポッター",
        author: "JKローリング",
    },
    {
        title: "アルプスの少女ハイジ",
        author: "シュピリ",
    }
]


const typeDefs = gql`
    type Book {
        title: String,
        author: String
    }

    type Query {
        test: [Book]
    }
`;

const resolvers = {
    Query: {
        test: () => books,
    },
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server ready at ${url}`);
});