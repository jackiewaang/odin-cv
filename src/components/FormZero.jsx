/* eslint-disable react/prop-types */
function FormZero({onFormChange, data}){

    return(
        <>
            <form className="bg-white p-12 rounded-lg flex flex-col gap-5 font-semibold">
                <label className="text-4xl">Personal Information</label>
                <div className="flex flex-col gap-3">
                    <label>Full Name</label>
                    <input className="border rounded-lg p-3 pr-10 font-normal" value={data.fullName} onChange={(e) => onFormChange(e.target.value, 0, 'fullName')}></input>
                </div>
                <div className="flex flex-col gap-3">
                    <label>Phone Number</label>
                    <input className="border rounded-lg p-3 font-normal" value={data.phoneNo} onChange={(e) => onFormChange(e.target.value, 0, 'phoneNo')}></input>
                </div>
                <div className="flex flex-col gap-3">
                    <label>Email</label>
                    <input className="border rounded-lg p-3 font-normal" value={data.email} onChange={(e) => onFormChange(e.target.value, 0, 'email')}></input>
                </div>
                <div className="flex flex-col gap-3">
                    <label>Linkedin</label>
                    <input className="border rounded-lg p-3 font-normal" value={data.linkedin} onChange={(e) => onFormChange(e.target.value, 0, 'linkedin')}></input>
                </div>
            </form>
        </>
    )
}

export default FormZero