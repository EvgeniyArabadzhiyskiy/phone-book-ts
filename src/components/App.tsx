import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import userContacts from './userContacts';
import Section from "./Section/Section";
import Container from "./Container/Container";
import PhoneForm from "./PhoneForm/PhoneForm";
import ContactList from "./ContactList/ContactList";
import FilterContacts from "./FilterContacts/FilterContacts";

// import {  useDispatch} from "react-redux";
// import { useAppDispatch, useAppSelector } from "../hooks/hookRedux";
// import { useEffect } from "react";
// import { fetchAllContacts } from "../redux/contacts/contacts-operations";
// import { AsyncThunk } from "@reduxjs/toolkit";



// interface IContactData {
//   id: string;
//   name: string;
//   number: string;
//   favorites: boolean;
// }



const App = () => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   const fetchContacts: any = fetchAllContacts;

  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const allContacs = useAppSelector((state) => state.phomebook.contacts);
  // console.log("REDUX STATE", allContacs);
  return (
    <div>
      <Container>
        <Section title="Phonebook">
          <PhoneForm />
        </Section>

        <Section title="Find contacts by name">
          <FilterContacts />
        </Section>

        <Section title="Contacts">
          <ContactList />
        </Section>
      </Container>
      <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
    </div>
  );
};

export default App;
