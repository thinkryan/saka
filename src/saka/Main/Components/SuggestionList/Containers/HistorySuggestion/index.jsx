import { h } from 'preact';
import Suggestion from '../../Components/Suggestion/index.jsx';

export default ({
  suggestion: { title, url, prettyURL },
  selected,
  index,
  onClick
}) => (
  <Suggestion
    type="history"
    title={title}
    titleColor="#000000"
    secondary={prettyURL}
    secondaryColor="rgba(63, 81, 245, 1.0)"
    icon="history"
    url={url}
    selected={selected}
    index={index}
    onClick={onClick}
  />
);
