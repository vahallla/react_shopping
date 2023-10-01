import { useState } from "react";
import ListCard from "../common/ListCard";
import "../css/shop.css";

export default function Shop({ list }) {
  let [dataList, setDataList] = useState(list);
  console.log(dataList);
  return (
    <main className="Shop mw">
      <h1>All Goods</h1>
      <div className="AllList">
        <nav className="ShopBtnWrap">
          <button
            className="btn"
            onClick={() => {
              setDataList(list);
            }}
          >
            등록순
          </button>
          <button
            className="btn"
            onClick={() => {
              setDataList([...dataList].sort((a, b) => a.price - b.price));
            }}
          >
            낮은 가격
          </button>

          <button
            className="btn"
            onClick={() => {
              setDataList([...dataList].sort((a, b) => b.price - a.price));
            }}
          >
            높은 가격
          </button>
          <button
            className="btn"
            onClick={() => {
              setDataList(
                [...dataList].sort((a, b) => b.discount - a.discount)
              );
            }}
          >
            높은 할인율
          </button>
        </nav>

        <ul className="__list">
          {dataList.map((list) => {
            return (
              <li key={list._id}>
                <ListCard list={list} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
