export const useFetchCity = async (params: "") => {
  try {
    const API_WEATHER =  "https://api.weatherapi.com/v1/current.json?lang=es&key=c21db2bcc653436281242558242204&q=";
    console.log(params);
    const response = await fetch(API_WEATHER + params);
    const data = await response.json();
    return data
  }catch (error){ 
    error;
  }
};
