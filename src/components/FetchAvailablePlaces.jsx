export async function FetchAvailablePlaces() {
    let response = await fetch("http://localhost:3000/places");

    if (!response.ok) {
        throw new Error("Server is busy");
    }

    let resData = await response.json();
    return resData.places

}


