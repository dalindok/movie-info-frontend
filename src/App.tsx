import { AuthProvider } from "./contexts/UserContext";
import RouteNavigation from "./routes/routes";

function App() {
  return (
    <AuthProvider>
      <RouteNavigation />;
    </AuthProvider>
  );
}

export default App;
