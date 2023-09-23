import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/common/Footer';
import GlobalStyle from './GlobalStyle';
import Router from "./routes/Router";
import { useEffect, useState } from "react";
import { detectWebpSupport } from "./library/checkWebpSupport";
import CollapsibleExample from './component/CollapsibleExample';

function App() {
  const [webpChecked, setWebpChecked] = useState(false);
  useEffect(() => {
    detectWebpSupport();
  }, []);

  const checkwebp = async () => {
    const webpSupport = await detectWebpSupport();
    if (webpSupport) {
      document.body.classList.add("webp");
    } else {
      document.body.classList.add("no-webp");
    }
    // webp 지원유무가 확인되었다면 true로 설정
    setWebpChecked(true);
  };

  useEffect(() => {
    checkwebp();
  }, []);
  return (
    <>
    <GlobalStyle/>
    <CollapsibleExample/>
     <div className="container">
      <div className="row">
        {/* <div className="col col-md-4 col-lg-8"></div>
        <div className="col md-4 col-lg-4"></div>
        <div className="col md-4 col-lg-4"></div>
        <div className="col md-4 col-lg-4"></div>
        <div className="col md-4 col-lg-4"></div> */}
        {/* <Footer/> */}
      </div>
      </div>
      <Router />
    </>
  );
}
export default App;
