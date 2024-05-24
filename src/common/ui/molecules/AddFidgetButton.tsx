
import Modal from "../components/Modal";
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";

export default function AddFidgetButton(){
    const [isMenuOpen, setMenuMode] = useState(false);

    const openMenu = () => {
        setMenuMode(!isMenuOpen);
    }

    const handleSubmit = (event) => {
        const formData = new FormData(event.currentTarget);
        event.preventDefault();
        setMenuMode(false)
    };


    return (
        <>
            <button onClick={openMenu} className="toolbar-item"><FaPlus/></button>
            <Modal
            open={isMenuOpen}
            setOpen={openMenu}
            >
                <form onSubmit={handleSubmit}>
                    <label>
                    <h2 className="m-2">URL</h2>
                    <input name="URL" type="text" className="p-2 m-2"/>
                    </label>
                    <br/>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded">
                    Update
                    </button>
                </form>
            </Modal>
        </>
    )

}
