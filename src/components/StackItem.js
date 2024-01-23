import React from 'react'


function StackItem({icon,title}){
    return(
      
        <div className="my-1 mx-1  gap-2">
        <span className="inline-block px-2 py-2 font-semibold text-white dark:text-stone-900 bg-stone-900  dark:bg-white rounded-md">
        <i className={icon}></i></span>
        <h3 className="my-2 mx-1">{title}</h3>
        </div>
   
    )

}



export default StackItem;    