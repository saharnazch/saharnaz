import { useState } from "react";

export default function Form(props){

  let[text,setText] = useState();


return(
<div className="flex gap-5 mb-5">
  <input type="text" className="border-2 border-black text-3xl py-3" onChange={e => setText(e.target.value)} />
  <button className="bg-blue-500 text-white  text-xl px-3 rounded" onClick={()=>props.add(text)}>Add to do</button>
</div>

)


}