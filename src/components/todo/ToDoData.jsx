
const ToDoData = (props) => {
    const { todoList, deleteToDo } = props
    const handleClick = (id) => {
        deleteToDo(id)

    }

    // console.log("check props:", props);
    return (
        <div className='todo-data'>
            {todoList.map((item, index) => {
                return (
                    <div>
                        <div className="todo-item" key={item.id}>
                            {item.name}
                            <button
                                style={{ cursor: "pointer" }}
                                onClick={() => handleClick(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
export default ToDoData