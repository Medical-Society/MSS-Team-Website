import React from "react";

interface IProps {
  page: number;
  pageCount: number;
  total: number;
  isLoading: boolean;
  onClickPrev: () => void;
  onClickNext: () => void;
}

const Paginator: React.FC<IProps> = ({
  isLoading,
  onClickNext,
  onClickPrev,
  page,
  pageCount,
  total,
}: IProps) => {
  return (
    <div className="flex flex-col items-center space-y-4 mx-auto">
      <p className="text-sm text-gray-600">
        Showing <span className="font-semibold">{page}</span> to{" "}
        <span className="font-semibold">{pageCount}</span> of{" "}
        <span className="font-semibold">{total}</span> Tasks
      </p>
      <div className="flex items-center justify-center space-x-4">
        <button
          type="button"
          className={`px-4 py-2 rounded-l-lg border border-gray-300 ${
            page === 1 || isLoading
              ? "text-gray-400 cursor-not-allowed"
              : "text-black hover:bg-gray-100"
          }`}
          disabled={page === 1 || isLoading}
          onClick={onClickPrev}
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Prev
        </button>

        <button
          type="button"
          className={`px-4 py-2 rounded-r-lg border border-gray-300 ${
            page === pageCount || isLoading
              ? "text-gray-400 cursor-not-allowed"
              : "text-black hover:bg-gray-100"
          }`}
          disabled={page === pageCount || isLoading}
          onClick={onClickNext}
        >
          Next
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Paginator;
