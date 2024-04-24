interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface SearchInputProps {
  inputProps?: InputProps;
  containerClasses?: string;
  onCityChange: (city: string) => void;
}
