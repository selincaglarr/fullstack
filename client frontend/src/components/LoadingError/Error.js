import React from "react";

const Message = ({ variant, children }) => {
  return <div className={`alert ${variant}`} style={{background:"rgba(101, 52, 78, 0.07)", border:"none"}}>{children}</div>;
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message;
