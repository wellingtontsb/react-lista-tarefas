import { create } from 'zustand';
import { Task } from '@/stores/task';

let toDo:Task[];
let doing: Task[];
let done: Task[];

export const useTarefa = create((set)=>({
	toDo: [],
	doing: [],
	done: [],
	addTask: (newTask)=>set(state=>{
		let nTask = [];
		nTask.push(...state.toDo,{
			id: crypto.randomUUID(),
			title: newTask,
			status: '0'
		});
		state.toDo = nTask;
		return state.toDo;
	}),
	removeTask: (taskId)=>set(state=>{
		return state.done = state.done.filter((item)=>item.id!==taskId);
	}),
	editTask: (id, newTask)=>set(state=>{
		return state.toDo.map(item=>{
			if(item.id === id) {
				item.title = newTask;
			}
		});
	}),
	editStatus: (newStatus, task)=>set(state=>{
		if(newStatus === '1') {
			task.status = '1';
			state.doing.push(task);
			state.toDo = state.toDo.filter(item=>item.id!==task.id);
			return{...state.toDo, ...state.doing}
		}
		if(newStatus==='2') {
			state.done.push(task);
			if(task.status==='0') {
				task.status = '2';
				state.toDo = state.toDo.filter(item=>item.id!==task.id);
				return{...state.toDo, ...state.done}
			}else{
				task.status = '2';
				state.doing = state.doing.filter(item=>item.id!==task.id);
				return{...state.doing, ...state.done}
			}
		}
	})
}))