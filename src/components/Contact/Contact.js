import { ContactItem, Text, DeleteBtn } from './Contact.styled';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactItem>
      <Text>{name}:</Text>
      <Text>{number}</Text>
      <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteBtn>
    </ContactItem>
  );
};

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}
