export default function Modal({onClose}) {
    return <div className="modal-container">
        <div className="modal-header">
            <span>Registration</span>
            <span onClick={onClose} className="close-btn">&times;</span>
        </div>
        <div className="modal-body">
            <div className="input-box">
                <label htmlFor="full-name">Full Name</label>
                <input type="text" id="full-name" name="full-name"/>
            </div>
            <div className="input-box">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email"/>
            </div>
            <div className="input-box">
                <label htmlFor="phone">Phone number</label>
                <input type="text" id="phone" name="phone" />
            </div>
            <div className="input-box">
                <label htmlFor="password">Password</label>
                <input type="text" id="password" name="password" />
            </div>
            <div className="input-box">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="text" id="confirm-password" name="confirm-password" />
            </div>
        </div>
        <div className="modal-footer">
            <button className="cancel" onClick={onClose}>Cancel</button>
            <button className="register">Register</button>
        </div>
    </div>
}