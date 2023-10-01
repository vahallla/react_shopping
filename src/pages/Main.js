import Banner from "../common/Banner";
import MainList from "../common/MainList";


export default function Main({list}) {

  return (
    <main>
      <Banner />
      <MainList list={list}/>
    </main>
  );
}
