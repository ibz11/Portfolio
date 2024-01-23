import React from 'react';
import Title from './Title';
import stack from '../data/stack'
import StackItem from './StackItem'
function Stack(){
    return(
        <div className="mt-12">
<div className="flex flex-col md:flex-row items-center justify-center">
<Title>My Tech stack</Title>
</div>
 <div className="flex flex-col md:flex-row items-center justify-center mt-12">
 
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stack.map(item => (
               <StackItem 
                  icon={item.icon}
                  title={item.title}
                
               />
            ))}
       





            </div>
            </div>






        </div>
    )
}










export default Stack;