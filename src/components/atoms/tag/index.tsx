'use client';
import type { TagProps } from './type';

const Tag = ({ text, icon, value = '', arraySelector, array }: TagProps) => {
  return (
    <div
      onClick={() => {
        arraySelector &&
          value &&
          arraySelector((prev) => {
            const index = prev.indexOf(value);
            if (index === -1) {
              return [...prev, value];
            }
            return prev.filter((item) => item !== value);
          });
      }}
      className={`${
        array?.includes(value)
          ? 'text-white bg-green-500 hover:bg-green-600'
          : 'text-gray-700 hover:bg-green-100'
      }
       px-5 py-3 gap-2 flex items-center font-semibold
      border-green-500 hover:bg-green-100 transition-colors duration-200
       rounded-full border-2`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default Tag;
