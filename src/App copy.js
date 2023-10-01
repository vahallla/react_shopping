import "./App.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Main from "./pages/Main";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";
import Blog from "./pages/Blog";
import Story from "./pages/Story";
// import parse from "./common/parsing";
import { useEffect, useState } from "react";

function App() {
  const [list, setList] = useState();
  useEffect(() => {
    // URL 설정
    const apiUrl =
      "http://api.kcisa.kr/openapi/service/rest/meta2020/getCDGAvideo?serviceKey=d1be3f6e-f48f-4822-ba70-087bfc619496&numOfRows=10&pageNo=1";

    // Fetch API를 사용하여 XML 데이터 가져오기
    fetch(apiUrl)
      .then((response) => response.text())
      .then((xmlData) => {
        // 가져온 XML 데이터를 JSON으로 변환
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, "text/xml");

        // XML 데이터를 JSON으로 변환하는 함수 호출
        const jsonData = xmlToJson(xmlDoc);
        setList(jsonData.response.body.items.item);
      })
      .catch((error) => {
        console.error("데이터 가져오기 실패:", error);
      });

    // XML을 JSON으로 변환하는 함수
    function xmlToJson(xml) {
      let result = {};

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
  }, []);
  console.log(list);

  return (
    <div className="App">
      <Header />
      {/* <Main /> */}
      {/* <Shop /> */}
      {/* <Detail /> */}
      {/* <Blog /> */}
      <Story />
      <Footer />
    </div>
  );
}

export default App;
