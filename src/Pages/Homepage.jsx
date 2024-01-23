import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NavBar from "./NavBar";

const HomePage = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login", { replace: true });
    }

    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://sanjaikannan-stackoverflow-clone.onrender.com/questions/get",
          {
            method: "GET",
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setQuestions(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setErr("Error fetching data. Please try again later.");
      }
    };

    fetchData();
  }, [navigate]);

  const handleAskQuestion = () => {
    navigate("/AskQuestion");
  };

  const handleQuestionClick = (questionId) => {
    navigate(`/PostAnswer/${questionId}`);
  };

  return (
    <>
      <NavBar />
      <br />
      <div className="container mx-auto p-4 lg:p-8">
        <button
          onClick={handleAskQuestion}
          className="bg-blue-800 text-white py-2 px-4 my-4 w-full lg:w-auto "
        >
          Ask Question
        </button>
        <h4 className="text-2xl md:text-4xl mt-8 mb-4">TOP QUESTIONS</h4>
        <ul>
          {questions.map((question, index) => (
            <div key={question._id}>
              <li
                onClick={() => handleQuestionClick(question._id)}
                className="border-b border-gray-300 py-4 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="flex items-center space-x-4 mb-4 md:mb-0">
                    <div className="flex flex-col items-center justify-center p-2 border-r border-2 border-orange-500">
                      <span className="text-lg md:text-2xl font-bold">
                        {question.voteCount}
                      </span>
                      <span className="text-xs">Votes</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 border-r border-2 border-orange-500">
                      <span className="text-lg md:text-2xl font-bold">
                        {question.answers.length}
                      </span>
                      <span className="text-xs">Answers</span>
                    </div>
                  </div>
                  <div className="flex-grow p-2">
                    <h6 className="text-lg md:text-xl font-semibold mb-2">
                      {question.questionTitle}
                    </h6>
                    <p className="text-sm md:text-base mb-2">
                      {question.questionBody}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {question.questionTags.map((tag, tagIndex) => (
                          <button
                            key={tagIndex}
                            className="bg-gray-200 text-black py-1 px-1  text-sm md:text-sm"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                      <p className="text-xs md:text-sm">
                        Asked on: {new Date(question.askedOn).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              {index < questions.length - 1 && <hr className="my-4" />}
            </div>
          ))}
        </ul>
        {err && <p className="text-red-500">{err}</p>}
      </div>

      {/* footer section */}
      <footer className="footer bg-gray-100 text-black">
        <div className="container mx-auto py-8">
          <div className="footer-content flex items-center justify-between">
            <div className="footer-icon">
              <i className="fab fa-stack-overflow text-3xl"></i>
            </div>

            <div className="footer-nav flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="footer-nav-col mb-4 md:mb-0">
                  <div className="footer-links-title">
                    <div className="text-xl text-grey font-semibold">
                      <span className=" text-amber-500 font-bold">Stack </span>
                      OverFlow
                    </div>
                  </div>
                  <ul className="footer-links">
                    <li className="footer-link-item">
                      <a href="#" className="footer-link">
                        Questions
                      </a>
                    </li>
                    <li className="footer-link-item">
                      <a href="#" className="footer-link">
                        Jobs
                      </a>
                    </li>
                    <li className="footer-link-item">
                      <a href="#" className="footer-link">
                        Developer Jobs Directory
                      </a>
                    </li>
                    <li className="footer-link-item">
                      <a href="#" className="footer-link">
                        Salary Calculator
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-another-links">
              <div className="social-media">
                <ul className="flex items-center space-x-4">
                  <li>
                    <a href="#" className="text-black">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-black">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div className="copyright text-sm">
                <p>
                  site design / logo © 2023 Stack Exchange Inc; user
                  contributions licensed under{" "}
                  <a href="#" className="text-amber-500 hover:underline">
                    cc by-sa
                  </a>
                  . rev 2023.12.22.12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
