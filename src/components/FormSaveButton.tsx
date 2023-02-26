import Link from "next/link";

const FormSaveButton = ({ isFormChanged }: { isFormChanged: boolean }) => {
  return (
    <div className="flex gap-2  my-8 justify-end">
      <Link
        href="/"
        className="bg-zinc-100 text-sm text-zinc-900 rounded-lg py-2.5 font-semibold px-4"
      >
        Cancel
      </Link>

      <button
        type="submit"
        disabled={!isFormChanged}
        className={`text-white ${
          isFormChanged ? "bg-primary-600" : "bg-primary-600/50"
        } rounded-lg py-2.5 font-semibold px-4 text-sm`}
      >
        Save Changes
      </button>
    </div>
  );
};

export default FormSaveButton;
