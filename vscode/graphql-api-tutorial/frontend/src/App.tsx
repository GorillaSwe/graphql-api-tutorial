import { gql, useQuery } from "@apollo/client";
import './App.css';

const BOOKS = gql`
  query {
    test {
      author
      title
    }
  }
`;

console.log(BOOKS);

function Books() {
  const { loading, error, data } = useQuery(BOOKS);
  if (loading) return <p>loading ・・・</p>
  if (error) return <p>error</p>

  return data.test.map(({ title, author }) => (
    <div key={title}>
      <p>
        {author} : {title}
      </p>
    </div>
  ));
}

function App() {
  return (
    <div className="App">
      <h2>GraphQL Client</h2>
      <Books />
    </div>
  )
}

export default App
