import { Box } from "../Box/Box";

interface IContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return (
    <Box bg="container" width="1200px" m="0 auto" py={0} px={5}>
      {children}
    </Box>
  );
};

export default Container;
