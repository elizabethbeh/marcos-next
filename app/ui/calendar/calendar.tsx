import { ArrowPathIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';

export default function TaskForm({
    pepe,  
}: {
    pepe: LatestInvoice[]; 
}) {
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Tasks
      </h2>

      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">

        {pepe.map((task, i) => (
          <div 
            key={task.id}
            className={clsx('flex justify-between py-4', {
              'border-t': i !== 0
            })}
          >
            <div>
              <p className="text-sm font-semibold">{task.id}</p>
              <p className="text-sm text-gray-500">{task.amount}</p>
            </div>

            <p className="text-sm font-medium">
              {task.email}
            </p>
          </div>
        ))}

        <div className="flex items-center justify-between p-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <p className="text-sm text-gray-500">Updated just now</p>
        </div>

      </div>
    </div>
  );
}