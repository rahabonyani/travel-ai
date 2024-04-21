import { ReactNode } from 'react';

const ItineraryLayout = ({ children }: { children: ReactNode }) => {
  return <div className='p-4 h-full bg-red'>{children}</div>;
};

export default ItineraryLayout;
