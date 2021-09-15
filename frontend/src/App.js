import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import ImageCard from './components/ImageCard';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/welcome';

const API_URL = process.env.REACT_APP_API_URL || 'http://10.0.2.15:5050';

const App = () => {
  const [word, setWord] = useState('');
  const [img, setImg] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(` ${API_URL}/new-image?query=${word}`)
      .then((res) => res.json())
      .then((data) => {
        setImg([{ ...data, title: word }, ...img]);
      })
      .catch((err) => {
        console.log(err);
      });
    setWord('');
  };

  const handleDeleteImage = (id) => {
    setImg(img.filter((image1) => image1.id !== id));
  };

  return (
    <div>
      <Header title="Images Collection" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Container className="mt-4">
        {img.length ? (
          <Row xs={1} md={2} lg={3}>
            {img.map((image1, i) => (
              <Col key={i} className="pb-3">
                <ImageCard image1={image1} deleteImage1={handleDeleteImage} />
              </Col>
            ))}
          </Row>
        ) : (
          <Welcome />
        )}
      </Container>
    </div>
  );
};

export default App;
