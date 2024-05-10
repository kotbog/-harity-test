import React from "react";

const Input = React.forwardRef(({label,labelStyles, inputStyles, ...props}, ref) => {
    return <div className={`flex flex-col items-start px-2 py-4 grow`}>
        <label className={`text-gray font-bold ${labelStyles}`}>{label}</label>
        <input ref={ref} type="text" className={`bg-light-gray p-2 w-full rounded ${inputStyles}`} {...props}/>
    </div>
})
export default Input;