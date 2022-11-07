import { Redirect, Route, Switch } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import Color from "./Pages/Color";
import ProdactDetails from "./Pages/ProdactDetails";
import Products from "./Pages/Products";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          {" "}
          {/* A 'Switch'-el körbe lehet burkolni a 'Route' elemeket, arra jó, hogy az útvonalak(Ruote) csak az egyik lesz egyszerre aktív. És az, amelyik elsőre illeszkedig.*/}
          <Route path="/" exact>
            <Redirect to='/welcome'></Redirect> {/* A 'Redirect' átirányításra való, ebben az esetben az alap oldalról átirányítom egyből a 'welcome' oldalra. */}
          </Route>
          <Route path="/welcome">
            {" "}
            {/* "<Route path="/" exact>" Így lehet ez a kezdőoldal. */}
            <Welcome></Welcome>
          </Route>
          <Route path="/color">
            <Color></Color>
          </Route>
          <Route path="/products" exact>
            {" "}
            {/* Ezzel azt mondjuk a Routernek, hogy postosan egyeznie kell az útvonalnak. */}
            <Products></Products>
          </Route>
          <Route path="/product-details/:productId">
            <ProdactDetails></ProdactDetails>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

