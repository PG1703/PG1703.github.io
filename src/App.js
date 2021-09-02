import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Banner from "./components/Items/Banner";
import AddNewItem from "./components/Items/AddNewItem";
import ToBuy from "./components/Items/ToBuy";
import Bought from "./components/Items/Bought";
import SaleInProgress from "./components/Items/SaleInProgress";
import Sold from "./components/Items/Sold";

function App() {
  return (
      <div>
    <Header />
      <Banner/>
      <AddNewItem/>
      <ToBuy/>
      <Bought/>
      <SaleInProgress/>
      <Sold/>
      <Footer/>
      </div>

  );
}

export default App;
