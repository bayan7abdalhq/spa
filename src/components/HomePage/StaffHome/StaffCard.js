import './StaffCards.css'
const StaffCard = (props) => {
  return (
    <>
      <div className="staff col-12 d-flex m-3 effect">
        <div className='staffcard p-3'>
          <div className=" text-center mt-3">
            <img src={props.img} className="img-fluid rounded-circle" alt={props.alt1} />
            <div className=" mt-3">
              <h5 >{props.title}</h5>
            </div>
          </div>
          <div className=" mt-3">
            <p>{props.paragraph1}</p>
            <div className="text-center">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default StaffCard