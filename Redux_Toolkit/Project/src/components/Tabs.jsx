import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/SearchSlice'

const Tabs = () => {
    const tabs = ['Photos', 'Videos']
    const dispatch = useDispatch()
    const activetab = useSelector((state) => state.Search.activetab)


    return (
        <div>
            {tabs.map(function (element, index) {
                return <button className={`${(activetab === element ? '' : '')} 
                    
                    'bg-emerald-300 p-3 rounded-xl m-1.5 active:scale-95 cursor-pointer uppercase'`}
                    key={index}
                    onClick={() => {
                        dispatch(setActiveTabs(element))
                    }}
                >{element}</button>
            })}
        </div>
    )
}

export default Tabs