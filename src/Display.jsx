/* eslint-disable react/prop-types */
import Education from "./components/Education";
import Experience from "./components/Experience";

function Display({sectionZero, sectionOne, sectionTwo, giveRef}){
    
    

    return(
        <div ref={giveRef} className="col-span-7 bg-white px-16 py-10">
            <div id="sectionZero">
                <h1 className="text-center text-4xl font-semibold p-3">{sectionZero.fullName}</h1>
                <p className="text-center">{sectionZero.phoneNo} | {sectionZero.email} | {sectionZero.linkedin}</p>   
            </div>
            <div id="sectionOne">
                <h1 className="text-2xl border-b-2 border-gray-700">Education</h1>
                {sectionOne.map((education) => {
                    return <Education key={education.school} school={education.school} degree={education.degree} location={education.location} date={education.date} />
                })}
            </div>
            <div id="sectionTwo">
                <h1 className="text-2xl border-b-2 border-gray-700">Experience</h1>
                {sectionTwo.map((experience) => {
                    return <Experience key={experience.company} company={experience.company} position={experience.position} location={experience.location} date={experience.date} />
                })}
            </div>
        </div>
    )
}

export default Display;