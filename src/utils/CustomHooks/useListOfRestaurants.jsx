import { useEffect, useState } from "react"
import { RESTAURANT_API } from "../constants";

const useListOfRestaurants = () =>{

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async() =>{
        const data = await fetch(RESTAURANT_API);
            
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants;
}

export default useListOfRestaurants;