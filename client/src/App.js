import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import Cartscreen from "./screens/Cartscreen";
import Loginscreen from "./screens/Loginscreen";
import Registerscreen from "./screens/Registerscreen";
import Success from "./components/Success";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import UsersList from "./screens/UsersList";
import OrdersList from "./screens/OrdersList";
import PizzasList from "./screens/PizzasList";
import AddPizza from "./screens/AddPizza";
import Editpizza from "./screens/Editpizza";
import Firstscreen from "./screens/Firstscreen";
import Udbhogscreen from "./screens/Udbhogscreen";
import Bdscreen from "./screens/Bdscreen";
import Olympiadscreen from "./screens/Olympiadscreen";
import GetinspiredScreen from "./screens/GetinspiredScreen";
import AdminPanel from "./screens/AdminPanel";
import MyItems from "./screens/MyItems";
import Quiz from "./components/Quiz";
import QuestionPage from "./components/QuestionPage";
import SubscriptionList from "./screens/SubscriptionList";
import QuizsList from "./screens/QuizsList";
import AddQuiz from "./screens/AddQuiz";
import Editquiz from "./screens/Editquiz";
import Schoolcodes from "./screens/Schoolcodes";
import SchoolcodesList from "./screens/SchoolcodesList";

import MiddleScreen from "./screens/MiddleScreen";
import QuestionPageDesktop from "./components/QuestionPageDesktop";
import { useEffect, useState } from "react";
import SubjectsList from "./screens/SubjectsList";
import Subjects from "./screens/Subjects";
import DifficultysList from "./screens/DifficultysList";
import Difficultys from "./screens/Difficultys";
import ClassssList from "./screens/ClassssList";
import Classss from "./screens/Classss";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Firstscreen />} />
          <Route path="/middlescreen" element={<MiddleScreen />} />
          <Route path="/udbhog" element={<Udbhogscreen />} />
          <Route path="/bauddhadakshata" element={<Bdscreen />} />
          <Route path="/olympiad" element={<Olympiadscreen />} />
          <Route path="/getinspired" element={<GetinspiredScreen />} />
          <Route path="/myitems" element={<MyItems />} />
          <Route path="/sample" element={<Homescreen />} />
          <Route path="/cart" element={<Cartscreen />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/register" element={<Registerscreen />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route
            path="/questions"
            element={isMobile ? <QuestionPage /> : <QuestionPageDesktop />}
          />
          <Route
            path="/payment-success"
            element={<Success success="Payment Successful" />}
          />
          <Route path="/orders" element={<OrderScreen />} />
          {/* <Route path="/admin" element={<AdminScreen />}>
            <Route index element={<UsersList />} />
            <Route path="/adminpanel/userlist" element={<UsersList />} />
            <Route path="/admin/orderslist" element={<OrdersList />} />
            <Route path="/admin/pizzaslist" element={<PizzasList />} />
            <Route path="/admin/addpizza" element={<AddPizza />} />
            <Route path="/admin/editpizza/:pizzaid" element={<Editpizza />} />
          </Route> */}

          <Route path="/adminpanel" element={<AdminPanel />}>
            <Route index element={<UsersList />} />
            <Route path="/adminpanel/userlist" element={<UsersList />} />
            <Route
              path="/adminpanel/subscriptionlist"
              element={<SubscriptionList />}
            />
            <Route path="/adminpanel/quizslist" element={<QuizsList />} />
            <Route path="/adminpanel/addquiz" element={<AddQuiz />} />
            <Route path="/adminpanel/editquiz/:quizid" element={<Editquiz />} />
            <Route path="/adminpanel/schoolcodes" element={<Schoolcodes />} />
            <Route
              path="/adminpanel/schoolcodeslist"
              element={<SchoolcodesList />}
            />
            <Route path="/adminpanel/subjects" element={<Subjects />} />
            <Route path="/adminpanel/subjectslist" element={<SubjectsList />} />

            <Route path="/adminpanel/difficultys" element={<Difficultys />} />
            <Route
              path="/adminpanel/difficultyslist"
              element={<DifficultysList />}
            />
            <Route path="/adminpanel/classss" element={<Classss />} />
            <Route path="/adminpanel/classsslist" element={<ClassssList />} />
            <Route path="/adminpanel/editquiz/:quizid" element={<Editquiz />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
