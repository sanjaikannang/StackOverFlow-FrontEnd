import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const MyProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [questions, setQuestions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    about: "",
  });
  const userId = localStorage.getItem("userId");
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/Login");
      return;
    }

    // Fetch user profile
    fetch(
      "https://sanjaikannan-stackoverflow-clone.onrender.com/user/profile",
      {
        method: "GET",
        headers: {
          "x-auth-token": token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });

    // Fetch user's questions
    fetch(
      "https://sanjaikannan-stackoverflow-clone.onrender.com/user/questions",
      {
        method: "GET",
        headers: {
          "x-auth-token": token,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => {
        console.error("Error fetching user questions:", error);
      });
  }, [navigate, userId]);

  const handleDeleteQuestion = (questionId) => {
    const token = localStorage.getItem("token");

    // Send a request to delete the question with the given questionId
    fetch(
      `https://sanjaikannan-stackoverflow-clone.onrender.com/questions/delete/${questionId}`,
      {
        method: "DELETE",
        headers: {
          "x-auth-token": token,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          // Question deleted successfully, update the state
          setQuestions((prevQuestions) =>
            prevQuestions.filter((question) => question._id !== questionId)
          );
        } else {
          // Handle error
          console.error("Error deleting question");
        }
      })
      .catch((error) => {
        console.error("Error deleting question:", error);
      });
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleUpdateProfile = async () => {
    const token = localStorage.getItem("token");

    // Send a request to update the user's profile
    try {
      const response = await fetch(
        `https://sanjaikannan-stackoverflow-clone.onrender.com/user/update/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (response.ok) {
        setUpdateSuccess(true);
        setIsEditing(false);
      } else {
        // Handle the error
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <>
      <NavBar />
      <br />
      <div className="container mx-auto">
        <div className="text-center">
          <h4 className="text-4xl mt-8 mb-4">My Profile</h4>
          <br />
          <br />
        </div>
        <div className="bg-gray-100 rounded-lg p-8 shadow-lg mb-8">
          <div className="text-center mb-4">
            <span className="font-bold">Name:</span> {user.name}
          </div>
          <div className="text-center mb-4">
            <span className="font-bold">About:</span> {user.about}
          </div>
          <div className="text-center">
            {!isEditing ? (
              <button
                className="bg-amber-500 text-white py-2 px-4  mt-4"
                onClick={handleEditProfile}
              >
                Edit Profile
              </button>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={updatedUser.name}
                  onChange={(e) =>
                    setUpdatedUser({
                      ...updatedUser,
                      name: e.target.value,
                    })
                  }
                  className="block w-full mb-4 border border-gray-300 p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="About"
                  value={updatedUser.about}
                  onChange={(e) =>
                    setUpdatedUser({
                      ...updatedUser,
                      about: e.target.value,
                    })
                  }
                  className="block w-full mb-4 border border-gray-300 p-2 rounded"
                />
                <button
                  className="bg-amber-500 text-white py-2 px-4 "
                  onClick={handleUpdateProfile}
                >
                  Update Profile
                </button>
              </>
            )}
            {updateSuccess && (
              <p className="text-green-500 mt-4">
                Profile updated successfully.
              </p>
            )}
          </div>
        </div>
        <div className="bg-gray-100 rounded-lg p-8 shadow-lg">
          <div className="text-center mb-4">
            <h6 className="text-xl">My Questions</h6>
          </div>
          {questions.map((question, index) => (
            <div key={question._id}>
              <hr className="my-4" />
              <div className="flex items-center justify-between">
                <div className="flex-grow">
                  <p className="text-lg">{question.questionTitle}</p>
                </div>
                <div>
                  <button
                    className="bg-amber-500 text-white py-1 px-2 "
                    onClick={() => handleDeleteQuestion(question._id)}
                  >
                    Delete Question
                  </button>
                </div>
              </div>
            </div>
          ))}
          <hr className="my-4" />
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

export default MyProfile;
