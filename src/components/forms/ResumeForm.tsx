import Link from "next/link";

import FormInputBox from "../FormInputBox";

const ResumeForm = () => {
    const onSubmitHandler = (e: React.FormEvent) => {
        e.preventDefault()
    }
    
    return (
        <>
        <form onSubmit={onSubmitHandler}>
        <div className="flex gap-2">
        <Link href="/" className="bg-zinc-100 text-sm text-zinc-900 rounded-lg py-2.5 font-semibold px-4">Cancel</Link>

<button type="submit" className="cursor-pointer text-white bg-[#4F46E5] rounded-lg py-2.5 font-semibold px-4 text-sm">Save Changes</button>
            </div>
        </form>
        </>
    )
}

export default ResumeForm;