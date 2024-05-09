import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Welcome!</h1>
      <p className="text-lg text-gray-700 mb-4">Ready to start your journey to a better you?</p>
      <p className="text-lg text-gray-700 mb-8">Let's inspire and motivate each other!</p>
      <div className="flex justify-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={() => navigate("/quotes")}
        >
          Get Quotes
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
          onClick={() => navigate("/advices")}
        >
          Get Advice
        </button>
      </div>
    </div>
  );
}

export default Welcome;
