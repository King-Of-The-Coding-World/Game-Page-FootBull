import React, { useState } from "react";
import { motion } from "framer-motion";
import "./NavBar.css";

const links = ["🔴 LIVE", "Moments", "Trending"];

const NavBar = () => {
  const [active, setActive] = useState("🔴 LIVE");

  return (
    <div className="container">
      <nav>
        <ul className="Logo">
          <li>⚽ FootBull</li>
        </ul>

        <ul className="PageNames">
          {links.map((link) => (
            <li
              key={link}
              className="nav-item"
              onClick={() => setActive(link)}
            >
              <a href="#">{link}</a>

              {active === link && (
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
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;