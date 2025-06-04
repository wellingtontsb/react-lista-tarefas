import { Task } from '@/types/task';
import { EditIcon, TrashIcon } from 'lucide-react';
import { useTarefa } from '@/stores/tarefas';

type Props={
	item: Task;
}

export const TaskItem=({item}: Props)=>{
	const tarefas = useTarefa();
	const handleEditTask=(id, title)=>{
		let newTask = prompt('Coloque o nome correto da tarefa:',title);
		if (newTask!=='' && newTask!==null) {
			tarefas.editTask(id, newTask);
		}
	}

	const handleEditStatus=(e, task)=>{
		tarefas.editStatus(e.target.value, task);
	}

	return(
		<div key={item.id} className='flex justify-between mx-5 my-2'>
			<div className='capitalize'>{item.title}</div>
			<div>
				<select
					defaultValue={item.status}
					className='border rounded-md px-2'
					onChange={e=>handleEditStatus(e, item)}
				>
					{ item.status === '0' && <option value='0'>A Fazer</option> }
					{ item.status !== '2' && <option value='1'>Fazendo</option> }
					<option value='2'>Feito</option>
				</select>
			</div>
			<div className='flex gap-3'>
				{item.status==='0' &&
					<EditIcon
						className='cursor-pointer'
						onClick={()=>handleEditTask(item.id, item.title)}
					/>
				}

				{item.status==='2' &&
					<TrashIcon
						className='cursor-pointer'
						onClick={()=>tarefas.removeTask(item.id)}
					/>
				}
			</div>
		</div>
	);
}