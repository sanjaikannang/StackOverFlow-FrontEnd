import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

const Tags = () => {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/Login", { replace: true });
    }
    const fetchTags = async () => {
      try {
        const response = await fetch(
          "https://sanjaikannan-stackoverflow-clone.onrender.com/tags/tags",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setTags(data);
        } else {
          setError("Failed to fetch tags");
        }
      } catch (error) {
        setError("Error fetching tags: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, []);

  return (
    <>
      <NavBar />
      <br />
      <br />
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side (Content) */}
          <div>
            <h4 className="text-4xl mb-4">Tags</h4>
            <p className="mb-4">
              A tag is a keyword or label that categorizes your question with
              other, similar questions. Using the right tags makes it easier for
              others to find and answer your question.
            </p>
          </div>

          {/* Right side (Tags) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tags.map((tag, index) => (
              <div key={index} className="mb-4">
                <div className="bg-white p-4 rounded-md shadow-md text-center cursor-pointer">
                  <p>{tag}</p>
                </div>
              </div>
            ))}
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

export default Tags;
