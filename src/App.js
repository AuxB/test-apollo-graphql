import {
  gql,
  useQuery,
} from "@apollo/client";
import logo from './logo.svg';
import './App.css';

const LAUNCHES_DATA = gql`
  query {
    launches(limit: 5) {
      id
      launch_date_utc
      launch_success
      rocket {
        rocket_name
      }
      links {
        video_link
      }
      details
    }
  }
`;

function LaunchsData() {
  const { loading, error, data } = useQuery(LAUNCHES_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data.launches)
  return data.launches.map((launch) => (
    < div key = { launch.id } >
      <h2>{launch.rocket['rocket_name']}</h2>
      <p>
        Mission name: {launch["mission_name"]}
      </p>
      <p>
        Launch date: {launch["launch_date_utc"]}
      </p>
      <p>
        Details {launch.details}
      </p>
      <p>
        Launch success: {launch["launch_success"]}
      </p>
    </div >
  ));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LaunchsData />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
