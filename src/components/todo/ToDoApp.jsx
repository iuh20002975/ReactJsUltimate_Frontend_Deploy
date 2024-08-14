
import ToDoData from './ToDoData'
import ToDoNew from './ToDoNew'
import './todo.css'
import reactLogo from '../../assets/react.svg'
import { useState } from 'react'

const TodoApp = () => {
    //tao usestate luu tru danh sach cong viec
    const [todoList, setTodoList] = useState([])

    //them moi cong viec
    const addNewToDo = (name) => {
        const newToDo = {
            id: randomIntFromInterval(1, 1000000),
            name: name
        }
        setTodoList([...todoList, newToDo])
    }

    //sinh ra 1 id moi
    const randomIntFromInterval = (min, max) => { // min and max included  
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //xoa mot cong viec
    const deleteToDo = (id) => {

        //dung filter, giu lai nhung item co id khac voi id truyen vao
        const newToDo = todoList.filter(item => item.id != id)
        setTodoList(newToDo);

    }
    return (
        <div className="todo-container">
            <div className="todo-title"> ToDo List</div>
            <ToDoNew
                addNewToDo={addNewToDo}
            />
            {todoList.length > 0 ?
                <ToDoData
                    todoList={todoList}
                    deleteToDo={deleteToDo}
                />
                :
                <div className='todo-image'>
                    <img src={reactLogo} className='logo' />

                </div>
            }
            {/* {todoList.length > 0 &&
          <ToDoData
            todoList={todoList}
          />
        }
        {todoList.length === 0 &&
          <div className='todo-image'>
            <img src={reactLogo} className='logo' />
  
          </div>
        } */}

        </div>
    )
}
export default TodoApp;