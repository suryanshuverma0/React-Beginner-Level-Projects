import { useState, useEffect } from "react";
import Loader from "../components/Loader";
const AdviceGenerator = () => {
  const [loading, setLoading] = useState(true);
  const [advice, setAdvice] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.adviceslip.com/advice`);

      const data = await response.json();
      console.log(data.slip.advice);
      setAdvice(data.slip.advice);
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
          <div className="flex justify-center items-center flex-col gap h-[80vh] ">
            <div className="bg-orange-200 text-black font-bold">
              <h1 className="font-bold text-2xl p-16 justify italic">{advice}</h1>
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

export default AdviceGenerator;
