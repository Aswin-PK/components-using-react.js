import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(()=> {
        let currentValue;
        try {
            currentValue = JSON.parse(
                localStorage.getItem(key) || defaultValue
            )
        } catch (error) {
            console.log('error:', error)
            currentValue = defaultValue;
        }
        return currentValue
    }) //end of useState

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]) // end of useEffect

    return [value, setValue]
}