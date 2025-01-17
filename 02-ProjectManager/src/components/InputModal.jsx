import { createPortal } from "react-dom";

export default function InputModal({ dialog, message="The input field" }) {
    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-800/90 py-6 px-8 rounded-lg">
            <h2 className="font-bold text-lg mb-3">Invalid Input</h2>
            <p className="mb-8">{message} must be filled</p>
            <form method="dialog" className="text-end"><button className="bg-stone-100 hover:bg-stone-200 rounded-lg py-1 px-2">Close</button></form>
        </dialog>,
        document.getElementById("modal-root")
    );
}