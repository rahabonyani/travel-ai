import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface TagProps {
  text: string;
  icon: ReactNode;
  value?: string;
  array?: string[]
  arraySelector?: Dispatch<SetStateAction<string[]>>;
}
