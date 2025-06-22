import { TiDeleteOutline } from "react-icons/ti";
import { useContext } from 'react';
import Mycontext from '../../myContext.js';

const Createsizewood = ()=>{
    const { sizeWoodTgl,setSizeWoodTgl } = useContext(Mycontext);
    
    return(
        <div className='bg-black w-[100%] min-h-[100vh] absolute left-0 top-0'>
            <div className='flex justify-between items-center px-4 pt-6 pb-2'>
                <h2>Create New Size Wood Project</h2>
                <TiDeleteOutline onClick={()=>setSizeWoodTgl('hidden')}/>
            </div>
        </div>
    )
}

export default Createsizewood;