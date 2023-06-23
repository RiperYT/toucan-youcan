import classNames from "classnames";
import VisibilityChanger from "../shared/VisibilityChanger";
import { useState } from "react";

const Field = ({ password, className, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseEnter = () => {
    setShowPassword(true);
  };

  const handleMouseLeave = () => {
    setShowPassword(false);
  };

  const classes = classNames(
    "border bg-background-primary border-primary rounded-xl m-1",
    className
  );

  return (
    <div className="relative flex">
      <input
        type={password && !showPassword ? "password" : ""}
        className={classes}
        {...props}
      />
      {password && (
        <div className="absolute top-9 right-12">
          <VisibilityChanger
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      )}
    </div>
  );
};

export default Field;
