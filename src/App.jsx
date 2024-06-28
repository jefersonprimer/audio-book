import './App.css';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import brasCubasImg from './assets/bras_cubas.jpeg';
import Cover from './Cover';
import ChapterSelector from './ChapterSelector';
import BtnControl from './BtnControl';

function App() {
  // let taTocando = false;
  const [taTocando, definirTaTocando] = useState(false);
  const informationBook = {
    name: 'Memorias Postumas de Bras Cubas',
    author: 'Machado de Assis',
    totalChapters: 2,
    cover: brasCubasImg,
    textAlternative: 'Cover of book Memorias Postumas de Bras Cubas.',
  };

  return ( 
  <> 
    <Cover coverImage={informationBook.cover}
     textAlternative={informationBook.textAlternative}
     />
     <ChapterSelector ChapterCurrent={1}/>
     <BtnControl taTocando={taTocando} definirTaTocando={definirTaTocando}/>
  </>
  );
}

export default App;
