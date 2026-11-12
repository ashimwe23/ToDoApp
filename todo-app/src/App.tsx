
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="min-h-screen bg-[#191919] px-4 py-[22px]">

      <div className="mx-auto max-w-[1055px] rounded bg-white px-6 py-8 sm:px-16">

        
        <h1 className="mb-16 text-center text-6xl font-bold tracking-wide text-[#eeeeee] sm:text-7xl md:text-8xl">
          todos
        </h1>

        
        <div className="flex h-[72px] items-center rounded-full border border-gray-200 px-6 shadow-md sm:px-10">

          <input
            type="text"
            placeholder="Add todo..."
            className="w-full border-none bg-transparent text-xl text-gray-700 outline-none placeholder:text-gray-800"
          />

          <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white">
            <FontAwesomeIcon icon={faPlus} />
          </button>

        </div>

      </div>

    </div>
  )
}

export default App
