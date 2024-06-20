import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchFAQ } from '../redux/actions';
import { Button, Form } from 'react-bootstrap';
import AddFAQModal from './AddFAQModal';

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [show, setShow] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    dispatch(searchFAQ(query));
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="header d-flex align-items-center justify-content-between py-3">
        <h1>FAQ App</h1>
        <div>
          <Form.Control
            type="text"
            placeholder="Search FAQs"
            value={searchQuery}
            onChange={handleSearch}
            className="d-inline-block w-auto mr-2"
          />
          <Button variant="outline-secondary" onClick={() => setSearchQuery('')}>
            Clear
          </Button>
          <Button variant="primary" onClick={handleShow} className="ml-2">
            Add
          </Button>
        </div>
      </div>
      <AddFAQModal show={show} handleClose={handleClose} />
    </>
  );
};

export default Header;
