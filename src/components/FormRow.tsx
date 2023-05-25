import { InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labeltext: string;
}

export default function FormRow(props: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.name}>
        {props.labeltext}
      </label>
      <input className="border border-theme-gray-200 rounded-[10px] py-2 px-3" {...props} />
    </div>
  );
}
