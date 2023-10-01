import { Link } from "react-router-dom";
import "../css/listCard.css";
export default function ListCard({ list }) {
  // console.log(list);
  return (
    <div className="card">
      <div className="p_img">
        <img src={`/img/${list.img}`} alt={list.title} />
      </div>
      <span className="p_name">{list.title}</span>
      <span className="p_price">{Number(list.price).toLocaleString()}원</span>
      {list.discount > 0 && <span className="discount">{list.discount}%</span>}
      <Link to={`/detail/${list._id}`} className="detail"></Link>
      자세히보기
    </div>
  );
}
