const Footer = ({credits}) => {
    const {year,author}= credits;
    return ( 

        <footer className="py-3 mt-auto">
            <div className="container">
                <h2 className=" text-center fs-6 m-0">😎Corporyright &copy; {year} {author}. Todos los derechos reservados😎</h2>
            </div>
        </footer>
     );
}
 
export default Footer;