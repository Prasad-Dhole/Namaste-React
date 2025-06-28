import { useState } from "react";
import destList from "../utils/mockData.js";
import DestCard from "./DestCard.js";

const Body = () => {

    const [listOfDestination, setListOfDestination] = useState(destList);

    return (
        <div className="body-container">
            <div className="offer-container">
                <button 
                    className="rate-filter" 
                    onClick={() => {
                        const dest1 = destList.filter((dest) => dest.data.rating >= 4.0).sort((a,b)=> b.data.rating-a.data.rating);
                        setListOfDestination(dest1);
                    }}> Top Rated Tours </button>
                <button 
                    className="budget-filter" 
                    onClick={() => {
                        const dest1 = destList.filter((dest) => dest.data.price < 50000).sort((a,b)=> a.data.price-b.data.price);
                        setListOfDestination(dest1);
                    }
                    }> Budget Friendly </button>
            </div>
            <div className="destiny-container"> 
            {listOfDestination.map((dest, index) => (
                    <DestCard key={index} desData={dest} />
                ))}
            </div>
        </div>
    )
}

export default Body;