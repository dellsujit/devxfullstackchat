import { useState } from "react"

export function CreatTodo()
{

  const [title,settitle] = useState("");
  const [description,setdescription] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

    return <div style={{
        display:"flex",
        justifyContent:"center"
    }}>
    <input type="text" placeholder="Title" onChange={function(e){
        const value = e.target.value;
        settitle(value);
    }}></input>
    <input type="text" placeholder="Description" onChange={function(e){
        const value = e.target.value;
        setdescription(value);
    }}></input>
    <button onClick={()=>
    {
        fetch(`${apiUrl}/todo`,{
            method:"POST",
            body:JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
            "Content-type":"application/json"
            }
        }).then(async function(res)
        {
            const json = await res.json();
            console.log(json);
            alert("TOdo added")
        }) 
        
    }}> Add a Todo</button>
</div>
    
}