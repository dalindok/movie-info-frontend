import Watchlist from "../components/account/Watchlist";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const WatchlistPage = () => {
  return (
    <div className="bg-black text-white">
      <Nav />
      <Watchlist />
      <Footer />
    </div>
  );
};

export default WatchlistPage;
