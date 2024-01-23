import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import NavBar from "./NavBar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const Navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!userId || !token) {
      Navigate("/Login", { replace: true });
    } else {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://sanjaikannan-stackoverflow-clone.onrender.com/user/getAllUsers",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "x-auth-token": token,
              },
            }
          );

          if (response.ok) {
            const userData = await response.json();
            setUsers(userData);
          } else {
            console.error("Failed to fetch users data.");
          }
        } catch (error) {
          console.error("Error fetching users data:", error);
        }
      };

      fetchData();
    }
  }, [Navigate, userId, token]);

  return (
    <>
      <NavBar />
      <br />
      <br />
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side (Content) */}
          <div>
            <h4 className="text-4xl mb-4">Users</h4>
            <p className="mb-4">
              A user is a person who asks, answers, and participates in the
              Stack Overflow community. Get to know your fellow developers!
            </p>
          </div>

          {/* Right side (Users) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {users.map((user) => (
              <div key={user._id} className="mb-4">
                <div className="bg-white p-4 rounded-md shadow-md">
                  <h6 className="text-xl font-semibold">Name: {user.name}</h6>
                  <p className="mb-2">About: {user.about}</p>
                  <p>Joined On: {new Date(user.joinedOn).toLocaleString()}</p>
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

export default Users;
