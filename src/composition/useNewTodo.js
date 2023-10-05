import { ref } from "vue"
import { genid } from "../utils/todoStorage"

/**
 * 创建新的任务
 * @param {list} todoRef  
 */
export default function useNewTodo(todosRef) {
    const newTodoRef = ref("")  // 新任务的标题
    const addTodo = () => {
        const value = newTodoRef.value && newTodoRef.value.trim()
        if(!value){
            return
        }

        // 生成一个任务对象，加入到任务列表中
        const todo = {
            id: genid(),
            title: value,
            completed: false,
        }
        todosRef.value.push(todo)
        // 任务添加之后将 输入框文字置为控
        newTodoRef.value = ""
    }

    return {
        newTodoRef,
        addTodo
    }
    
}