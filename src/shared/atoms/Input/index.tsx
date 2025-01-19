interface InputProps {
  id?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export const Input = ({ id, value, onChange, className }: InputProps) => (
  <input
    id={id}
    value={value}
    onChange={onChange}
    className={className}
  />
);
