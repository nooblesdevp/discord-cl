import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.scss";
import Chat from "./Component/Chat/Chat";
import Login from "./Component/Login/Login";
import Sidebar from "./Component/Sidebar/Sidebar";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase/firebase";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user yoo", authUser);
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            displayName: authUser.displayName,
            email: authUser.email,
            photo: authUser.photoURL,
          })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    // BEM convention
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
