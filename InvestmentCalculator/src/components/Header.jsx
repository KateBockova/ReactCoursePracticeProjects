export default function Header({ logo, children }) {
    return <header id="header">
        <img src={logo} alt="logo" />
        <h1>{children}</h1>
    </header>
}