import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ import Link
import "./NavBar.css";

const links = [
  { name: "LIVE", path: "/live" },
  { name: "Blog", path: "/blog" },
  { name: "Community", path: "/community" },
];

const NavBar = () => {
  const [active, setActive] = useState("LIVE");

  return (
    <div className="containerNavbar">
      <nav>
        <h1 className="Logo">FootBull</h1>

        <ul className="PageNames">
          {links.map((link) => {
            const isActive = active === link.name;

            return (
              <li
                key={link.name}
                className="nav-item"
                onClick={() => setActive(link.name)}
              >
                <Link to={link.path}>
                  {link.name === "LIVE" ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <motion.span
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          backgroundColor: "#35d6d6",
                          display: "inline-block",
                          boxShadow: "0 0 8px #35d6d6",
                        }}
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <span>LIVE</span>
                    </div>
                  ) : (
                    link.name
                  )}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="underline"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
