import AllTransactions from "./Component/AllTransactions";
import AddTransaction from "./Component/AddTransaction";
import EditTransaction from "./Component/EditTransaction";
import NavBar from "./Component/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AddTransaction} />
        <Route exact path="/all" component={AllTransactions} />
        <Route exact path="/add" component={AddTransaction}/>
        <Route exact path="/edit/:id" component={EditTransaction} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
