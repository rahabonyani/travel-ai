"use server";

import { Cities } from "@/src/models/cities";

export async function googlePlaceApi(city: string) {
  const apiKey = process.env.GOOGLE_PLACE_API;
  const types = "(cities)";

  try {
    // get prediction of places base on city name
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${city}&types=${types}&key=${apiKey}`
    );
    const resJson = await res.json();
    const predictions = resJson.predictions;

    if (!res.ok) {
      throw new Error("Place Details request failed");
    }

    // get photos refrence with place id
    const getRefrencesOfPlcePhoto = await Promise.all(
      predictions.map(
        async (place: { place_id: string; description: string }) => {
          const detailsResponse = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${place.place_id}&fields=photos&key=${apiKey}`
          );
          if (!detailsResponse.ok) {
            throw new Error("Place Details request failed");
          }
          const detailsData = await detailsResponse.json();
          const details = {
            title: place.description,
            refrence: detailsData.result.photos[0].photo_reference,
            id: place.place_id,
          };
          return details;
        }
      )
    );
    // generate image url with refrence
    const getDetails = getRefrencesOfPlcePhoto.map((details) => {
      const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${details.refrence}&key=${apiKey}`;
      const data = {
        imageUrl,
        ...details,
      };
      return data;
    });

    return getDetails;
  } catch (error) {
    throw new Error("Failed to fetch details");
  }
}
