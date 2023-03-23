import React from 'react';
import './App.css';

const data = require('./teams.json') as {teams:Team[]}
const allTeams = data.teams;
interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

function NameHeader() {
  return (
    <div>
      <h1>Tanner Bacon</h1>
      <h3>Mission 12</h3>
      <p>This is a React app meant to demonstrate functions and components.</p>
      <p>To do this, here is a list of all the NCAA teams participating in March Madness:</p>
    </div>
  );
}

function TeamRow({ teams }: { teams: Team[] }) {
  return (
    <div className="row">
      {teams.map((team, index) => (
        <div className="col-md-4" key={index}>
          <Team school={team.school} name={team.name} city={team.city} state={team.state} />
        </div>
      ))}
    </div>
  );
}

class Team extends React.Component<{
  school: string;
  name: string;
  city: string;
  state: string;
}>{
  render() {
    const { school, name, city, state } = this.props;

    return (
      
      <div className="card col-md-12 mb-3">
        <div className="card-body">
          <h2 className="card-title text-dark">{school}</h2>
          <h3 className="card-subtitle mb-2 text-muted">{city}, {state}</h3>
          <p className="card-text text-dark">Mascot: {name}</p>
        </div>
      </div>
      
    //   <div className="row row-cols-3 g-3">
    //     <div className="col">
    //       <div className="card h-100">
    //         <div className="card-body">
    //           <h2 className="card-title">{school}</h2>
    //           <h3 className="card-subtitle mb-2 text-muted">
    //             {city}, {state}
    //           </h3>
    //           <p className="card-text">Mascot: {name}</p>
    //         </div>
    //       </div>
    //     </div>
    // </div>
    );
  }
}

/*function TeamList() {
  return (
    <div>
      {allTeams.map((team: Team) => (
        <Team {...team} key={team.school} />
      ))}
    </div>
  );
}*/
function TeamList() {
  const rows = [];
  for (let i = 0; i < allTeams.length; i += 3) {
    rows.push(allTeams.slice(i, i + 3));
  }

  return (
    <div>
      {rows.map((row, index) => (
        <TeamRow teams={row} key={index} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameHeader />
        <TeamList />
      </header>
    </div>
  );
}

export default App;