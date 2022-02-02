
const Footer = () => {
  return <div 
    className="footer 
    text-center 
    d-flex 
    justify-content-center 
    align-items-center">
        <span>© Pampa Code - {(new Date().getFullYear())}</span>
    </div>;
};

export default Footer;
