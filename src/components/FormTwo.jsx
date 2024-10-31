/* eslint-disable react/prop-types */
function FormTwo({id, onFormChange, data}){

    return(
        <>
            <form className="bg-white p-12 rounded-lg flex flex-col gap-5 font-semibold">
                <label className="text-4xl pr-64">Experience</label>
                <div className="flex flex-col gap-3">
                    <label>Company</label>
                    <input className="border rounded-lg p-3 font-normal" value={data.company} onChange={(e) => onFormChange(e.target.value, 2, id, 'company')} ></input>
                </div>
                <div className="flex flex-col gap-3">
                    <label>Position</label>
                    <input className="border rounded-lg p-3 font-normal" value={data.position} onChange={(e) => onFormChange(e.target.value, 2, id, 'position')}></input>
                </div>
                <div className="flex flex-col gap-3">
                    <label>Location</label>
                    <input className="border rounded-lg p-3 font-normal" value={data.location} onChange={(e) => onFormChange(e.target.value, 2, id, 'location')}></input>
                </div>
                <div className="flex flex-col gap-3">
                    <label>Start and End Date</label>
                    <input className="border rounded-lg p-3 font-normal" value={data.date} onChange={(e) => onFormChange(e.target.value, 2, id, 'date')}></input>
                </div>
            </form>
        </>
    )
}

export default FormTwo