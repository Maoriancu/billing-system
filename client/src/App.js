import AllTransactions from "./Component/AllTransactions/AllTransactions";
import AddTransaction from "./Component/AddTransaction/AddTransaction";
import EditTransaction from "./Component/EditTransactions/EditTransaction";
import NavBar from "./Component/NavBar/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={AllTransactions} />
        <Route exact path="/all" component={AllTransactions} />
        <Route exact path="/add" component={AddTransaction}/>
        <Route exact path="/edit/:id" component={EditTransaction} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
