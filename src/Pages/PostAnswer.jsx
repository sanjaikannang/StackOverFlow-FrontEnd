import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "./NavBar";

const PostAnswer = () => {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const [question, setQuestion] = useState(null);
  const [voteCount, setVoteCount] = useState(0);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    // Fetch the question data and vote count
    fetch(
      `https://sanjaikannan-stackoverflow-clone.onrender.com/questions/get`,
      {
        method: "GET",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch question data.");
        }
      })
      .then((data) => {
        // Find the question with the matching ID
        const selectedQuestion = data.find((q) => q._id === questionId);
        if (selectedQuestion) {
          setQuestion(selectedQuestion);
          setVoteCount(selectedQuestion.voteCount);
          setVoted(
            selectedQuestion.upVote.includes(localStorage.getItem("userId")) ||
              selectedQuestion.downVote.includes(localStorage.getItem("userId"))
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching question data:", error);
        setError("Error fetching question data. Please try again.");
      });
  }, [questionId]);

  const handlePostAnswer = () => {
    if (!answer || !questionId) {
      setErrorMessage("Please provide an answer!");
      return;
    }

    // Create a new answer object
    const newAnswer = {
      answerBody: answer,
    };

    // Send a POST request to post the answer
    fetch(
      `https://sanjaikannan-stackoverflow-clone.onrender.com/answer/post/${questionId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
        body: JSON.stringify(newAnswer),
      }
    )
      .then((response) => {
        if (response.ok) {
          // Answer posted successfully, clear the answer field and show a success message
          setAnswer("");
          setSuccessMessage("Answer posted successfully!");
          setErrorMessage(null); // Clear any previous error message
        } else {
          // Handle errors, e.g., show an error message
          setErrorMessage("Failed to post answer. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error posting answer:", error);
        // Handle errors, e.g., show an error message
        setErrorMessage("Error posting answer. Please try again.");
      });
  };

  const handleVote = (voteType) => {
    if (!voted) {
      // Send a PATCH request to register the vote
      fetch(
        `https://sanjaikannan-stackoverflow-clone.onrender.com/questions/vote/${questionId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
          },
          body: JSON.stringify({ value: voteType }),
        }
      )
        .then((response) => {
          if (response.ok) {
            // Vote registered successfully, update the vote count and set voted to true
            setVoteCount(voteType === "upVote" ? voteCount + 1 : voteCount - 1);
            setVoted(true);

            if (voteType === "upVote") {
              alert(
                `You successfully upvoted this question. Current vote count: ${
                  voteCount + 1
                }`
              );
            } else {
              alert(
                `You successfully downvoted this question. Current vote count: ${
                  voteCount - 1
                }`
              );
            }
          } else {
            // Handle errors, e.g., show an error message
            setErrorMessage("Failed to vote. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error voting:", error);
          // Handle errors, e.g., show an error message
          setErrorMessage("Error voting. Please try again.");
        });
    } else {
      alert("You have already voted for this question.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-8">
        <div className="bg-white p-4 md:p-8 mb-8 rounded-md shadow-md">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <button
                onClick={() => handleVote("upVote")}
                disabled={voted}
                className={`bg-blue-900 text-white py-2 px-4 ${
                  voted ? "cursor-not-allowed" : "hover:bg-blue-700"
                }`}
              >
                Upvote
              </button>
              <span className="text-xl mx-4">{voteCount}</span>
              <button
                onClick={() => handleVote("downVote")}
                disabled={voted}
                className={`bg-blue-900 text-white py-2 px-4 ${
                  voted ? "cursor-not-allowed" : "hover:bg-blue-700"
                }`}
              >
                Downvote
              </button>
            </div>
            <div className="flex-grow">
              <h1 className="text-2xl md:text-4xl font-semibold mb-4">
                {question && question.questionTitle}
              </h1>
              <p className="text-gray-600">
                {question && question.questionBody}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 md:p-8 mb-8 rounded-md shadow-md">
          <h2 className="text-2xl md:text-3xl mb-4">
            {question && question.answers
              ? `${question.answers.length} Answers`
              : "No Answers"}
          </h2>
          <ul>
            {question &&
              question.answers &&
              question.answers.map((answer, index) => (
                <li key={answer._id} className="mb-4">
                  <p className="text-gray-800">{`Answer ${index + 1}: ${
                    answer.answerBody
                  }`}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="bg-white p-4 md:p-8 rounded-md shadow-md">
          <h2 className="text-2xl md:text-3xl text-center mb-4">
            Post Your Answer
          </h2>
          <div className="mb-4">
            <textarea
              className="w-full border border-gray-300 p-2"
              placeholder="Your Answer"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows="4"
            />
          </div>
          <div className="mb-4">
            <button
              onClick={handlePostAnswer}
              className="bg-amber-500 text-white py-2 px-4 w-full hover:bg-amber-700"
            >
              Post Answer
            </button>
          </div>
          <div className="mb-4">
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
          </div>
        </div>
      </div>
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

export default PostAnswer;
