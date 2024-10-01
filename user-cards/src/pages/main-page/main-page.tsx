import ActiveList from "@/components/active-list/active-list";
import ArchivedList from "@/components/archived-list/archived-list";
import Header from "@/components/header/header";

function MainPage(): JSX.Element {

  return (
    <div className='main-page'>
        <Header/>
        <main>
          <ActiveList/>
          <ArchivedList/>
        </main>
    </div>
  );
}
export default MainPage;