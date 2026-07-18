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
                <Link to={link.path} className="nav-link">
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
                          backgroundColor: "#ff7f11",
                          display: "inline-block",
                          boxShadow: "0 0 8px #ff7f11",
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
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
