import { StyledInput } from './Filtercontacts.styled';

// import { useDispatch, useSelector } from 'react-redux';
// import contactsActions from 'redux/contacts/contacts-actions';
// import { contactsSelectors } from 'redux/contacts/contacts-selectors';




const FilterContacts: React.FC = () => {
//   const dispatch = useDispatch();
//   const filterValue = useSelector(contactsSelectors.getFilter);

  const onChangeInput = (e: any) => {
    // dispatch(contactsActions.filteredContacts(e.target.value));
  };

  return (
    <div>
      <StyledInput
        type="text"
        name="search"
        // value={filterValue}
        onChange={onChangeInput}
      />
    </div>
  );
};

export default FilterContacts;