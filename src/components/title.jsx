const Title = ({ titleText, subTitleText }) => {
  return (
    <div className="section-title">
      <h2>
        {titleText} <span>{subTitleText}</span>
      </h2>
    </div>
  );
};
export default Title;
