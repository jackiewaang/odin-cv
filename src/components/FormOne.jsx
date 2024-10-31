/* eslint-disable react/prop-types */
function FormOne({id, onFormChange, data}){

    return(
        <>
            <form className="bg-white p-12 rounded-lg flex flex-col gap-5 font-semibold">
                <label className="text-4xl pr-64">Education</label>
                <div className="flex flex-col gap-3">
                    <label>School/University</label>
                    <input className="border rounded-lg p-3 font-normal" value={data.school} onChange={(e) => onFormChange(e.target.value, 1, id, 'school')} ></input>
                </div>
                <div className="flex flex-col gap-3">
                    <label>Degree</label>
                    <input className="border rounded-lg p-3 font-normal" value={data.degree} onChange={(e) => onFormChange(e.target.value, 1, id, 'degree')}></input>
                </div>
                <div className="flex flex-col gap-3">
                    <label>Location</label>
                    <input className="border rounded-lg p-3 font-normal" value={data.location} onChange={(e) => onFormChange(e.target.value, 1, id, 'location')}></input>
                </div>
                <div className="flex flex-col gap-3">
                    <label>Start and End Date</label>
                    <input className="border rounded-lg p-3 font-normal" value={data.date} onChange={(e) => onFormChange(e.target.value, 1, id, 'date')}></input>
                </div>
            </form>
        </>
    )
}

export default FormOne