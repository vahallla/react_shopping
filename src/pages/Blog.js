import "../css/blog.css";

export default function Blog({ movieList, jsonData }) {
  console.log(movieList);
  return (
    <main className="mw blog">
      <h2>블로그</h2>
      <ul>
        {movieList.map((list, i) => {
          return (
            <li key={i}>
              <p>영화제목:{list.movieNm}</p>
              <p>개봉일:{list.openNm}</p>
              <p>
                매출액:{list.salesAcc}
                {Number(list.audiAcc).toLocaleString()}원
              </p>
              <p>누적관광객:{list.audiAcc}명</p>
            </li>
          );
        })}
        <li>영화명</li>
      </ul>
      <ul>
        {jsonData.map((movie, index) => (
          <li key={index}>
            <p>네이버 검색결과</p>
            <p>영화 랭킹: {index + 1}</p>
            <p>제목: {movie.title}</p>
            <p>감독: {movie.director}</p>
            <p>출연 배우: {movie.actor}</p>
            {/* 필요한 영화 정보를 추가로 표시할 수 있습니다 */}
          </li>
        ))}
      </ul>
    </main>
  );
}
