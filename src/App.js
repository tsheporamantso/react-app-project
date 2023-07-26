import Age from "./components/Age";
import Names from "./components/Names";
import Job from "./components/User";

function App() {
  return (
    <div className="App">
      <Job salary={90000} position=" Senior SDE" company=" Amazon"/>
      <Job salary={12000} position=" Junior SDE" company=" Google"/>
      <Job salary={10000} position=" Project Manager" company=" Netflix"/>
      <Age />
      <Names />
    </div>
  );
}

export default App;
