import { Flame } from 'lucide-react';

interface SpicyLevelProps {
  level: 1 | 2 | 3;
}

const spiceLevelText = {
  1: 'Mild',
  2: 'Medium',
  3: 'Hot',
} as const;

export default function SpicyLevel({ level }: SpicyLevelProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(level)].map((_, index) => (
          <Flame key={index} className="h-4 w-4 text-orange-500" />
        ))}
      </div>
      <span className="text-xs font-medium text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full">
        {spiceLevelText[level]}
      </span>
    </div>
  );
}