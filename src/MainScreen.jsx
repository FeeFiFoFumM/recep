import HeaderBar from './HeaderBar';
import Footer from './Footer';
import Content from './Content';

const MainScreen = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderBar className="bg-blue-500 p-4" />
      <div className="flex-grow flex items-center justify-center bg-green-300">
        <Content />
      </div>
      <Footer className="bg-emerald-600 flex-grow text-white p-4" />
    </div>
  );
}

export default MainScreen;
