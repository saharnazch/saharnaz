  
  export default function List(){
return(
    <>
<div className="flex justify-around  rounded text-2xl py-3 mb-5 cursor-pointer">
<div className="border-[1px] border-black">to do</div>
<div className="border-[1px] border-black"> Done</div>

</div>

<div>
<ul className="text-left">
    <li className="bg-yellow-200 flex mb-2 justify-around rounded py-4 px-5"> <span>test</span>  <input type="checkbox"/></li>
</ul>
<ul className="text-left">
    <li className="bg-yellow-200 flex justify-around rounded py-4 px-5"> <span>test</span>  <input type="checkbox"/></li>
</ul>



</div>



</>
)
  }