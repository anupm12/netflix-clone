import { OptForm } from "../components/index";

const OptFormContainer = () => {
  return (
    <OptForm>
      <form className="w-full">
        <div className="flex items-center py-2">
          <input
            className="bg-white border-none w-3/4 h-12 sm:h-16 text-gray-700 py-3 sm:py-5 px-2 focus:outline-none"
            type="text"
            placeholder="Email address"
          />
          <button
            className="bg-red-600 hover:bg-red-600 w-1/3 h-12 sm:h-16 text-xs sm:text-lg font-semibold text-white"
            type="button"
          >
            GET STARTED
          </button>
        </div>
      </form>
    </OptForm>
  );
};
export default OptFormContainer;
