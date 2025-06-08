import { useState } from "react";

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bangladesh", "Belarus", "Belgium", "Bhutan", "Bosnia & Herzegovina", "Brazil", "Bulgaria",
  "Canada", "Chile", "China", "Colombia", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Ecuador", "Egypt",
  "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "India", "Indonesia",
  "Iran", "Iraq", "Ireland", "Israel", "Italy", "Japan", "Kazakhstan", "Kenya", "Kuwait", "Latvia", "Lithuania",
  "Malaysia", "Mexico", "Moldova", "Netherlands", "New Zealand", "Nigeria", "Norway", "Pakistan", "Peru",
  "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Saudi Arabia", "Serbia", "Singapore",
  "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe"
];

export default function CountrySelect({handleChange,selectedCountry}) {
  //const [selectedCountry, setSelectedCountry] = useState("");

  return (
    <select
    id="country"
    name="country"
    value={selectedCountry}
    onChange={(e) => handleChange(e.target.value)}
    className="block w-full border border-gray-300 rounded-md shadow-sm px-4 py-3 pr-10 text-base text-black/90 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-slate-ring-slate-700 appearance-none "
  >
  
        <option value="">Select a country</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
  );
}
