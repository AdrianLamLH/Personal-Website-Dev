import { useNavigate } from 'react-router-dom';

const ReturnButton = () => {
    const navigate = useNavigate();

    return (
    <div className="return-container">
        {/* Return button navigates back to the homepage */}
        <button className="return-button" onClick={() => navigate("/")}><img src={'/assets/back-arrow.png'} className="return-logo" alt="back arrow"></img></button>
    </div>
  )
}

export default ReturnButton