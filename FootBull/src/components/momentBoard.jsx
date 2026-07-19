import { useState, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";

import "./momentBoard.css";

function MomentItem({ title, description }) {
  const [reactions, setReactions] = useState({ fire: 0, heart: 0, laugh: 0 });

  const handleReact = (type) => {
    setReactions((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const total = reactions.fire + reactions.heart + reactions.laugh;

  return (
    <div className="moment-item">
      <h4 className="moment-title-text">{title}</h4>
      <p className="moment-description">{description}</p>
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

export default function MomentBoard(props) {
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
            <MomentItem title={props.trendingTexts[0]} description={props.trendingDescrip[0]} />
            <MomentItem title={props.trendingTexts[1]} description={props.trendingDescrip[1]} />
            <MomentItem title={props.trendingTexts[2]} description={props.trendingDescrip[2]} />
          </div>
        )}

        {activeTab === "Latest" && (
          <div className="moment-list">
            <MomentItem title={props.latestTexts[0]} description={props.latestDescrip[0]}/>
            <MomentItem title={props.latestTexts[1]} description={props.latestDescrip[1]}/>
            <MomentItem title={props.latestTexts[2]} description={props.latestDescrip[2]}/>
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
