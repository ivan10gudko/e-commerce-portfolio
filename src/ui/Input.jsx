function Input({
  children,
  name,
  type = "text",
  defaultValue = null,
  pattern,
  handleChange,
  error,
}) {
  

  return (
    <div className="relative">
    <input className={"p-3 border rounded-md w-full my-3 placeholder:text-sm placeholder:text-slate-600 outline-1 shadow-sm "+(error && "text-red-500 border-red-500")}
      type={type}
      name={name}
      defaultValue={defaultValue}
      placeholder={children}
      pattern={pattern}
      onChange={(e)=>handleChange(e.target.value)}
    ></input>
    {error&&<p className="text-red-500 absolute top-full bg-white w-full py-3 px-4 rounded border z-30 border-red-500"> ⛔{error}</p>}
    </div>
  );
}

export default Input;
