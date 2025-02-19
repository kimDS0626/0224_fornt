import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../common/Home";
import Notice from "../board/notice/Notice.js";
import OnlineCounsel from "../board/onlinecounsel/OnlineCounsel.js";
import OnlienCounselWrite from "../board/onlinecounsel/OnlienCounselWrite.js";
import OnlineCounselUpdate from "../board/onlinecounsel/OnlineCounselUpdate.js";
import Review from "../board/review/Review.js";
import MyPage from "../user/mypage/MyPage.js";


import UserReserv from "../reservation/UserReserv.js";
import NonUserReserve from "../reservation/NonUserReserve.js"
import Footer from "../common/Footer.js";
import Header from "../common/Header.js";
import GlobalStyle from "../style/GlobalStyle.js";
import AdminHome from "../admin/AdminHome.js";

function  Router(){
    return (
        <BrowserRouter>
            <GlobalStyle /> 
            <Header />
           
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/notice" element={<Notice />}></Route>
                <Route path="/onlineCounsel" element={<OnlineCounsel />}></Route>
                <Route path="/onlienCounselWrite" element={<OnlienCounselWrite />}></Route>
                <Route path="/onlienCounselUpdate" element={<OnlineCounselUpdate />}></Route>
                <Route path="/review" element={<Review />}></Route> 
                <Route path="/mypage" element={<MyPage />}></Route>    


                <Route path="/userreserv" element={<UserReserv />}></Route>  
                <Route path="/nonuserreserve" element={<NonUserReserve />}></Route>
                <Route path="/userreserv" element={<UserReserv />}></Route>
                <Route path="/admihome" element={<AdminHome />}></Route>
                
            </Routes>
            <Footer />

         </BrowserRouter>   

    );
}
export  default Router;