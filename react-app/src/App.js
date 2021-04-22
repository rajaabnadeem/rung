import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import LoginForm from "./components/auth/LoginForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/session";
import Home from './components/Home'
import ArtistPage from "./components/ArtistPage";
import Player from './components/Player'
import * as songActions from './store/songs'
function App() {
  const dispatch = useDispatch()
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);


  // const artists = useSelector(state => Object.values(state.artists))
  // const {artist_id} = useParams()

  const [q, setQ] = useState({})

  useEffect(() => {
    (async() => {
      const user = await dispatch(authenticate());
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
      // const songs = await
      dispatch(songActions.getSongs())
      // setQ({...songs, currentSong: null})
      // dispatch(artistActions.getAllArtists())
      // dispatch(artistPageActions.getArtistSongs(artist_id))
    })();
  }, [setAuthenticated, dispatch]);

if (!loaded) {
    return null;
}

  return (
    <BrowserRouter>
      <NavBar
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            q={q}
            setQ={setQ}
      />
      <Switch>
        <Route path="/login"
               exact={true}
               authenticated={authenticated}
               setAuthenticated={setAuthenticated}>
          <LoginForm
               authenticated={authenticated}
               setAuthenticated={setAuthenticated}
          />
        </Route>
        {/* <Route path="/sign-up"
               exact={true}>
          <SignUpForm
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              />
        </Route> */}
          <ProtectedRoute path = {`/artists/:artist_id`}
                exact={true}
                authenticated={authenticated}
               >
            <ArtistPage
                q = {q}
                setQ = {setQ}/>
          </ProtectedRoute>
          <ProtectedRoute path="/"
                exact={true}
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
                >
            <Home
                q = {q}
                setQ = {setQ}/>
          </ProtectedRoute>
      </Switch>
      <Player
              q = {q}
              setQ = {setQ}/>
    </BrowserRouter>
  );
}

export default App;
