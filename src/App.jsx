import { Header, Main } from "./components";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`bg-light-bg max-w-[1440px] mx-auto dark:bg-dark-bg ${
        theme === "Dark" && `dark`
      }`}
    >
      <Header />
      <Main />
    </div>
  );
}

export default App;
