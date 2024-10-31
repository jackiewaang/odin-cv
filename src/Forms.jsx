/* eslint-disable react/prop-types */
// fix prop validation later by specifying inputs
import FormZero from "./components/FormZero"
import FormOne from "./components/FormOne"
import FormTwo from "./components/FormTwo"

function Forms({activeSection, onInfoChange, onOtherChange, sectionZero, sectionOne, sectionTwo, onAddEducation}){

    console.log(sectionOne);
    console.log(sectionTwo);


    return(
        <div className="col-span-4 flex flex-col items-center justify-center overflow-y-auto">
            {activeSection == 0 && <FormZero onFormChange={onInfoChange} data={sectionZero}/>}


            {activeSection == 1 && (
                <div className="flex flex-col gap-5">
                    {sectionOne.map((education) => (
                        <FormOne key={education.id} id={education.id} onFormChange={onOtherChange} data={education} />
                    ))}
                    <button onClick={() => onAddEducation(1)} className="bg-green-500 hover:bg-green-600 text-xl font-semibold p-5 rounded-lg">
                        Add new education
                    </button>
                </div>
            )}

            {activeSection == 2 && (
                <div className="flex flex-col gap-5">
                    {sectionTwo.map((experience) => (
                        <FormTwo key={experience.id} id={experience.id} onFormChange={onOtherChange} data={experience} />
                    ))}
                    <button onClick={() => onAddEducation(2)} className="bg-green-500 hover:bg-green-600 text-xl font-semibold p-5 rounded-lg">
                        Add new experience
                    </button>
                </div>
            )}
        </div>
    )
}

export default Forms