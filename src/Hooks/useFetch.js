import { useEffect } from "react";
import { useState } from "react";


export function useFetch(fetchFn) {
    const [loading, setLoading] = useState(true);
    const [availablePlaces, setAvailablePlaces] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {

        async function fetchPlaces() {
            setLoading(true);
            try {
                const places = await fetchFn();
                setAvailablePlaces(places);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchPlaces()
    }, [fetchFn])
    return {
        loading, availablePlaces, error
    }
}