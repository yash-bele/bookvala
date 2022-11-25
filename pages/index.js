import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { colors } from '../data/data';
import Options from '../components/Options';
import Select from '../components/Select';

const Home = () => {
  const [data, setData] = useState(colors);
  const [container, setContainer] = useState([]);
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const handleClick = (item) => {
    setData(data.filter((i) => i !== item));
    setContainer((prev) => [...prev, item]);
  };

  const handleClose = (item) => {
    setContainer(container.filter((i) => i !== item));
  };

  const handleClose2 = () => {
    setData(colors.filter((i) => container.every((j) => i !== j)));
  };

  setTimeout(() => {
    handleClose2();
  });

  const handleCloseAll = () => {
    setContainer([]);
    setData(colors);
  };

  const handleShow = () => {
    setShow(!show);
  };

  const detectClickOutside = (e) => {
    if (!ref.current.contains(e.target)) setShow(false);
  };

  useEffect(() => {
    document.addEventListener('click', detectClickOutside, true);
  }, []);

  return (
    <>
      <Head>
        <title>Bookvala</title>
        <meta name='description' content='Website' />
        <link rel='icon' href='/fav.jpg' />
      </Head>
      <main className='absolute w-full h-full flex justify-center'>
        <section className='mt-10 h-fit' ref={ref}>
          <Select
            container={container}
            handleClose={handleClose}
            handleClose2={handleClose2}
            handleCloseAll={handleCloseAll}
            handleShow={handleShow}
            show={show}
          />
          {show && <Options data={data} handleClick={handleClick} />}
        </section>
      </main>
    </>
  );
};

export default Home;
