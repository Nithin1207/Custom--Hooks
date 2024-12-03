import Places from './Places.jsx';
import { useFetch } from '../Hooks/useFetch.js';
import { FetchAvailablePlaces } from "../../src/components/FetchAvailablePlaces.jsx"

export default function AvailablePlaces({ onSelectPlace }) {


  const { loading, availablePlaces, error } = useFetch(FetchAvailablePlaces)



  if (error) {
    return <Error title="An error occurred" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
      loading={loading}
      err_msg={error}
    />
  );
}
