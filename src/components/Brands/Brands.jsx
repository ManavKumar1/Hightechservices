import "./Brands.scss"

const Brands = () => {
  const brands = ["Samsung", "LG", "Sony", "Panasonic", "Philips", "Toshiba", "Sharp", "Vizio", "Hisense", "TCL"]

  return (
    <section className='brands'>
      <div className='brands__container'>
        <h2 className='brands__title'>Brands We Service</h2>
        <p className='brands__subtitle'>
          We repair all major TV brands and models with expertise and precision
        </p>

        <div className='brands__grid'>
          {brands.map((brand, index) => (
            <div className='brands__item' key={index}>
              <div className='brands__logo'>
                <img
                  src={`https://placehold.co/600x400/png`}
                  alt={`${brand} logo`}
                />
              </div>
              <p className='brands__name'>{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands
