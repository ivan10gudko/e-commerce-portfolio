function Input({
  children,
  name,
  type = "text",
  defaultValue = null,
  pattern,
}) {
  return (
    <input className="p-3 border rounded-md w-full my-3 placeholder:text-sm placeholder:text-slate-600 outline-1 shadow-sm"
      type={type}
      name={name}
      defaultValue={defaultValue}
      placeholder={children}
      pattern={pattern}
    ></input>
  );
}

export default Input;
