import './ModalDialog.css';

function ModalDialog({
    message,
    onExecute,
    onCancel
}) {

    return (
        <div className="modal-wrapper">
            <div className="modal-dialog">

                <p className="modal-message">{message}</p>
                <button className="btn modal-btn" onClick={onExecute}>Yes</button>
                <button className="btn modal-btn" onClick={onCancel}>No</button>
            </div>
        </div>
    );
}

export default ModalDialog;
