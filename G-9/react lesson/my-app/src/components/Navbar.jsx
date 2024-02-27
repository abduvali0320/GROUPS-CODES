import atom_img from "../img/frame.png";
function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="flex_box">
          <div className="flex_element">
            <div className="flex_element">
              <figure>
                <img src={atom_img} alt="atom img" />
              </figure>
              <div>
                <h1 className="text_color">ATOM</h1>
                <p>autotrade</p>
              </div>
            </div>
            <div className="flex_element">
              <i className="fa-brands fa-whatsapp"></i>
              <i className="fa-brands fa-telegram"></i>
            </div>
          </div>
          <div className="flex_element nav_right">
            <div className="flex_element phone_number ">
              <i className="fa-solid fa-phone"></i>
              +7 964 444 64 94
              <i className="fa-solid fa-phone"></i>
              +7 914 719 57 56
            </div>
            <div>
              <button className="auksion_btn">
                <i className="fa-solid fa-gavel"></i>
                АУКЦИОН
              </button>
              <button className="bars_btn">
                <i className="fa-solid fa-list-ul"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
