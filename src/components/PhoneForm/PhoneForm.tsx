import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, Zoom } from "react-toastify";

import Button from "../Button/Button";
// import { StyledInput } from '../Input/Input.styled';
import {
  FormLabel,
  StyledForm,
  //  StyledError
} from "./PhoneForm.styled";
import { useAppDispatch } from "../../hooks/hookRedux";
import { addContact } from "../../redux/contacts/contacts-operations";

// import { useDispatch, useSelector } from 'react-redux';
// import contactsActions from 'redux/contacts/contacts-actions';
// import { contactsSelectors } from 'redux/contacts/contacts-selectors';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

let contactShema = yup.object().shape({
  name: yup
    .string()
    .required("This is a required")
    .min(2, "Short name. Min name length 2 characters")
    .max(25, "Long name. Max name length 25 characters"),
  number: yup
    .string()
    .required("This is a required")
    .min(6, "Min number length 6 characters ")
    .max(20, "Max  number length 20 characters")
    .matches(phoneRegExp, "Phone number is not valid"),
});

const items = [{ id: "11", name: "Djon", number: "345", favorites: false }];

type FormValues = {
  name: string;
  number: string;
};

const PhoneForm = () => {
  //   const dispatch = useDispatch();
  //   const items = useSelector(contactsSelectors.getItems);

  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm<FormValues>({ resolver: yupResolver(contactShema) });

   const submitForm: SubmitHandler<FormValues> = async (data) => {
    // console.log("PhoneForm ~ data", data);

    const foundName = items.find((item) => item.name === data.name);

    if (foundName) {
      return toast.error(`${data.name} is alredy in contacts`, {
        position: "top-right",
        transition: Zoom,
      });
    }

    await dispatch(addContact(data));
    reset();
  };

  const onError = (err: any) => {
    if (err.name) {
      toast.warn(err.name.message, {
        position: "top-center",
      });
    }

    if (err.number) {
      toast.warn(err.number.message, {
        position: "top-center",
      });
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submitForm, onError)}>
      <FormLabel>
        Name
        <input
          type="text"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer."
          {...register("name")}
        />
        {/* {errors.name && <StyledError>{errors.name.message}</StyledError>} */}
      </FormLabel>

      <FormLabel>
        Number
        <input
          type="tel"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          {...register("number")}
        />
        {/* {errors.number && <StyledError>{errors.number.message}</StyledError>} */}
      </FormLabel>

      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
};

export default PhoneForm;
