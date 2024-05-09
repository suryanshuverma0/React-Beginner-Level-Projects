import { useEffect, useState } from "react";
import Loader from "../components/Loader";
const QuoteGenerator = () => {
  const [quotesContent, setQuotesContent] = useState("");
  const [quotesAuthor, setQuotesAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log(data.content);
      console.log(data.author);
      setQuotesContent(data.content);
      setQuotesAuthor(data.author);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="flex justify-center flex-col items-center h-[80vh] w-1/2 ml-48 mt-12">
            <div className="bg-orange-200 rounded-lg text-black font-bold flex justify-center items-center flex-col gap-8 p-4">
              <h2 className="text-xxl">{quotesContent}</h2>
              <h1 className="text-2xl italic">{quotesAuthor}</h1>
            </div>
            <button
              className="text-2xl p-3 bg-green-500 text-black text-bold mt-12 rounded-lg hover:bg-green-600"
              onClick={fetchData}
              type="button"
            >
              Get Quotes
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default QuoteGenerator;
