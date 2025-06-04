import { TaskArea } from '@/components/task-area';
import { VisualizationArea } from '@/components/visualization-area';

export default function Page(){
    return(
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center mt-4'>Minha lista de tarefas</h1>
            <TaskArea />
            <VisualizationArea />
        </div>
    );
}