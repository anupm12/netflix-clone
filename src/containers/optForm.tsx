import { OptForm } from "../components/index";

const OptFormContainer = () => {
  return (
    <OptForm>
      <form className="w-full">
        <div className="flex items-center py-2">
          <input
            className="bg-white border-none w-full text-gray-700 py-3 sm:py-5 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="email@example.com"
          />
          <button
            className="flex-shrink-0 bg-red-600 hover:bg-red-600 text-sm text-white py-3 sm:py-5 px-3 sm:px-10"
            type="button"
          >
            TRY IT NOW
          </button>
        </div>
      </form>
    </OptForm>
  );
};
export default OptFormContainer;
