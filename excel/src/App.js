import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/common/Footer';
import GlobalStyle from './GlobalStyle';
import Router from "./routes/Router";

function App() {
  return (
    <>
    <GlobalStyle/>
     <div className="container">
      <div className="row">
        <div className="col col-md-4 col-lg-8"></div>
        <div className="col md-4 col-lg-4"></div>
        <div className="col md-4 col-lg-4"></div>
        <div className="col md-4 col-lg-4"></div>
        <div className="col md-4 col-lg-4"></div>
        <Footer/>
      </div>
      </div>
      <Router />
    </>
  );
}
export default App;
