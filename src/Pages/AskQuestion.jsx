import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"; // Assuming the NavBar component is in the same directory
import { useNavigate } from "react-router-dom";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      Navigate("/Login");
    }
  }, [token, Navigate]);

  const handleAddQuestion = async () => {
    if (!questionTitle || !questionBody || !questionTags) {
      setError("Please enter the question title, question body, and tags.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(
        "https://sanjaikannan-stackoverflow-clone.onrender.com/questions/Ask",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({
            questionTitle,
            questionBody,
            questionTags: questionTags.split(",").map((tag) => tag.trim()),
          }),
        }
      );

      if (response.ok) {
        Navigate("/homepage");
      } else {
        const errorData = await response.json();
        setError("Failed to add the question: " + errorData.message);
      }
    } catch (error) {
      setError("Error adding the question: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <div className="flex flex-col justify-center items-center bg-gray-100 p-8 rounded-md shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Ask a New Question!</h4>
            <p className="mb-4">
              Writing a good question: You are ready to ask a
              programming-related question, and this form will help guide you
              through the process. Looking to ask a non-programming question?
              See the topics here to find a relevant site.
            </p>
            <p>
              Steps:
              <br />
              1. Summarize your problem in a one-line title.
              <br />
              2. Describe your problem in more detail.
              <br />
              3. Describe what you tried and what you expected to happen.
              <br />
              4. Add "tags" which help surface your question to members of the
              community.
              <br />
              5. Review your question and post it to the site.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center bg-white p-8 rounded-md shadow-md">
            <h5 className="text-xl font-semibold mb-4">Ask a Question</h5>
            {error && <p className="text-red-500 my-2">{error}</p>}
            <input
              type="text"
              className="w-full border border-gray-300 p-2 mb-4 rounded-md"
              placeholder="Question Title"
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
            />
            <textarea
              className="w-full border border-gray-300 p-2 mb-4 rounded-md"
              placeholder="Question Body"
              value={questionBody}
              onChange={(e) => setQuestionBody(e.target.value)}
              rows="4"
            ></textarea>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 mb-4 rounded-md"
              placeholder="Tags (comma-separated)"
              value={questionTags}
              onChange={(e) => setQuestionTags(e.target.value)}
            />
            <button
              className="w-full bg-amber-500 text-white p-2 "
              onClick={handleAddQuestion}
              disabled={loading}
            >
              {loading ? "Posting..." : "Post Question"}
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />

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

export default AskQuestion;
