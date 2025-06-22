import { MdOutlineCreate } from "react-icons/md";
import { MdOutlineDelete } from "react-icons/md";
import Createsizewood from './createsizewood.js';
import Mycontext from '../../myContext.js';
import { useContext } from 'react';

const Sizewood = ()=>{
    const { sizeWoodTgl,setSizeWoodTgl } = useContext(Mycontext);
    
    return(
        <div className='relative'>
            <div className={`${sizeWoodTgl}`}>
                <Createsizewood />
            </div>
            <div className='border-b text-center font-bold text-[20px] pt-6'>
                <h2>Size-Woods-Mesurement</h2>
            </div>
            <div className='flex justify-center items-center gap-4 my-10'>
                <button className='border rounded px-4 py-1 font-bold'>List</button>
                <button onClick={()=>setSizeWoodTgl('block')} className='border rounded px-4 py-1 font-bold'>Create-new</button>
            </div>
            <div className='w-[100%]'>
                <div className='border rounded flex justify-between items-center gap-2 w-[90%] mx-auto mb-2 px-4 py-2 md:w-[70%]'>
                    <span>1.</span>
                    <h2 className='w-[100%]'>Siddha</h2>
                    <div className='flex justify-center items-center gap-8'>
                        <MdOutlineCreate className='text-purple-700'/>
                        <MdOutlineDelete className='text-red-700'/>
                    </div>
                </div>
                <div className='border rounded flex justify-between items-center gap-2 w-[90%] mx-auto mb-2 px-4 py-2 md:w-[70%]'>
                    <span>2.</span>
                    <h2 className='w-[100%]'>Siddha</h2>
                    <div className='flex justify-center items-center gap-8'>
                        <MdOutlineCreate className='text-purple-700'/>
                        <MdOutlineDelete className='text-red-700'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sizewood;