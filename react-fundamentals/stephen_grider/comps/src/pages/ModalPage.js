import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  // To close the modal by clicking anywhere outside the modal or button in the modal
  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel leo
        nec odio consectetur luctus. Phasellus ut nibh sagittis, tincidunt elit
        in, convallis urna. Donec justo augue, gravida ultricies porttitor sed,
        interdum vitae leo. Vestibulum blandit ipsum quis elementum porttitor.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Mauris id massa a arcu ultrices suscipit a ac eros. Donec
        id mauris volutpat, feugiat lacus eget, vulputate nibh. Curabitur
        sollicitudin ac lectus sed ullamcorper. Quisque nec congue ligula. Duis
        nulla justo, vehicula a eros ac, fermentum ornare augue. Aenean blandit
        sem in laoreet venenatis. Integer efficitur quis mauris non tincidunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel leo
        nec odio consectetur luctus. Phasellus ut nibh sagittis, tincidunt elit
        in, convallis urna. Donec justo augue, gravida ultricies porttitor sed,
        interdum vitae leo. Vestibulum blandit ipsum quis elementum porttitor.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Mauris id massa a arcu ultrices suscipit a ac eros. Donec
        id mauris volutpat, feugiat lacus eget, vulputate nibh. Curabitur
        sollicitudin ac lectus sed ullamcorper. Quisque nec congue ligula. Duis
        nulla justo, vehicula a eros ac, fermentum ornare augue. Aenean blandit
        sem in laoreet venenatis. Integer efficitur quis mauris non tincidunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel leo
        nec odio consectetur luctus. Phasellus ut nibh sagittis, tincidunt elit
        in, convallis urna. Donec justo augue, gravida ultricies porttitor sed,
        interdum vitae leo. Vestibulum blandit ipsum quis elementum porttitor.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Mauris id massa a arcu ultrices suscipit a ac eros. Donec
        id mauris volutpat, feugiat lacus eget, vulputate nibh. Curabitur
        sollicitudin ac lectus sed ullamcorper. Quisque nec congue ligula. Duis
        nulla justo, vehicula a eros ac, fermentum ornare augue. Aenean blandit
        sem in laoreet venenatis. Integer efficitur quis mauris non tincidunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel leo
        nec odio consectetur luctus. Phasellus ut nibh sagittis, tincidunt elit
        in, convallis urna. Donec justo augue, gravida ultricies porttitor sed,
        interdum vitae leo. Vestibulum blandit ipsum quis elementum porttitor.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Mauris id massa a arcu ultrices suscipit a ac eros. Donec
        id mauris volutpat, feugiat lacus eget, vulputate nibh. Curabitur
        sollicitudin ac lectus sed ullamcorper. Quisque nec congue ligula. Duis
        nulla justo, vehicula a eros ac, fermentum ornare augue. Aenean blandit
        sem in laoreet venenatis. Integer efficitur quis mauris non tincidunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel leo
        nec odio consectetur luctus. Phasellus ut nibh sagittis, tincidunt elit
        in, convallis urna. Donec justo augue, gravida ultricies porttitor sed,
        interdum vitae leo. Vestibulum blandit ipsum quis elementum porttitor.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Mauris id massa a arcu ultrices suscipit a ac eros. Donec
        id mauris volutpat, feugiat lacus eget, vulputate nibh. Curabitur
        sollicitudin ac lectus sed ullamcorper. Quisque nec congue ligula. Duis
        nulla justo, vehicula a eros ac, fermentum ornare augue. Aenean blandit
        sem in laoreet venenatis. Integer efficitur quis mauris non tincidunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel leo
        nec odio consectetur luctus. Phasellus ut nibh sagittis, tincidunt elit
        in, convallis urna. Donec justo augue, gravida ultricies porttitor sed,
        interdum vitae leo. Vestibulum blandit ipsum quis elementum porttitor.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Mauris id massa a arcu ultrices suscipit a ac eros. Donec
        id mauris volutpat, feugiat lacus eget, vulputate nibh. Curabitur
        sollicitudin ac lectus sed ullamcorper. Quisque nec congue ligula. Duis
        nulla justo, vehicula a eros ac, fermentum ornare augue. Aenean blandit
        sem in laoreet venenatis. Integer efficitur quis mauris non tincidunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel leo
        nec odio consectetur luctus. Phasellus ut nibh sagittis, tincidunt elit
        in, convallis urna. Donec justo augue, gravida ultricies porttitor sed,
        interdum vitae leo. Vestibulum blandit ipsum quis elementum porttitor.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Mauris id massa a arcu ultrices suscipit a ac eros. Donec
        id mauris volutpat, feugiat lacus eget, vulputate nibh. Curabitur
        sollicitudin ac lectus sed ullamcorper. Quisque nec congue ligula. Duis
        nulla justo, vehicula a eros ac, fermentum ornare augue. Aenean blandit
        sem in laoreet venenatis. Integer efficitur quis mauris non tincidunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel leo
        nec odio consectetur luctus. Phasellus ut nibh sagittis, tincidunt elit
        in, convallis urna. Donec justo augue, gravida ultricies porttitor sed,
        interdum vitae leo. Vestibulum blandit ipsum quis elementum porttitor.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Mauris id massa a arcu ultrices suscipit a ac eros. Donec
        id mauris volutpat, feugiat lacus eget, vulputate nibh. Curabitur
        sollicitudin ac lectus sed ullamcorper. Quisque nec congue ligula. Duis
        nulla justo, vehicula a eros ac, fermentum ornare augue. Aenean blandit
        sem in laoreet venenatis. Integer efficitur quis mauris non tincidunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel leo
        nec odio consectetur luctus. Phasellus ut nibh sagittis, tincidunt elit
        in, convallis urna. Donec justo augue, gravida ultricies porttitor sed,
        interdum vitae leo. Vestibulum blandit ipsum quis elementum porttitor.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Mauris id massa a arcu ultrices suscipit a ac eros. Donec
        id mauris volutpat, feugiat lacus eget, vulputate nibh. Curabitur
        sollicitudin ac lectus sed ullamcorper. Quisque nec congue ligula. Duis
        nulla justo, vehicula a eros ac, fermentum ornare augue. Aenean blandit
        sem in laoreet venenatis. Integer efficitur quis mauris non tincidunt.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel leo
        nec odio consectetur luctus. Phasellus ut nibh sagittis, tincidunt elit
        in, convallis urna. Donec justo augue, gravida ultricies porttitor sed,
        interdum vitae leo. Vestibulum blandit ipsum quis elementum porttitor.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Mauris id massa a arcu ultrices suscipit a ac eros. Donec
        id mauris volutpat, feugiat lacus eget, vulputate nibh. Curabitur
        sollicitudin ac lectus sed ullamcorper. Quisque nec congue ligula. Duis
        nulla justo, vehicula a eros ac, fermentum ornare augue. Aenean blandit
        sem in laoreet venenatis. Integer efficitur quis mauris non tincidunt.
      </p>
    </div>
  );
}

export default ModalPage;
