import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './component/common/Footer';
import GlobalStyle from './GlobalStyle';
import Router from "./routes/Router";
import { UserContext } from "./context/UserContext";
import { useEffect, useState } from "react";
import { detectWebpSupport } from "./library/checkWebpSupport";
import CollapsibleExample from './component/CollapsibleExample';
import {customAxios} from "./library/customAxios"

function App() {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("accessToken") || null,
  );
  // account 상태
  const [account, setAccount] = useState(null);
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
  useEffect(() => {
    try {
      if (!account && accessToken) {
        async function fetchMyProfile() {
          const response = await customAxios.get(`user/myinfo`);
          setAccount(response.data.user.accountname);
        }
        fetchMyProfile();
      }
    } catch (error) {
      console.log(error);
    }
  }, [accessToken, account]);

  return (
    <>
    <GlobalStyle/>
    <CollapsibleExample/>
      <div className="container">
      <div className="row">
      </div>
      </div>
      <Router />
    </>
  );
}
export default App;
