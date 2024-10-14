import { gql, useQuery } from "@apollo/client";

const query = gql`
  query getAllTodos {
    getTodos {
      id
      title
      completed
      user {
        id
        name
        phone
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);

  if (loading) return <h1>Loading data...</h1>;
  return (
    <>
      <div>GraphQL</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* {JSON.stringify(data)} */}
        <table>
          <tbody>
            {data.getTodos.map(todo => <tr key={todo.id}>
              <td>{todo?.title}</td>
              <td>{todo?.user?.name}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
