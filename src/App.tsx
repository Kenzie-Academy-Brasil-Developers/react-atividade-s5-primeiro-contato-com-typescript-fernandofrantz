import { useState } from "react";
import "./App.css";
import { Card } from "./Components/Card";
import { Input } from "./Components/Input";

interface Person {
  name: string;
  age: string;
  hobby: string;
}

function App() {
  const [list, setList] = useState<Person[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hobby, setHobby] = useState("");

  const handleSubmit = (name: string, age: string, hobby: string) => {
    const person = { name, age, hobby };
    setList([...list, person]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            type="string"
            required
          />
          <Input
            onChange={(e) => setAge(e.target.value)}
            placeholder="age"
            type="string"
            required
          />
          <Input
            onChange={(e) => setHobby(e.target.value)}
            placeholder="hobby"
            type="string"
            required
          />
          <button onClick={() => handleSubmit(name, age, hobby)}>submit</button>
        </div>

        <Card list={list} />
      </header>
    </div>
  );
}
export default App;
