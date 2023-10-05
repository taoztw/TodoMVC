import { computed, ref } from "vue";

export default function useEditTodo(todosRef){
    const editingTodoRef = ref(null) // 当前正在修改的是哪一个todo

    let originTitle = null // 缓存编辑前的内容
    const editTodo = (todo) => {
        originTitle = todo.title
        editingTodoRef.value = todo
    }
    // 完成编辑
    const doneEdit = (todo)=>{
        editingTodoRef.value = null
        const title = todo.title.trim()
        if(title){
            todo.title = title
        }
        else{
            // 删除
            todosRef.value.splice(todosRef.value.indexOf(todo), 1)
        }
    }
    // 取消编辑
    const cancleEdit = (todo)=>{
        editingTodoRef.value = null
        todo.title = originTitle
    }
    // 根据传入是否完成来设置
    const allDoneRef = computed({
        get(){
            return todosRef.value.filter((it)=>{

            })
        }
    })
    function setAllChecked(checked) {
        console.log(checked, "setallchecked")
        todosRef.value.forEach((todo) => {
            todo.completed = checked
        });
    }

    return {
        editingTodoRef,
        editTodo,
        doneEdit,
        cancleEdit,
        allDoneRef,
        setAllChecked
    }
}