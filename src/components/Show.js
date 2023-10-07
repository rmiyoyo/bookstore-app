import { Triangle as LoadingTriangle } from 'react-loader-spinner';

const Show = () => (
  <LoadingTriangle
    color="pink"
  />
);

Show.defaultProps = {
  isVisible: true,
  cssClass: 'show-class', // Change wrapperClass to cssClass
};

export default Show;
