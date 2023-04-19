import { lazy, useContext } from "react";
const Login = lazy(() => import("./auth/Login"));
const EnterRoom = lazy(() => import("./auth/EnterRoom"));
const ClassStarts = lazy(() => import("./component/ClassStarts"));
const QuizPage = lazy(() => import("./component/QuizPage"));
const ReviewAnswers = lazy(() => import("./component/ReviewAnswers"));
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./component/ProtectedRoute";
import { AuthContext } from "./Context/authContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/enterroom"
            element={
              <ProtectedRoute user={user}>
                <EnterRoom />
              </ProtectedRoute>
            }
          />
          <Route
            path="/classstarts"
            element={
              <ProtectedRoute user={user}>
                <ClassStarts />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quizpage"
            element={
              <ProtectedRoute user={user}>
                <QuizPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reviewanswers"
            element={
              <ProtectedRoute user={user}>
                <ReviewAnswers />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
