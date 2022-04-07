import logo from "./logo.svg";
import "./App.css";

import { useEffect } from "react";

import { FooServicePromiseClient } from "@srikrsna-buf/grpc/foo/v1/foo_grpc_web_pb";
import * as foo_v1_pb from "@srikrsna-buf/base/foo/v1/foo_pb";

function App() {
  useEffect(async () => {
    const client = new FooServicePromiseClient("http://localhost:3000");
    console.log("created client");
    const response = await client.getFoo(new foo_v1_pb.GetFooRequest());
    console.log(response);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
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
