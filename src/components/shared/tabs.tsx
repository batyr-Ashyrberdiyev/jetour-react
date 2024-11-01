import { useState } from 'react';
import { cn } from '../../lib/utils';

// interface Props {
//   active: boolean;
// }

const models = [
  {
    name: 'X50',
  },
  {
    name: 'X70FL',
  },
  {
    name: 'X70Plus',
  },
  {
    name: 'X90Plus',
  },
  {
    name: 'Dashing',
  },
  {
    name: 'T2',
  },
  {
    name: 's07',
  },
  {
    name: 's09',
  },
];

const Tabs = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex items-center justify-center gap-6">
      {models.map((item, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setActive(i)}
          className={cn(
            'py-3 min-w-12 text-[18px] font-bold flex justify-center',
            active ? 'bg-[#3D3D3D] text-white/85' : 'bg-transparent text-[#B0B0B0]',
          )}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
