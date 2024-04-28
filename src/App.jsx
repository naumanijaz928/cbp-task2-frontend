import Routes from "./core/routes";
import { AuthProvider } from "./core/store/authContext";

 function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
