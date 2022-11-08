import React, {useEffect, useState} from 'react'
import './Style.css'

const UseEffect = () => {
  const initialData = 0;
  const [myNum, setmyNum] = useState(initialData);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={()=>setmyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
      </div>
    </>
  )
}

export default UseEffect