import { uttarPradeshCities } from "./UttarPradesh";
import { rajasthanCities } from "./Rajasthan";
import { maharashtraCities } from "./Maharashtra";
import { punjabCities } from "./Punjab";
import { tamilnaducities } from "./TamilNadu";
import {ncrCities} from './NCR'
import {karnatakaCities} from './Karnataka'
import {westbengalCities} from './WestBengal'
export const states = {
  uttarpradesh: [
    "Kanpur",
    "Lucknow",
    "Noida",
    "Agra",
    "Ghaziabad",
    "Prayagraj",
    "Mathura",
  ],
  rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Kota"],
  gujarat: ["Ahmedabad", "Surat", "Vadodra", "Rajkot"],
  karnataka: ["Bangalore", "Mysuru"],
  westbengal: ["Kolkata"],
  telangana: ["Hyderabad"],
  ncr: ["Delhi"],
  tamilnadu: ["Chennai"],
  punjab: ["Chandigarh"],
  maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"],
};

const cityWiseList = {
  ...uttarPradeshCities,
  ...rajasthanCities,
  ...maharashtraCities,
  ...punjabCities,
  ...tamilnaducities,
  ...ncrCities,
  ...karnatakaCities,
  ...westbengalCities
};

export const selector = (city, info) => {
  return cityWiseList[city][info];
};
