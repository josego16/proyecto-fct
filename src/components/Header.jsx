import '../css/Header.css';

const Header = ({title}) => {
    return (
        <div className="header">
            <h1 className="header-title">{title}</h1>
        </div>
    );
};

export default Header;
