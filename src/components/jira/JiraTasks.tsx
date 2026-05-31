import { DragEvent, useState } from 'react'

import { ITask, ITaskStatus } from '@interfaces/task.interface'
import { IoCheckmarkCircleOutline, IoEllipsisHorizontalOutline } from 'react-icons/io5'
import { SingleTask } from './SingleTask'
import { useTaskStore } from '@stores/tasks/task.store'
import { cn } from '@utils/cn'

interface IJiraTasksProps {
  title: string
  tasks: ITask[]
  value: ITaskStatus
}

export const JiraTasks = ({ title, tasks, value }: IJiraTasksProps) => {
  const isDragging = useTaskStore((s) => !!s.draggingTaskId)
  const [isOver, setIsOver] = useState(false)

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    setIsOver(true)
  }
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    setIsOver(false)
  }
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()

    setIsOver(false)
    console.log(`drop ${value}`)
  }

  return (
    <div
      className={cn(
        'shadow-3xl shadow-shadow-500 3xl:p-![18px] relative flex w-full flex-col rounded-[20px] border-4 bg-white bg-clip-border !p-4 !text-black transition-all duration-300 ease-out',
        { 'border-dotted border-blue-500': isDragging },
        { 'scale-[1.01] border-red-600 shadow-red-200 ring-2 ring-red-500/20': isOver },
      )}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Task Header */}
      <div className="relative flex flex-row justify-between">
        <div className="flex items-center justify-center">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
            <span className="text-brand-500 flex h-6 w-6 items-center justify-center">
              <IoCheckmarkCircleOutline style={{ fontSize: '50px' }} />
            </span>
          </div>

          <h4 className="text-navy-700 ml-4 text-xl font-bold">{title}</h4>
        </div>

        <button>
          <IoEllipsisHorizontalOutline />
        </button>
      </div>

      {/* Task Items */}
      <div className="h-full w-full">
        {tasks.map((task) => (
          <SingleTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}
