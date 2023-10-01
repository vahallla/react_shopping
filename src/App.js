import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";
import Story from "./pages/Story";
import { Route, Routes, Link } from "react-router-dom";
import list from "./productData";
import { useEffect, useState } from "react";

import axios from "axios";
import Detail from "./pages/Detail";

const clientId = "P7oEzPyeF_yhAl_mExSg";
const clientSecret = "96KxabpC8F";

function App() {
  let [movieList, setMovieList] = useState([]);
  let [jsonData, setjsonData] = useState([]);

  useEffect(() => {
    // URL 설정
    /*const apiUrl =
      " https://openapi.naver.com/v1/search/movie.xml?query=%EC%A3%BC%EC%8B%9D&display=10&start=1&genre=1";
    */
    const apiUrl = "https://openapi.naver.com/v1/search/blog.json";
    const query = "영화순위"; // 검색할 내용

    const config = {
      headers: {
        "X-Naver-Client-Id": clientId,
        "X-Naver-Client-Secret": clientSecret,
      },
    };

    axios
      .get(apiUrl, {
        params: {
          query,
        },
        headers: config.headers,
      })
      .then((response) => {
        // API 응답 처리
        const movieRankings = response.data.items;
        console.log(movieRankings);
      })
      .catch((error) => {
        // 오류 처리
        console.error(error);
      });

    // Fetch API를 사용하여 XML 데이터 가져오기
    fetch(apiUrl)
      .then((response) => response.text())
      .then((xmlData) => {
        // 가져온 XML 데이터를 JSON으로 변환
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "text/xml");
        // XML 데이터를 JSON으로 변환하는 함수 호출
        const jsonData = xmlToJson(xmlDoc);
        // jsonData를 사용하여 원하는 작업 수행
        console.log(jsonData);
      })
      .catch((error) => {
        console.error("데이터 가져오기 실패:", error);
      });
    // XML을 JSON으로 변환하는 함수
    function xmlToJson(xml) {
      let result = {}; // 변수를 let으로 선언하고 객체로 초기화
      if (xml.nodeType === Node.ELEMENT_NODE) {
        if (xml.attributes.length > 0) {
          result["@attributes"] = {};
          for (let i = 0; i < xml.attributes.length; i++) {
            const attribute = xml.attributes[i];
            result["@attributes"][attribute.nodeName] = attribute.nodeValue;
          }
        }
      } else if (xml.nodeType === Node.TEXT_NODE) {
        result = xml.nodeValue;
      }
      if (xml.hasChildNodes()) {
        for (let i = 0; i < xml.childNodes.length; i++) {
          const child = xml.childNodes[i];
          const childData = xmlToJson(child);
          if (Array.isArray(result[child.nodeName])) {
            result[child.nodeName].push(childData);
          } else if (result[child.nodeName]) {
            result[child.nodeName] = [result[child.nodeName], childData];
          } else {
            result[child.nodeName] = childData;
          }
        }
      }
      return result;
    }

    fetch(
      "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=4bc765582315616d174fd80c60016295&targetDt=20230916"
    ).then(
      (res) =>
        res
          .json()
          .then((res) => setMovieList(res.boxOfficeResult.dailyBoxOfficeList))

      /*console.log(res.boxOfficeResult.dailyBoxOfficeList))*/
    );
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main list={list} />} />
        <Route path="/shop" element={<Shop list={list} />} />
        <Route path="/blog" element={<Blog movieList={movieList} />} />
        <Route path="/story" element={<Story />} />
        <Route path="/detail/:id" element={<Detail list={list} />} />
        <Route path="*" element={<>이런 페이지는 없음</>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
