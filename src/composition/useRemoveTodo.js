
export default function useRemoveTodo(todosRef){
    const remove = (todo) => {
        console.log(todo)
        todosRef.value.splice(todosRef.value.indexOf(todo), 1)
    }

    const removeCompleted = ()=>{
        // 过滤掉已完成的
        todosRef.value = todosRef.value.filter((it) => !it.completed)
    }

    return {
        remove,
        removeCompleted
    }
}