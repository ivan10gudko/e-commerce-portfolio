import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
function AttributeSelectorTitle({isOpen,setIsOpen,selectedAttr,children}) {
    return (<div
        className="flex items-center justify-between py-4 cursor-pointer"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="font-semibold">{children}</span>
        <div>
          <span className="text-black/40 text-sm">{selectedAttr}</span>
          <ArrowDropUpIcon
            className={`transition-transform duration-500 ease-out delay-75 ${
              isOpen ? "rotate-180 " : "rotate-0"
            }`}
          />
        </div>
      </div>  );
}

export default AttributeSelectorTitle;