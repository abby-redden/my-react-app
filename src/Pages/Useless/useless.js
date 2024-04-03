import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/header";
import "./useless.css"

export default function Useless(){

          const navigate = useNavigate();    

    return (
       <div id="useless">
        <Header message={"This is my page of useless information"}></Header>
        <p>Below is a link to the "The Book Of" series which are some of my favorites. I found these books during a hard time, and they brought a sort of uniqueness in my life, that I once lost. There are many books in the series, but I have only read two, so far. I look forward reading all the books in the series. Excellent resource for boosting your knowledge on useless things, that may be great to know at a dinner party or in the most random moments. </p>
        <a href="https://www.amazon.com/stores/page/1F20CFBB-67A7-4C70-BF08-8683CF685F90">Click Me!</a>

       
       
       </div>
    )
}

