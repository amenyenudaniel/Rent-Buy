import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "619e99bce1msh0f8497b704383d2p148a12jsn897607ec2749",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
