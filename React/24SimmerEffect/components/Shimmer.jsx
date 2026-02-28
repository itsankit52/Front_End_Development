import './shimmer.css'

export default function Shimmer() {
    const array = new Array(10).fill(0)
    console.log(array); // just for information....
    return (
        <div className="Countryshimmer">
            {array.map((_, index) => (
                <div key={index} className="Countrycard shimmer-card"></div>
            ))}
        </div>
    )
}