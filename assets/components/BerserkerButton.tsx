const BerserkerButton = (props: any) => {
  console.log(props.arrow);
  return (
    <button className={`berserker-btn + ${props.scheme} + ${props.shadow}`}>
      {props.content ? props.content : "Button"}
      {props.arrow == "true" && props.scheme == "w-b" && (
        <div>
          <div className="btn-arrow-b"></div>
        </div>
      )}
      {props.arrow == "true" && props.scheme != "w-b" && (
        <div>
          <div className="btn-arrow-w"></div>
        </div>
      )}
    </button>
  );
};

export default BerserkerButton;
