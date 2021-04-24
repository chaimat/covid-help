import {Kanpur, Lucknow} from './UttarPradesh'

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

const cityWiseList = { Kanpur, Lucknow };

export const selector = (city, info) => {
  return cityWiseList[city][info];
};
