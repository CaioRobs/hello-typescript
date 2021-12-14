import React, { useEffect, useState } from "react";
import { User } from "./components/user";
import api from "./services/api";

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setusers] = useState<IUser[]>([]);

  useEffect(() => {
    api.get<IUser[]>("/users").then((response) => setusers(response.data));
  }, []);

  return (
    <div className="App">
      Hello World
      {users.map((user) => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;
