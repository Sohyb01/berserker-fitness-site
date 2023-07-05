const FancyLink = (props: {
  handleSelection: (mode: string) => void;
  content: string;
  selection: string;
}) => {
  const handleSelection = props.handleSelection;
  return (
    <button
      onClick={() => {
        handleSelection(props.content);
      }}
      className={`berserker-btn fancy-link-button ${
        props.content == props.selection ? "on" : "off"
      }`}
    >
      {props.content}
    </button>
  );
};

export default FancyLink;
