import { useEffect, useState } from "react";
import axios from "axios";

const PlacesList = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/places")
            .then(response => setPlaces(response.data))
            .catch(error => console.error("Error fetching places:", error));
    }, []);

    return (
        <div>
            <h1>Tourist Places</h1>
            <ul>
                {places.map(place => (
                    <li key={place._id}>
                        <h2>{place.name}</h2>
                        <p>{place.location}</p>
                        <p>{place.description}</p>
                        <p>Rating: {place.rating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlacesList;
