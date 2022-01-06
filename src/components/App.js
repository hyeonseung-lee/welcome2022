import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import firebase from "fbase";
import { authService } from "../fbase";

function App() {
  const [userObj, setUserObj] = useState(null);
  // reflect the change on the display.
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
        });
      } else {
        setUserObj(null);
      }
    });
  }, []);
  return (
    <div>
      <AppRouter userObj={userObj} isLoggedIn={Boolean(userObj)} />
    </div>
  );
}

export default App;
