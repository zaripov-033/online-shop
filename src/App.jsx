import React, {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import {BrowserRouter, Routes , Route} from "react-router-dom"
import {LogInRegister} from "./components/Registerlogin/Registerlogin.jsx";
import {Layout} from "./components/layout/layout.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import {HomePage} from "./components/homepage/Home.jsx";
import {Faq} from "./components/Faq/Faq.jsx";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animatsiya davomiyligi (ms)
            once: true      // faqat bir marta ishlaydi
        });
    }, []);

    return (
   <>
       <BrowserRouter>
           <Routes>
               <Route path={"/"} element={<Layout/>}>
                   <Route path={"login_register"} element={<LogInRegister/>}/>
                   <Route index element={<Dashboard/>}/>
                   <Route path={"/product"} element={<HomePage/>}/>
                   <Route path={"/about"} element={<Faq/>}/>
                   <Route path={"*"} element={<NotFound />}/>
               </Route>
           </Routes>
       </BrowserRouter>
   </>
  )
}

export default App
  