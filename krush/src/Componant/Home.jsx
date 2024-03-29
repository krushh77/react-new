import { useContext } from "react";
import { MyCounterContext } from "./contex/Countercontexxxx";
import Navbar from "./global/Navbar";

function Home() {
  const { counter, Increment } = useContext(MyCounterContext)
    return (
        <div>

            <h1>home page</h1>
            <h2>counter : {counter}</h2>
            <button onClick={Increment}>+</button>
        </div>
    )
}

export default Home;