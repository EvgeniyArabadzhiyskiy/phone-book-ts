import { StyledButton } from "./Button.styled";

interface IButton {
  type?: "button" | "submit" | undefined;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({ type, children, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  type: "button",
  children: null,
  onClick: () => null,
};

export default Button;
