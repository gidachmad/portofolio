import NavIcon from './Components/NavIcon';
import Silhouette from './Components/Silhouette';

function App() {
  return (
    <div className="App relative font-press-start">
      <Silhouette />

      <ol className='flex bg-slate-400 fixed border-t-4 border-gray-800 bottom-0 p-2 w-full'>
        <NavIcon />
      </ol>
    </div>
  );
}

export default App;
