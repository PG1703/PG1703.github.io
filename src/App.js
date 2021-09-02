import './App.scss';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Banner from "./components/Items/Banner";
import AddNewItem from "./components/Items/AddNewItem";
import ToBuy from "./components/Items/ToBuy";
import Bought from "./components/Items/Bought";
import SaleInProgress from "./components/Items/SaleInProgress";
import Sold from "./components/Items/Sold";
import Currency from "./components/currency/Currency";

function App() {
  return (
      <div>
      <Header/>
      <Banner/>
      <Currency/>
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
