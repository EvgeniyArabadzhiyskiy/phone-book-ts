import ContactItem from "../ContactItem/ContactItem";
import { Box } from "../Box/Box";

import { useAppSelector } from "../../hooks/hookRedux";
import { useAppDispatch } from "../../hooks/hookRedux";
import { useEffect } from "react";
import {
  deleteContact,
  fetchAllContacts,
  toggleFavorit,
} from "../../redux/contacts/contacts-operations";

interface IFavorite {
  id: string;
  favorites: boolean;
}

const ContactList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(" IS STATE JUMP");

    dispatch(fetchAllContacts());
  }, [dispatch]);

  const filtredContacts = useAppSelector((state) => state.phomebook.contacts);
  console.log("REDUX STATE", filtredContacts);

  //   const dispatch = useDispatch();
  //   const filtredContacts = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteContact = async (id: string) => {
    await dispatch(deleteContact(id));
  };

  const toggleFavoritContact = ({ id, favorites }: IFavorite) => {
    dispatch(toggleFavorit({ id, favorites }));
  };

  return (
    <Box border="normal" p={4} as="ul">
      {filtredContacts.map(({ id, name, number, favorites }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            favorites={favorites}
            onDeleteContact={() => onDeleteContact(id)}
            toggleFavoritContact={() => toggleFavoritContact({ id, favorites })}
          />
        );
      })}
    </Box>
  );
};

export default ContactList;
