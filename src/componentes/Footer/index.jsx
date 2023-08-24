import "./Footer.css";
const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
        <a href='https://www.facebook.com/alezz.alcantara'> 
            <img src="/img/facebook.png" alt="Facebook"/>
        </a>
        <a href='https://twitter.com/alezz16'> 
            <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href='https://www.instagram.com/alexxalcantaraa/'> 
            <img src="/img/instagram.png" alt="instagram" />
        </a>
        </div>
        <img src='/img/Logo.png' alt='org' /> 
        <strong className="Nombre"> Desarrollado por Alejandro Alcántara</strong>
    </footer>
}
export default Footer;