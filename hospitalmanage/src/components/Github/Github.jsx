import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/amit-gupta18")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
        
//         setData(data);
//         console.log(data.avatar_url);
//       });
//   }, []);
    const data = useLoaderData()

  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
       Github Followers : {data.followers} 
      
     <img src={data.avatar_url} alt="git pic"  width={300} height={200} /> 
    </div>
  );
}

export default Github;

export const gitHubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/amit-gupta18")
    return response.json()
    
}