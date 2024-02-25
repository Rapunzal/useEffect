import React,{useState,useEffect} from "react"

function MyComponent(){
    const [count,setCount] = useState(0);
    const [color,setColor] = useState('red')

    useEffect(() =>{
        document.title = `Count is ${count} ${color}`
    },[count,color ]);

    function handleClickAdd(){
        setCount(prev => prev+1)
    }
    function handleClickSubtract(){
        setCount(prev => prev-1)
    }   
    function handleColorChange(){
        setColor(prev =>  prev === "red"?"green":"red"
            )
    }
    return(<>
        <p style={{color:color}}>{count}</p>
        <button onClick={handleClickAdd}>Add</button>
        <button onClick={handleClickSubtract}>Sub</button>
        <button onClick={handleColorChange}>Change Color</button>
    </>);
}

export default MyComponent;