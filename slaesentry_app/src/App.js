import MainPage from './Pages/DetailsPage'
import { Toaster } from "react-hot-toast";


function App() {
  return (
    
    <div className="bg-gradient-to-t from-slate-500 via-purple-500 to-slate-500">
            <Toaster position="bottom-center" reverseOrder={false} />

      <MainPage />
    </div>
  );
}

export default App;
