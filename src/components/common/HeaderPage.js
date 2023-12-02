import './HeaderPage.css'
const HeaderPage = (props) => {
    return (
        <h3 className=" navbar-expand-lg  headerpage d-flex justify-content-center " >{props.title}</h3>
    )
}

export default HeaderPage;