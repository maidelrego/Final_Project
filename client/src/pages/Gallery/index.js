import React from "react";
import Gallery from "react-grid-gallery";
import { Row, Col, Container } from "react-bootstrap";
import gallery1 from "../../images/Gallery1.jpg";
import gallery2 from "../../images/Gallery2.jpg";
import gallery3 from "../../images/Gallery3.jpg";
import gallery4 from "../../images/Gallery4.jpg";
import gallery5 from "../../images/Gallery5.jpg";
import gallery6 from "../../images/Gallery6.jpg";
import gallery7 from "../../images/Gallery7.jpg";
import gallery8 from "../../images/Gallery7.jpg";
import gallery9 from "../../images/Gallery8.jpg";
import gallery10 from "../../images/Gallery10.jpg";
import gallery11 from "../../images/Gallery11.jpg";
import gallery12 from "../../images/Gallery12.jpg";
import gallery13 from "../../images/Gallery13.jpg";
import gallery14 from "../../images/Gallery14.jpg";
import gallery15 from "../../images/Gallery15.jpg";
import gallery16 from "../../images/Gallery16.jpg";
import gallery17 from "../../images/Gallery17.jpg";
import gallery18 from "../../images/Gallery18.jpg";
import gallery19 from "../../images/Gallery19.jpg";
import gallery20 from "../../images/Gallery20.jpg";
import gallery21 from "../../images/Gallery21.jpg";
import gallery22 from "../../images/Gallery21.jpg";
import gallery23 from "../../images/Gallery23.jpg";
import "./gallery.css";


const IMAGES =
  [{
    src: gallery1,
    thumbnail: gallery1,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery3,
    thumbnail: gallery3,
    thumbnailWidth: 500,
    thumbnailHeight: 300,
  },
  {
    src: gallery5,
    thumbnail: gallery5,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery7,
    thumbnail: gallery7,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery9,
    thumbnail: gallery9,
    thumbnailWidth: 500,
    thumbnailHeight: 400,
  },
  {
    src: gallery11,
    thumbnail: gallery11,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery13,
    thumbnail: gallery13,
    thumbnailWidth: 600,
    thumbnailHeight: 500,
  },
  {
    src: gallery15,
    thumbnail: gallery15,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery17,
    thumbnail: gallery17,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery19,
    thumbnail: gallery19,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery21,
    thumbnail: gallery21,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery23,
    thumbnail: gallery23,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery2,
    thumbnail: gallery2,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery4,
    thumbnail: gallery4,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery6,
    thumbnail: gallery6,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery8,
    thumbnail: gallery8,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery10,
    thumbnail: gallery10,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery12,
    thumbnail: gallery12,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery14,
    thumbnail: gallery14,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery16,
    thumbnail: gallery16,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery18,
    thumbnail: gallery18,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery20,
    thumbnail: gallery20,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  },
  {
    src: gallery22,
    thumbnail: gallery22,
    thumbnailWidth: 400,
    thumbnailHeight: 400,
  }];

export default function MyGallery() {
  return (
    <Container>
      <Row className='gallery-head'>
        <Col>
          <h1 className='text-center'>Gallery</h1>
        </Col>
      </Row>
      <Row className='images-grid'>
        <Col>
          <Gallery rowHeight={300} margin={4} backdropClosesModal={true} showLightboxThumbnails={true} images={IMAGES} />
        </Col>
      </Row>

    </Container>
  );
}

