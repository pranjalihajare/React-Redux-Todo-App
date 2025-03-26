import "./css/main.css";
import DisplayTodo from "./Components/DisplayTodo";
import Todos from "./Components/Todos";
import { motion } from "framer-motion";
import Login from "./Components/Login";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Logout from "./Components/Logout";

function App() {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <div className="App">
      {user ? (
        <>
          <Logout />
          <motion.h1
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            Todo App
          </motion.h1>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <Todos />
            <DisplayTodo />
          </motion.div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
