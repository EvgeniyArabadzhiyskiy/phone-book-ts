
import { Box } from '../Box/Box';
import { SectionTitle } from './Section.styled';

interface ISectionProps {
    title : string;
    children: React.ReactNode

}

const Section:React.FC<ISectionProps> = ({ title, children }) => {
  return (
    <Box bg="primary" width="800px" m="0 auto" p={4} textAlign="center" as="section">

      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
      
    </Box>
  );
};



export default Section;