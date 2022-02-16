import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonGiphy = ({ theme }) => {
  const themeClass = theme || "light";

  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-article">
        <SkeletonElement type={"title"} />
        <div className="skeleton-giphy">
          <SkeletonElement type={"avatar"} />
          <div className="text">
            <SkeletonElement type={"text"} />
            <SkeletonElement type={"text"} />
          </div>
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonGiphy;
