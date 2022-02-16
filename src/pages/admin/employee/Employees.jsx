import React from 'react';
import {Table, Button} from 'react-bootstrap';
import ModalContainer from '../../../components/modals/ModalContainer';

const Employees = () => {

    const [modalShow, setModalShow] = React.useState(false);

    const OpenModal=()=>{
            
    }

    return (

        <>

            <div>
            <Button variant="primary" onClick={() => setModalShow(true)}>Add New Employee</Button>{' '}
            </div>

            <h2>Employees</h2>

            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>


<ModalContainer title="Add Employee" show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}

export default Employees;
