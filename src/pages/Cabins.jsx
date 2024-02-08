//import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
//import { getCabins } from "../services/apiCabins";

function Cabins() {
  // useEffect(function () {
  //   getCabins().then((data) => console.log(data));
  // }, []);

  return (
    <Row type="vertical">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img src="https://vgwpctlwkwgxqbmckovu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" />

      <h3>TEST</h3>
      <p>
        Emirates is an airline based in Dubai, United Arab Emirates. The airline
        is a subsidiary of The Emirates Group, which is wholly owned by the
        government of Dubais Investment Corporation of Dubai.
      </p>
      <p>TEST</p>
      <img src="https://vgwpctlwkwgxqbmckovu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" />

      <h3>TEST</h3>
      <p>
        Emirates is an airline based in Dubai, United Arab Emirates. The airline
        is a subsidiary of The Emirates Group, which is wholly owned by the
        government of Dubais Investment Corporation of Dubai.
      </p>
      <p>TEST</p>
      <img src="https://vgwpctlwkwgxqbmckovu.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg" />

      <h3>TEST</h3>
      <p>
        Emirates is an airline based in Dubai, United Arab Emirates. The airline
        is a subsidiary of The Emirates Group, which is wholly owned by the
        government of Dubais Investment Corporation of Dubai.
      </p>
    </Row>
  );
}

export default Cabins;
