const UnSavedDialogBox = () => {
  return (
    <div className="inset-0 sticky text-white bg-primary-600 rounded-lg py-2.5 font-semibold z-20 px-4 text-sm">
      You may have unsaved changes
      <button
        type="submit"
        className="cursor-pointer bg-white text-primary-600 rounded-lg py-2.5 font-semibold px-4 text-sm"
      >
        Save Changes
      </button>
    </div>
  );
};

export default UnSavedDialogBox;
