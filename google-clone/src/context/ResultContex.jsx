import { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = "https://google-search72.p.rapidapi.com";

export const ResultContextProvider = ({
  children /* Pass state to all the react components*/,
}) => {
  const [results, SetResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const getResults = async (type) => {
    setIsLoading(true);

    const response = await fetch(`${baseUrl}${type}`, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "dd30d66e75mshe5360ccc1e9e3eep115689jsn294aa3d65567",
        "X-RapidAPI-Host": "google-search72.p.rapidapi.com",
      },
    });
    const data = await response.json();
    SetResults(data);
    setIsLoading(false);
  };
  return (
    <ResultContext.Provider
      value={(getResults, results, searchTerm, setSearchTerm, isLoading)}
    >
      {children}
    </ResultContext.Provider>
  );
};
export const useResultContext = () => useContext(ResultContext);
