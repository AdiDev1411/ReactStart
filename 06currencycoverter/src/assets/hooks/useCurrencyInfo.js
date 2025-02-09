import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json()) // ✅ Return JSON data
            .then((res) => {
                setData(res[currency]); // ✅ Update state correctly
            })
            .catch((err) => console.error("Error fetching currency data:", err)); // ✅ Handle errors

    }, [currency]);

    useEffect(() => {
        console.log("Updated currency data:", data);
    }, [data]); // ✅ Log after update

    return data;
}

export default useCurrencyInfo;
