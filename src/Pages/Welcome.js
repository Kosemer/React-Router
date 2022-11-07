import { Fragment } from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <Fragment>
      <h1>Welcome Page</h1>
      <Route path="/welcome/new-user"> {/*Beágyazott útvonal */}
        <p>Welcome, new user!</p>
      </Route>
    </Fragment>
  );
};

export default Welcome;
