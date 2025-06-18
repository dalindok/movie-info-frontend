import { Route, Routes } from "react-router-dom";
import Action from "../pages/ActionPage";
import Adventure from "../pages/AdventurePage";
import Home from "../pages/HomePage";
import MoveiDetail from "../pages/MovieDetailPage";
import Animation from "../pages/AnimationPage";
import AccountPage from "../pages/AccountPage";
import WatchlistPage from "../pages/WatchlistPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import Upcoming from "../pages/UpComingmovie";
import Popular from "../pages/PopularMovie";

const RouteNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/action" element={<Action />} />
      <Route path="/adventure" element={<Adventure />} />
      <Route path="/animation" element={<Animation />} />
      <Route path="/movie/:id" element={<MoveiDetail />} />
      {/* <Route path="/accoute" element={<Home />} /> */}
      <Route path="/account" element={<AccountPage />} />
      <Route path="/watchlist" element={<WatchlistPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/upcoming" element={<Upcoming />} />
      <Route path="/popular" element={<Popular />} />
      {/* <Route path="/search" element={<SearchPage />} /> */}
    </Routes>
  );
};

export default RouteNavigation;
