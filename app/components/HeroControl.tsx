import { ChevronLeft, ChevronRight } from "lucide-react";

export const DotButton = ({
  selected,
  onClick,
}: {
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
      selected
        ? "bg-primary"
        : "bg-secondary-grey dark:bg-primary-dark hover:bg-secondary-grey2"
    }`}
    onClick={onClick}
  />
);

export const NavButton = ({
  onClick,
  disabled,
  direction,
}: {
  onClick: () => void;
  disabled: boolean;
  direction: "prev" | "next";
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="bg-secondary-grey dark:bg-white rounded-full size-4 cursor-pointer hover:bg-secondary-grey2 transition-colors flex justify-center items-center"
  >
    {direction === "prev" ? (
      <ChevronLeft className="w-4 h-4 text-primary-dark" />
    ) : (
      <ChevronRight className="w-4 h-4 text-primary-dark" />
    )}
  </button>
);
