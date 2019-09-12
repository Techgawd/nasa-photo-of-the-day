import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        {/* <h1 className="display-3">Nasa Pic of The Day</h1> */}
        <p className="lead">If you love space pics, look no further!</p>
        <hr className="my-2" />
        <p>Come back tomorrow for more.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;