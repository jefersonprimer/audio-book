function Cover(props) {
    return (
    <img className='cover' src={props.coverImage} alt={props.textAlternative} />
);
}

export default Cover;