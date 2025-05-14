function Fieldset({title,children}) {
    return (<div className="my-4">
        <h2 className="font-semibold font-urbanist text-xl">{title}</h2>
        {children}
    </div> );
}

export default Fieldset;