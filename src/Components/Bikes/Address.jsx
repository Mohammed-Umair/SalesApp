// import React, { useState, useEffect } from "react";
// import axios from "axios";
// export const Address = () => {
//   const [data, setData] = useState([]);
//   const getData = async () => {
//     const myAdd = await axios.post("http://localhost:2222/post");
//     {
//       data: [
//         {
//           HNo: "1234",
//           StreetNo: "31",
//           LandMark: "Near Paani Tanki",
//           city: "pune",
//           state: "maharaehtra",
//           country: "india",
//         },
//         {
//           HNo: "4334",
//           StreetNo: "30",
//           LandMark: "Near Khaja kirana",
//           city: "Nanded",
//           state: "maharaehtra",
//           country: "india",
//         },
//         {
//           HNo: "124",
//           StreetNo: "31",
//           LandMark: "Near D-mart",
//           city: "Aurangabad",
//           state: "maharaehtra",
//           country: "india",
//         },
//       ];

//       setData(myAdd.data);
//     }
//     useEffect(() => {
//       getData();
//     }, []);
//     return data.map((item) => <h1>{item}</h1>);
//   };
// };
