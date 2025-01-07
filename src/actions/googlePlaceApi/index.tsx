"use server";

export async function googlePlaceApi(city: string) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API;
  const types = "(cities)";

  try {
    // get prediction of places base on city name
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${city}&types=${types}&key=${apiKey}`
    );
    const resJson = await res.json();
    const predictions = resJson.predictions;

    // get photos refrence with place id
    const getRefrencesOfPlcePhoto = predictions.map(
      (place: { place_id: string; description: string }) => {
        // Split the string into an array of words
        const wordsArray = place.description.split(", ");
        const details = {
          name: wordsArray[0],
          country: wordsArray[wordsArray.length - 1],
          id: place.place_id,
        };
        return details;
      }
    );

    return getRefrencesOfPlcePhoto;
  } catch (error) {
    throw new Error("Failed to fetch details");
  }
}
