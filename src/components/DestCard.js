const DestCard = (props) => {
    const { desData } = props;
   
    const { imgName = "", planName = "", plan = "", location = "" , price = "", rating = ""} = desData?.data || {};

    return (
        <div className="big-header">
            <div className="des-card" style={{backgroundColor:"#f0f0f0"}}>
                {imgName && (
                    <img
                        className="res-logo"
                        alt="res-logo"
                        src={imgName || "https://via.placeholder.com/150"}
                    />
                )}
                <h2 style={{textAlign:"center", fontFamily:"sans-serif"}}>{planName}</h2>
                <h5 style={{fontFamily:"sans-serif"}}>{plan}</h5>
                <h5 style={{fontFamily:"sans-serif"}}>{location}</h5>
                <h5 style={{fontFamily:"sans-serif"}}>{price} ₹</h5>
                <h5 style={{fontFamily:"sans-serif"}}>{rating} ⭐</h5>
            </div>
        </div>
    )
}

export default DestCard;