import { useState } from "react"

export const ItemCard = ({el,cartVal,setcartVal})=>{
    console.log(el,cartVal)
    const[bool,setbool] = useState(true)
    // const [count,setcount] = useState(0)
    
    return (
        <>
        
        <div className="card text-center mt-3" style={{height:"230px",width:"200px"}}>
        <img src={el.image} className="card-img-top" alt="some image" style={{height:"100px",width:"200px"}}/>
        <div className="card-body">
            <h5 className="card-title">{el.name}</h5>
            <div className="price">{el.price}</div>
            <button  className="btn btn-primary" onClick={()=>{
                setbool(!bool)
                // setcount(bool?count+1:count-1)
                setcartVal(bool?cartVal+1:cartVal-1)
            }} >{bool?"Add":"Remove"}</button>
            
          
        </div>
        </div>
        
        </>
    )
}