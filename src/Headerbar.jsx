import avatar from './img/avatar.png';

const HeaderBar = () => {
  return (
    <div className="flex w-full items-center bg-cyan-600 p-4"> 
      <div>
        <img src={avatar} alt="avatar" className="size-12" />
      </div>
      <div className="flex bg-red-500 justify-evenly w-full">
          <span>Ana Sayfa</span>
          <span>Hakkımızda</span>
          <span>İletişim</span>
      </div>
      <div className="flex bg-amber-400 min-w-fit flex-col">
        <span className="inline-block">Recep Turpcu</span>
        <span className="inline-block">React Deneme</span>
        <span className="inline-block">Zamazingo</span>
      </div>
    </div>
  );
};

export default HeaderBar;
