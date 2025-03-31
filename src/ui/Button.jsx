function Button({
  children,
  type,
  action,
  color = "black",
  bgColor = "white",
  className ="",
}) {
  switch (type) {
    case "fill":
      return (
        <button
          onClick={action}
          className={className+" "+"px-3 py-2 rounded-md flex justify-center hover:opacity-80  items-center cursor-pointer "}
          style={{ color: color, background: bgColor }}
        >
          {children}
        </button>
      );
    case "outline":
      return (
        <button
          onClick={action}
          className={className+" "+"px-3 py-2 border-2 rounded-md border-opacity-70 flex justify-center items-center cursor-pointer "}
          style={{ color: color,borderColor:color}}
        >
          {children}
        </button>
      );
    case "text-only":
      return (
        <button
          onClick={action}
          className={className+" "+"hover:underline transition-all duration-100 delay-75 flex justify-center items-center cursor-pointer "}
          style={{ color: color}}
        >
          {children}
        </button>
      );
    default:
        return (
            <button
              onClick={action}
              className={className+" "+"px-3 py-2 border-2 rounded-md flex justify-center items-center"}
              style={{ color: color,borderColor:color,}}
            >
              {children}
            </button>
          );
  }
}

export default Button;
