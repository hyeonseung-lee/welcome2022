import React from "react";
import {
  HashRouter as Router,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { Home } from "router/Home";
import { Main } from "router/Main";
import { GiveStar } from "router/GiveStar";
import { Auth } from "router/Auth";
import { AboutUs } from "router/AboutUs";

const AppRouter = ({ userObj, isLoggedIn }) => {
  let { id } = useParams();

  return (
    <Router base="/">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route
          path="/home/:id"
          element={<Home userObj={userObj} isLoggedIn={isLoggedIn} />}
        />
        <Route path="/:id/give_star" element={<GiveStar userObj={userObj} />} />
        <Route
          exact
          path="/aboutUs"
          element={<AboutUs userObj={userObj} isLoggedIn={isLoggedIn} />}
        />

        {isLoggedIn ? (
          <>
            {/* <Route  path="*" element={<Navigate to="/" />} /> */}
            <Route
              path="*"
              element={
                <Navigate to={id ? `/home/${id}` : `/home/${userObj.uid}`} />
              }
            />
          </>
        ) : (
          <Route exact path="/auth" element={<Auth userObj={userObj} />} />
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
