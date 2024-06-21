import './App.css';
import brasCubasImg from './assets/bras_cubas.jpeg';
import Cover from './Cover';

function App() {
  const informationBook = {
    name: 'Memorias Postumas de Bras Cubas',
    author: 'Machado de Assis',
    totalChapters: 2,
    cover: brasCubasImg,
    textAlternative: 'Cover of book Memorias Postumas de Bras Cubas.',
  };

  return ( 
  <> 
    <Cover coverImage={informationBook.cover} textAlternative={informationBook.textAlternative}/>
  </>
  );
}

export default App;
