import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";

import "./momentBoard.css";

function MomentItem({ text }) {
  const [reactions, setReactions] = useState({ fire: 0, heart: 0, laugh: 0 });

  const handleReact = (type) => {
    setReactions((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const total = reactions.fire + reactions.heart + reactions.laugh;

  return (
    <div className="moment-item">
      <p>{text}</p>
      <div className="moment-reactions">
        <span className="reaction-count">{total} reactions</span>
        <div className="reaction-buttons">
          <button onClick={() => handleReact("fire")}>🔥 {reactions.fire}</button>
          <button onClick={() => handleReact("heart")}>❤️ {reactions.heart}</button>
          <button onClick={() => handleReact("laugh")}>😂 {reactions.laugh}</button>
        </div>
      </div>
    </div>
  );
}

export default function MomentBoard() {
  const [activeTab, setActiveTab] = useState("Trending");
  const tabs = ["Trending", "Latest", "Create +"];

  const tabRefs = useRef({});
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) {
      const rect = el.getBoundingClientRect();
      const parentRect = el.parentNode.getBoundingClientRect();
      setHighlightStyle({
        left: rect.left - parentRect.left,
        width: rect.width,
      });
    }
  }, [activeTab]);

  return (
    <div className="moment-board">
      <h2 className="moment-title">Moments</h2>

      <div className="moment-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[tab] = el)}
            onClick={() => setActiveTab(tab)}
            className={`moment-tab ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}

        {/* Highlight box */}
        <motion.div
          className="moment-highlight"
          animate={highlightStyle}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div>

      <div className="moment-content">
        {activeTab === "Trending" && (
          <div className="moment-list">
            <MomentItem text="🔥 City’s 78’ Goal" />
            <MomentItem text="🚨 Madrid Red Card" />
            <MomentItem text="⚡ Haaland’s Dribble" />
          </div>
        )}

        {activeTab === "Latest" && (
          <div className="moment-list">
            <MomentItem text="⏱ Kickoff at Acrisure" />
            <MomentItem text="🔔 Half-time whistle" />
            <MomentItem text="📸 Fans celebrating" />
          </div>
        )}

        {activeTab === "Create +" && (
          <form className="moment-form">
            <input type="text" placeholder="Moment Title" />
            <textarea placeholder="Moment Description"></textarea>
            <button type="submit">Post Moment</button>
          </form>
        )}
      </div>
    </div>
  );
}
