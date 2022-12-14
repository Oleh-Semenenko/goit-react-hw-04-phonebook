import { FilterLabel, FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <FilterLabel>
    Find contacts by name:
    <FilterInput type="text" value={value} name="filter" onChange={onChange} />
  </FilterLabel>
);

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}