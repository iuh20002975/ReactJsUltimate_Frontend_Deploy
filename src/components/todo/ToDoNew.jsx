import { useState } from "react";

const ToDoNew = (props) => {
    //tao state luu tru gia tri trong o input
    const [valueInput, setValueInput] = useState("Nguyen Long")

    const { addNewToDo } = props;
    console.log(props);

    const handleClick = () => {
        addNewToDo(valueInput)
        setValueInput("");
    }

    const handleOnChange = (name) => {

        setValueInput(name)
    }
    return (
        <div className='todo-new'>
            <input
                onChange={(event) => handleOnChange(event.target.value)}
                value={valueInput}
                type="text"
            />

            <button
                onClick={handleClick}
                style={{ cursor: "pointer" }}>
                Add
            </button>
            <div>My input is {valueInput}</div>
        </div>
    )
}
export default ToDoNew