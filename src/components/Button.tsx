import React from "react";

const Button = ({
  buttonType,
  buttonText,
  onClickHandler,
}: {
  buttonType: string;
  buttonText: string;
  onClickHandler?: any;
}) => {
  const renderButton = () => {
    if (buttonType === "next") {
      return (
        <button
          type="submit"
          className={
            "h-11 px-6 inline-block bg-emerald-400 font-semibold text-white rounded-md"
          }
        >
          {buttonText}
        </button>
      );
    } else if (buttonType === "back") {
      return (
        <button
          type="button"
          className={
            "h-11 px-6 inline-block bg-emerald-200 font-semibold text-black rounded-md"
          }
          onClick={onClickHandler}
        >
          {buttonText}
        </button>
      );
    } else {
      return (
        <button
          type="submit"
          className={
            "h-11 px-6 inline-block bg-blue-600 font-semibold text-white rounded-md"
          }
          onClick={onClickHandler}
        >
          {buttonText}
        </button>
      );
    }
  };
  return <div className="flex justify-end">{renderButton()}</div>;
};

export default Button;
