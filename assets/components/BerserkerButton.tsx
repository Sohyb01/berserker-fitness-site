const BerserkerButton = (props: any) => {
  return (
    <button className={`berserker-btn + ${props.scheme} + ${props.shadow}`}>
      {props.content ? props.content : "Button"}
      {props.arrow == "true" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="24"
          viewBox="0 0 12 24"
          className="btn-arrow"
        >
          <g clip-path="url(#clip0_246_182)">
            <path d="M2.99977 21C2.61595 21 2.23195 20.8535 1.93945 20.5606C1.35352 19.9746 1.35352 19.0254 1.93945 18.4395L8.38101 12L1.93945 5.55939C1.35352 4.97345 1.35352 4.02423 1.93945 3.43829C2.52539 2.85236 3.47461 2.85236 4.06055 3.43829L11.5605 10.9383C12.1465 11.5242 12.1465 12.4734 11.5605 13.0594L4.06055 20.5594C3.76758 20.8547 3.38367 21 2.99977 21Z"></path>
          </g>
        </svg>
      )}
    </button>
  );
};

export default BerserkerButton;
