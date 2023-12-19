type Autocomplete = 'name' | 'email';
type Type = 'text' | 'email';

export interface InputProps {
  id: string;
  type?: Type;
  required?: bool;
  placeholder?: string;
  autocomplete?: Autocomplete;
}
