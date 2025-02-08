import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./elements/Header";
import Card from "./elements/Card";
let arr = [{
    firstLine: "Kids' Wear",
    secondLine: "Upto 70% Off",
    thirdLine: "Shop Now!",
    price: 1000},
    {
        firstLine: "Mens' Wear",
        secondLine: "Upto 30% Off",
        thirdLine: "Shop Now!",
        price: 2000
    },
    {
        firstLine: "Womens' Wear",
        secondLine: "Upto 20% Off",
        thirdLine: "Shop Now!",
        price: 3000
    },
    {
        firstLine: "Kurta Wear",
        secondLine: "Upto 90% Off",
        thirdLine: "Shop Now!",
        price: 250
    },
    {
        firstLine: "Lehanga Wear",
        secondLine: "Upto 50% Off",
        thirdLine: "Shop Now!",
        price: 500
    },
    {
        firstLine: "Top Wear",
        secondLine: "Upto 60% Off",
        thirdLine: "Shop Now!",
        price: 1500
    },
    {
        firstLine: "Saree Wear",
        secondLine: "Upto 40% Off",
        thirdLine: "Shop Now!",
        price: 3500
    },
    {
        firstLine: "Suit Wear",
        secondLine: "Upto 20% Off",
        thirdLine: "Shop Now!",
        price: 200
    }
];
console.log(arr);
function FrontPage(){
    let [A,setState] = useState(arr);
    function Sort(){
        setState([...arr].sort((a,b)=>a.price-b.price));
    }
    function GreaterThanThousand(){
        setState(arr.filter((obj)=>{
            return obj.price<1000;
        }));
    }
    function RemoveSorting(){
        setState(arr);
    }
    return (
        <>
           <Header/>
           <>
            <div id="Top-Buttons"><div><button onClick={Sort} className="top-but">Sort By Price</button></div>
            <div><button onClick={GreaterThanThousand} className="top-but">Less Than 1000</button></div>
            <div><button onClick={RemoveSorting} className="top-but">Remove Sorting</button></div>
            </div>
           </>
           <>
           <div className="card-container">
            {
                A.map((item, index) => {
                    return <Card key={index} first={item.firstLine} second={item.secondLine} third={item.thirdLine} fourth={item.price}/>
            })
        }
        </div>
           </>
        </>
    );
}
const rootElem = ReactDOM.createRoot(document.getElementById("root"));
rootElem.render(<FrontPage/>);