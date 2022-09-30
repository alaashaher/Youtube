import axios from 'axios';



export async function getFromAPI(path) {
  try {
    const response = await axios
      .get(path);

    return response;
  } catch (error) {
    return error;
  }
}
