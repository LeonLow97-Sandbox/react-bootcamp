import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID AT5WqRoYPebcN0OjQySPeZ37qauzahquyvIu4GuPnPU",
    },
    params: {
      query: "cars",
    },
  });

  console.log(response);
  return response;
};

export default searchImages;
