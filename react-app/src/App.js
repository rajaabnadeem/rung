import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./store/session";
import Home from './components/Home'
import ArtistPage from "./components/ArtistPage";
import * as songActions from './store/songs'
import * as artistActions from './store/artists'
import * as artistPageActions from './store/artists'

function App() {
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await dispatch(authenticate());
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
      dispatch(songActions.getSongs())
      dispatch(artistActions.getArtists())
      dispatch(artistPageActions.getArtistSongs())

    })();
  }, [setAuthenticated, dispatch]);

  // useEffect(async () => {
  //   await dispatch(getSongs())
  // }, [])

if (!loaded) {
    return null;
}

  return (
    <BrowserRouter>
      <NavBar
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
      />
      <Switch>
        <Route path="/login" exact={true}
             authenticated={authenticated}
             setAuthenticated={setAuthenticated}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/artists' exact={true} authenticated={authenticated}>
          <ArtistPage />
          </ProtectedRoute>
        <ProtectedRoute path="/" exact={true} authenticated={authenticated} setAuthenticated={setAuthenticated}>
          <Home />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
