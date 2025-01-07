"use server";

export async function googlePhotoPlaceApi(cityId: string) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_PLACE_API;

  try {
    // get photos refrence with place id

    const detailsResponse = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${cityId}&fields=photos&key=${apiKey}`
    );
    const detailsData = await detailsResponse.json();

    // Split the string into an array of words
    const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${detailsData?.result?.photos[0].photo_reference}&key=${apiKey}`;

    return imageUrl;
  } catch (error) {
    throw new Error("Failed to fetch details");
  }
}
