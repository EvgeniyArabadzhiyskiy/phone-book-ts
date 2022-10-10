import Button from "../Button/Button";
import { Box } from "../Box/Box";
import { CheckBoxLabel, UserName, UserNumber } from "./ContactItem.styled";
import { AiFillHeart } from "react-icons/ai";

interface IContactItemProps {
  name: string;
  number: string;
  favorites: boolean;
  onDeleteContact: () => void;
  toggleFavoritContact: () => void;
}

const ContactItem: React.FC<IContactItemProps> = ({
  name,
  number,
  favorites,
  onDeleteContact,
  toggleFavoritContact,
}) => {
  return (
    <div>
      <Box
        mb={3}
        display="flex"
        justifyContent="space-around"
        textAlign="left"
        as="li"
      >
        <CheckBoxLabel>
          <input
            type="checkbox"
            checked={favorites}
            onChange={toggleFavoritContact}
          />
          <AiFillHeart />
        </CheckBoxLabel>

        <UserName>{name}:</UserName>
        <UserNumber>{number}</UserNumber>
        <Button onClick={onDeleteContact}>Delete</Button>
      </Box>
    </div>
  );
};

export default ContactItem;
