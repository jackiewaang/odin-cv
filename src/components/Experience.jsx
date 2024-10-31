/* eslint-disable react/prop-types */
function Experience({company, position, location, date}){
    return(
        <div className="pl-5">
            <h1 className="flex justify-between font-semibold text-xl">
                {position} <span className="font-normal text-lg">{date}</span>
            </h1>
            <p className="flex justify-between italic">
                {company} <span>{location}</span>
            </p>
        </div>
    )
}

export default Experience