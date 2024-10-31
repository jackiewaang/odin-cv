/* eslint-disable react/prop-types */
function Education({school, degree, location, date}){

    return(
        <div className="pl-5">
            <h1 className="flex justify-between font-semibold text-xl">
                {school} <span className="font-normal text-lg">{date}</span>
            </h1>
            <p className="flex justify-between italic">
                {degree} <span>{location}</span>
            </p>
        </div>
    )
}

export default Education