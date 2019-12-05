import {SET_FILTER, SET_TODOS, ADD_TODO, REMOVE_TODO, REMOVE_ALL, SHOW_NOTIFICATION, HIDE_NOTIFICATION, TOGGLE} from "../actions/actions";

export function setFilter(newFilter){
    return {type: SET_FILTER, activeFilter: newFilter}
}

export function setTodos(todos){
    return {type: SET_TODOS, todos}
}

export function addTodo(todo){
    return {type: ADD_TODO, todo}
}

export function removeTodo(id){
    return {type: REMOVE_TODO, id}
}

export function removeAll(todos) {
    return {type: REMOVE_ALL,todos}
}

export function show() {
    return {type: SHOW_NOTIFICATION}
}

export function hide() {
    return {type: HIDE_NOTIFICATION}
}

export function toggle(id) {
    return {type: TOGGLE, id}
}