import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );

  // return (
  //   <div>
  //     <Button onClick={() => onClose((show) => !show)}>Add new cabin</Button>
  //     {isOpenModal && (
  //       <Modal onClose={onClose}>
  //         <CreateCabinForm onCloseModal={onClose} />
  //       </Modal>
  //     )}
  //   </div>
  // );
}

export default AddCabin;
