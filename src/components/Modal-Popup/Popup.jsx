const PopUp=({onClose})=>{
    return(
        <div className="background">
            <button 
                onClick={onClose}
                style={{ position: 'absolute', top: '10px', right: '10px' }}>
                &times; {/* This represents the close icon (X) */}
            </button>
            <div>Customized Header</div>
            <div>Body</div>
            <div>Footer</div>
        </div>
    )
}

export default PopUp