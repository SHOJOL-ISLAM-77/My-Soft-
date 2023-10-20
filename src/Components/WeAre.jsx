import WeAreCard from "./WeAreCard";
import { useEffect, useState } from "react";

const WeAer = () => {
    const [cards, setCards] =useState([]);
    useEffect(()=>{
        fetch('WeAre.json')
        .then(res=> res.json())
        .then(data=> setCards(data))
    },[])
    return (
        <div className="">
           <h2 className="md:text-5xl text-3xl text-center py-7 gradient-text font-semibold">
                    Where is mine to you</h2>
            <div className="text-gray py-16 container mx-auto">
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14 xl:gap-11 ">
                    {
                        cards.map(data => <WeAreCard key={data.id} cardData={data}></WeAreCard>)
                    }

                </div>
            </div>

        </div>
    );
};

export default WeAer;