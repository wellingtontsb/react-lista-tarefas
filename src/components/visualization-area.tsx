'use client'

import { useTarefa } from '@/stores/tarefas';
import { EditIcon, TrashIcon } from 'lucide-react';
import { MenuItem, Select } from '@mui/material';
import { TaskItem } from './task-item';

export const VisualizationArea=()=>{
	const tarefas = useTarefa();

	return(
		<div>
			<div className='text-center text-lg mb-10'>Visualização de tarefas</div>
			<div className='flex flex-col text-center md:flex-row'>
				<div className='flex-1'>
					<p className='mb-5'>A Fazer</p>
					{tarefas.toDo &&
						tarefas.toDo.map((item)=>(
							<TaskItem key={item.id} item={item}/>
						))
					}
				</div>
				<div className='flex-1 border-y mb-5 md:border-x md:border-y-0'>
					<p className='my-5 md:mb-5 md:my-0'>Fazendo</p>
					{tarefas.doing &&
						tarefas.doing.map((item)=>(
							<TaskItem key={item.id} item={item}/>
						))
					}
				</div>
				<div className='flex-1 mb-5'>
					<p className='mb-5'>Feito</p>
					{tarefas.done &&
						tarefas.done.map((item)=>(
							<TaskItem key={item.id} item={item}/>
						))
					}
				</div>
			</div>
		</div>
	);
}