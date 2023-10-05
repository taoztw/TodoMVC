import { nanoid } from "nanoid";

const LOCAL_KEY = "todo"

export function genid(){
    return nanoid(32)
}
/**
 * 获取当前所有任务
 * @returns 返回任务列表
 */
export function fetch() {
    const result = localStorage.getItem(LOCAL_KEY);
    if (result){
        return JSON.parse(result)
    }
    return [];
}

/**
 * 保存所有任务
 * @param {*} todos 任务列表 
 */
export function save(todos) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos))
}


/**
 * 根据状态过滤todo项
 * @param {*} todos 
 * @param {*} visibility 
 * @returns 
 */
export function filter(todos, visibility = "all") {
    if (visibility === "all") {
      return todos;
    } else if (visibility === "active") {
      return todos.filter((it) => !it.completed);
    } else if (visibility === "completed") {
      return todos.filter((it) => it.completed);
    }
    throw new Error("invalid visibility value");
  }
  