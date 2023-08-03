import { useEffect, useState } from "react";
import { Spin } from "antd";

const Loading = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHidden(true);
    }, 1000);
  }, []);

  return (
    <div
      style={{ zIndex: 9999 }}
      className={`${
        hidden ? "hidden" : ""
      } fixed inset-0 grid place-items-center backdrop-blur-md`}
    >
      <Spin size="large" />
    </div>
  );
};

export default Loading;
