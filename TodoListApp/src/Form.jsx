
import React,{useState} from "react";
function Form(){
    const [Todo , setTodo] = useState('');
    const [Description, setDescription] = useState('');
    const [Color, setColor] = useState("#ffffff");
    const [array, setarray] = useState([]);

    function handleclick(e){
        e.preventDefault();
        setarray([...array,{id: Date.now(), Todo, Description, Color },])
    }
    const handlechangeTodo = (e) => {
        setTodo(e.target.value)
    }
    const handlechangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const handlechangeColor = (e) => {
        setColor(e.target.value)
    }
    return(
        
        <div id="bigdiv">
            <style>
    @import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');
            </style>
            <div id="form">
            <h2 id="Title">Add A Todo</h2>
            <form>
            <label htmlFor="fname">Todo</label><br></br>
            <input id="fname"  type="text" name="fname" className="Input" onChange={handlechangeTodo} /><br></br>
            <label htmlFor="fDescription">Description</label><br></br>
            <input id="fDescription" className="Input" type="text" name="fDescription" onChange={handlechangeDescription} /><br></br>
            <label htmlFor="color">Pick a Colour</label><br/>
            <select name="color" id="color" onChange={handlechangeColor}>
                <option value="#ffffff">None</option>
                <option value="#85EDA3">Green</option>
                <option value="#ff65a3">Pink</option>
                <option value="#feff9c">Yellow</option>
            </select> <br/><br/>
            <button onClick={(e) => handleclick(e)}>Submit</button>
            </form>
            </div>
            <div id="Sticky">
            <h1 id="Bigtitle">To Do's</h1>
            {array.length > 0 &&(
                array.map((item) => (
                    <div key={item.id} className="Note" style={{backgroundColor:item.Color}}>
                    <h3>{item.Todo}</h3>
                    <b>{item.Description}</b>
                    </div>
                ))
            )}
            </div>
        </div>
    );
}
export default Form