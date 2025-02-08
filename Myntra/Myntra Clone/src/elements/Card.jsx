import kidsWear from "../assets/kids-wear-img.jpg";
function Card(props){
   return (
     <>
         <div className="card">
            <img id="card-img" src={kidsWear}/>
            <div className="card-text-div">
            <div className="card-content">
            <p id="card-first-line">{props.first}</p>
            </div>
            <div className="card-content">
            <h2 id="card-second-line">{props.second}</h2>
            </div>
            <div className="card-content">
            <p id="card-third-line">{props.third}</p>
            </div>
            <div className="card-content">
            <h2 id="card-price">Price:{props.fourth}</h2>
            </div>
            </div>
        </div>
     </>
   );
}
export default Card;