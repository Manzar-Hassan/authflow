import toast from "react-hot-toast";
import ErrorLogo from "../svgs/ErrorLogo";
import SuccessLogo from "../svgs/SuccessLogo";
import { Toaster } from "react-hot-toast";

export const successToast = (message: string) => {
  toast.custom(
    <div
      id="toast-message-cta"
      className="w-full max-w-xs p-4 text-gray-200 bg-green-50 rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-400 border-l-4 border-green-500"
      role="alert"
    >
      <div className="flex">
        <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <SuccessLogo />
          <span className="sr-only">Check icon</span>
        </div>

        <div className="ms-3 text-sm font-normal">
          <span className="mb-1 text-sm font-semibold text-gray-700 dark:text-white">
            Success
          </span>
          <div className="mb-2 text-sm font-semibold text-gray-500 ">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};

export const errorToast = (message: string) => {
  toast.custom(
    <div
      id="toast-message-cta"
      className="w-full max-w-xs p-4 text-gray-200 bg-red-50 rounded-lg shadow-sm dark:bg-gray-800 dark:text-gray-400 border-l-4 border-red-500"
      role="alert"
    >
      <div className="flex">
        <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
          <ErrorLogo />
          <span className="sr-only">Error icon</span>
        </div>

        <div className="ms-3 text-sm font-normal">
          <span className="mb-1 text-sm font-semibold text-gray-700 dark:text-white">
            Error !!
          </span>
          <div className="mb-2 text-sm font-semibold text-gray-500 ">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CustomToast() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 3000,
        style: {
          borderRadius: "8px",
          background: "#333",
          color: "#fff",
          animation:
            "fadeSlideIn 0.5s ease-in-out, fadeOut 0.5s ease-in-out 2.5s forwards",
        },
      }}
    />
  );
}
