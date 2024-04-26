import { useState } from "react";
export interface RootObject {
   current:  Current;
   location: Location;
  }
  
  export interface Current {
   cloud:              number;
   condition:          Condition;
   feelslike_c:        number;
   feelslike_f:        number;
   gust_kph:           number;
   gust_mph:           number;
   humidity:           number;
   is_day:             number;
   last_updated:       string;
   last_updated_epoch: number;
   precip_in:          number;
   precip_mm:          number;
   pressure_in:        number;
   pressure_mb:        number;
   temp_c:             number;
   temp_f:             number;
   uv:                 number;
   vis_km:             number;
   vis_miles:          number;
   wind_degree:        number;
   wind_dir:           string;
   wind_kph:           number;
   wind_mph:           number;
  }
  
  export interface Condition {
   code: number;
   icon: string;
   text: string;
  }
  
  export interface Location {
   country:         string;
   lat:             number;
   localtime:       string;
   localtime_epoch: number;
   lon:             number;
   name:            string;
   region:          string;
   tz_id:           string;
  }

const useFetchCity = () => {
  const [data, setData] = useState<RootObject[]>([]);
  const [error, setError] = useState<any>();
  const API_WEATHER =  "https://api.weatherapi.com/v1/current.json?key=c21db2bcc653436281242558242204&q="

  const fetchCity = async (params: string) => {
    try {
        const response = await fetch(API_WEATHER + params);
        const data = await response.json();
        setData(data);
      }catch (error){ 
        setError(error);
      }
    };

    return {
      data,
      error,
      fetchCity,
    };
};

export default useFetchCity;
