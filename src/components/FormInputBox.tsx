type PropsType = {
    label: string
    note?: string
    placeholder?: string
    type: "text" | "date" | "url" | "number"
    min?: string
    max?: string
    value?: string | number
    id: string
    name: string,
    focusBorderClr?: "border-zinc-900" | "border-primary-600"
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    required: boolean
}

const FormInputBox = ({ 
    label,
    note,
    placeholder,
    type,
    min,
    max,
    value,
    id,
    name,
    onChangeHandler,
    focusBorderClr = "border-zinc-900", 
    required
 }:PropsType) => {
    return(
        <div className="w-full flex flex-col gap-1">
            <label className="block font-semibold text-sm" htmlFor={id}>{label.charAt(0).toUpperCase() + label.slice(1)}</label>
            <input required={required} className={`block w-full px-3 py-3.5 rounded-lg border-2 border-zinc-100 focus:${focusBorderClr}`} onChange={(e) => onChangeHandler(e)} type={type} name={name} id={id} placeholder={placeholder && placeholder.charAt(0).toUpperCase() + placeholder.slice(1)} min={min} max={max} value={value}/>
            {note && <span className="text-zinc-500 text-base">{note}</span>}
        </div>
    )
}

export default FormInputBox;