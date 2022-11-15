import PropTypes from 'prop-types';

export default function ListingItem({ id, url, img, title, currencyCode, price, quantity }) {
    let newTitle = '';
    if (title.length > 50) {
      newTitle = title.substring(0, 50) + '...';
    }
  
    const currency = {
      'USD': '$',
      'EUR': '€'
    }
  
    let qtyLevel = '';
    quantity < 10
      ? (qtyLevel = 'level-low')
      : quantity > 20
      ? (qtyLevel = 'level-high')
      : (qtyLevel = 'level-medium');
  
    return (
      <div className="item" id={id}>
        <div className="item-image">
          <a href={url}>
            <img src={img.url_570xN} alt="" />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{newTitle || title}</p>
          <p className="item-price">
            {currency[currencyCode]}
            {price}
            {!currency[currencyCode] && ' ' + currencyCode}
          </p>
          <p className={'item-quantity ' + qtyLevel}>{quantity} left</p>
        </div>
      </div>
    );
  }
  
  ListingItem.propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string,
    img: PropTypes.object,
    title: PropTypes.string,
    currencyCode: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  };

  ListingItem.defaultProps = {
    url: 'https://aliexpress.ru/item/1005002172052150.html?spm=a2g2w.home.10009201.3.75df7eb6I6nZen&_evo_buckets=165609,165598,188871,194275,299288&sku_id=12000018933750564&gps-id=appJustForYouNew&scm=1007.34525.306340.0&scm_id=1007.34525.306340.0&scm-url=1007.34525.306340.0&pvid=adb5df5d-3ad6-421a-8296-fe144674c8b7&_t=gps-id:appJustForYouNew,scm-url:1007.34525.306340.0,pvid:adb5df5d-3ad6-421a-8296-fe144674c8b7,tpp_buckets:24525%230%23306340%2321_21387%230%23233228%232_21387%239507%23434560%235_12560%230%23286588%233_12560%231195%233979%23410_22079%230%23314162%2327_22079%235270%2324216%23698_22079%234871%23445881%23688_22079%235116%2323470%23642&ru_algo_pv_id=adb5df5d-3ad6-421a-8296-fe144674c8b7&scenario=appJustForYouNew&tpp_rcmd_bucket_id=306340',
    img: {url_570xN: 'https://ae04.alicdn.com/kf/H9e1a8580ba384106af73e621f3ea3b5b3/18-28.jpg_640x640.jpg'},
    title: 'Мягкая мультяшная подушка в виде животного, 18-28 см, подушка, милая толстая собака, кошка, Тоторо, пингвин, свинка, лягушка, плюшевая',
    currencyCode: '$',
    price: '5',
    quantity: 1,
  }