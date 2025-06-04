'use client'

import Input from '@mui/material/Input'
import { useState } from 'react';
import { useTarefa } from '@/stores/tarefas';

export const TaskArea=()=>{
	const [taskInput, setTaskInput] = useState('');
	const tarefas = useTarefa();

	const handleEnter=(e)=>{
		if(e.key === 'Enter' && taskInput !== ''){
			tarefas.addTask(taskInput.trim());
			setTaskInput('');
		}
	}

	return(
		<div className='my-10 w-3/4 mx-auto'>
			<Input
				placeholder='Digite a tarefa'
				className='w-full mx-auto'
				value={taskInput}
				onChange={e=>setTaskInput(e.target.value)}
				onKeyUp={handleEnter}
			/>
		</div>
	);
}