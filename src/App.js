import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
const App = () => {
  return(
<div className='App'>
<div className='container bg-white p-4 mt-5'>
<h1>My Todo List</h1>
<AddTask/>
<ListTask/>
</div>
</div>
  );
}

export default App;