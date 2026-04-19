import { useState, useMemo } from "react"


const numbers = Array.from({"length": 10000}, (_, i) => i + 1);

export const Calculator = () => {
    const [number, setNumber] = useState(0)

    const Sum = useMemo(() => {return numbers.reduce((acc, number) => {return acc + number}, 0);}, [numbers]);


    console.log(numbers)

    return (
        <div className="Calc">
            <p>{Sum}</p>
        </div>
    )
}