
export function Todos({todos})
{
   return<div>
    {todos.map(function(todos){
       return <div key={todos._id}>
         <h1>{todos.title}</h1>
         <h3>{todos.description}</h3>
         <button> Mark as Completed</button>
         </div>
    })}
   
    </div>
   
}