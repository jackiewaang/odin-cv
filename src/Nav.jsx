/* eslint-disable react/prop-types */
function Nav({activeSection, onBtnClick, toPrint}){

    

    return(
        <div className="text-white font-semibold p-3 mx-3 my-32 flex flex-col items-center justify-center gap-5 bg-slate-700 rounded-2xl">
            <button className="flex flex-col items-center" onClick={() => onBtnClick(0)}>
                <svg className={`transition rounded-lg p-3 w-16 h-16 ${activeSection == 0 ? 'bg-slate-600' : 'hover:bg-slate-600'}`} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#F3F3F3"><path d="M480-480.67q-66 0-109.67-43.66Q326.67-568 326.67-634t43.66-109.67Q414-787.33 480-787.33t109.67 43.66Q633.33-700 633.33-634t-43.66 109.67Q546-480.67 480-480.67ZM160-160v-100q0-36.67 18.5-64.17T226.67-366q65.33-30.33 127.66-45.5 62.34-15.17 125.67-15.17t125.33 15.5q62 15.5 127.28 45.3 30.54 14.42 48.96 41.81Q800-296.67 800-260v100H160Zm66.67-66.67h506.66V-260q0-14.33-8.16-27-8.17-12.67-20.5-19-60.67-29.67-114.34-41.83Q536.67-360 480-360t-111 12.17Q314.67-335.67 254.67-306q-12.34 6.33-20.17 19-7.83 12.67-7.83 27v33.33ZM480-547.33q37 0 61.83-24.84Q566.67-597 566.67-634t-24.84-61.83Q517-720.67 480-720.67t-61.83 24.84Q393.33-671 393.33-634t24.84 61.83Q443-547.33 480-547.33Zm0-86.67Zm0 407.33Z"/></svg>
                <p>Personal Info</p>
            </button>
            <button className="flex flex-col items-center" onClick={() => onBtnClick(1)}>
                <svg className={`transition rounded-lg p-3 w-16 h-16 ${activeSection == 1 ? 'bg-slate-600' : 'hover:bg-slate-600'}`} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#F3F3F3"><path d="M479.33-120 192.67-276.67v-240L40-600l439.33-240L920-600v318h-66.67v-280L766-516.67v240L479.33-120Zm0-316 301.34-164-301.34-162-300 162 300 164Zm0 240.33 220-120.66v-162.34L479.33-360l-220-120v163.67l220 120.66ZM480-436Zm-.67 79.33Zm0 0Z"/></svg>
                <p>Education</p>
            </button>
            <button className="flex flex-col items-center" onClick={() => onBtnClick(2)}>
                <svg className={`transition rounded-lg p-3 w-16 h-16 ${activeSection == 2 ? 'bg-slate-600' : 'hover:bg-slate-600'}`} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#F3F3F3"><path d="M146.67-120q-27 0-46.84-19.83Q80-159.67 80-186.67v-466.66q0-27 19.83-46.84Q119.67-720 146.67-720H320v-93.33q0-27 19.83-46.84Q359.67-880 386.67-880h186.66q27 0 46.84 19.83Q640-840.33 640-813.33V-720h173.33q27 0 46.84 19.83Q880-680.33 880-653.33v466.66q0 27-19.83 46.84Q840.33-120 813.33-120H146.67Zm0-66.67h666.66v-466.66H146.67v466.66Zm240-533.33h186.66v-93.33H386.67V-720Zm-240 533.33v-466.66 466.66Z"/></svg>
                <p>Experience</p>
            </button>
            <button className="flex flex-col items-center" onClick={toPrint}>
                <svg className="hover:bg-slate-600 transition rounded-lg p-3 w-16 h-16" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#F3F3F3"><path d="M480-315.33 284.67-510.67l47.33-48L446.67-444v-356h66.66v356L628-558.67l47.33 48L480-315.33ZM226.67-160q-27 0-46.84-19.83Q160-199.67 160-226.67V-362h66.67v135.33h506.66V-362H800v135.33q0 27-19.83 46.84Q760.33-160 733.33-160H226.67Z"/></svg>
                <p>Download</p>
            </button>
        </div>
    )
}

export default Nav