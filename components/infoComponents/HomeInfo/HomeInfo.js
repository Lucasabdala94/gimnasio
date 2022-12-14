import Image from "next/image";

export const HomeInfo = () => {
  const myLoader = ({ src, width, height }) => {
    return `/${src}?w=${width}?h=${height}}`
  }
  return (
    <div className="home_info">
      <h1>La energía es para todos</h1>
      <h3>Cree en el poder de una comunidad de fitness grupal motivadora.</h3>
      <h5><a href="#">CONSULTA NUESTRAS CLASES DE FITNESS EN GRUPO</a></h5>
      <div className="home_container">
      <Image
        src="/img/gym1.jpg"
        alt="gym"
        width={640}
        height={427}
        loader={myLoader}
      />
      <Image
        src="/img/gym2.jpg"
        alt="gym"
        width={640}
        height={427}
        loader={myLoader}
      />
      <Image
        src="/img/gym3.jpg"
        alt="gym"
        width={640}
        height={427}
        loader={myLoader}
      />
      <Image
        src="/img/gym4.jpg"
        alt="gym"
        width={640}
        height={427}
        loader={myLoader}
      />
      <Image
        src="/img/gym5.jpg"
        alt="gym"
        width={640}
        height={427}
        loader={myLoader}
      />
      <Image
        src="/img/gym6.jpg"
        alt="gym"
        width={640}
        height={427}
        loader={myLoader}
      />
      </div>
    </div>
  );
};
