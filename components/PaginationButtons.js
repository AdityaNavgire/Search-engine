import { useRouter } from "next/router";
import Link from "next/Link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function PaginationButtons() {
  const router = useRouter();
  console.log(router, "Number");
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link
          //   to={`/search?term=${router.query.start - 10}`}
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
        >
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
            <FaChevronLeft className="cursor-pointer" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      <Link
        // to={`/search?term=${router.query.start + 10}`}
        href={`/search?term=${router.query.term}&start=${startIndex + 10}`}
      >
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <FaChevronRight className="cursor-pointer" />
          <p>Next</p>
        </div>
      </Link>
    </div>
  );
}

export default PaginationButtons;
