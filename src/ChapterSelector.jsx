function ChapterSelector(props) {
  return (
    <button className="selector">
      <i className="bi bi-list-task"></i>
      <p>Capítulo {props.ChapterCurrent}</p>
    </button>
  );
}

export default ChapterSelector;
