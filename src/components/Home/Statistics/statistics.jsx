import "../Statistics/statistics.scss";

function Statistics() {
  return (
    <div className="three_columns">
      <div className="first_column">
        <p className="number">10</p>
        <p className="title">ODDANYCH WORKÓW</p>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim
          a elit viverra elementuma. Aliquam erat volutpat.
        </p>
      </div>
      <div className="second_column">
        <p className="number">5</p>
        <p className="title">WSPARTYCH ORGANIZACJI</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
      </div>
      <div className="third_column">
        <p className="number">7</p>
        <p className="title">ZORGANIZOWANY ZBIÓREK</p>
        <p className="text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
      </div>
    </div>
  );
}

export default Statistics;