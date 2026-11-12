import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

function App() {
  // Sample todos to display on our page
  const todos = [
    "IAmHere",
    "reactjsexample.com",
    "A To do app developed using to consolidate your knowledge about React",
  ];

  return (
    <div className="min-h-screen bg-[#191919] flex items-center justify-center px-4 py-8">
      <div className="mx-auto max-w-263.75 rounded bg-white px-6 py-8 sm:px-16">
        {/* Todo heading */}
        <h1 className="mb-16 text-center text-6xl font-bold tracking-wide text-[#eeeeee] sm:text-7xl md:text-8xl">
          todos
        </h1>

        {/* Add todo input */}
        <div className="flex h-18 items-center rounded-full border border-gray-200 px-6 shadow-md sm:px-10">
          <input
            type="text"
            placeholder="Add todo..."
            className="w-full border-none bg-transparent text-xl text-gray-700 outline-none placeholder:text-gray-800"
          />

          <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        {/* Todo list */}
        <div className="mt-10">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="flex min-h-[95px] items-center gap-5 border-b border-gray-200 py-3"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                className="h-5 w-5 shrink-0 cursor-pointer accent-teal-600"
              />

              {/* Todo name */}
              <p className="flex-1 text-lg text-gray-600 sm:text-xl md:text-2xl">
                {todo}
              </p>

              {/* Delete button */}
              <button className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-gray-100 text-red-500">
                <FontAwesomeIcon icon={faTrash} size="lg" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
