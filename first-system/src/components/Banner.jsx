import "./banner.css";

const Banner = ({ titulo, subTitulo }) => {
  console.log(titulo);

  return (
    <div className="banner">
      <h1>{titulo}</h1>
      <h2>{subTitulo}</h2>
    </div>
  );
};

export default Banner;
