

export const ModalAddCity = ({ isOpen, onClose, onConfirm }) => {

    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

            <div className="bg-white p-6 rounded-xl shadow-lg w-[500px] flex flex-col gap-5">

                <div className="w-full h-auto">

                    <h3 className="text-gray-500 text-xl font-medium">Add new city</h3>

                </div>
                
                <div className="w-full h-auto flex flex-col gap-2">

                    <input type="text" autoComplete="off" placeholder="Name of country" className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-[#007aff] focus:border-2"/>
                    <input type="text" autoComplete="off" placeholder="Name of city" className="border border-gray-300 rounded-xl p-2 focus:outline-none focus:border-[#007aff] focus:border-2"/>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27237.379918493916!2d-62.11382829971241!3d-31.423148380808946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cb28228bc1d067%3A0x8f04abfe8c3700f4!2sSan%20Francisco%2C%20C%C3%B3rdoba%20Province!5e0!3m2!1sen!2sar!4v1757024783708!5m2!1sen!2sar" width="full" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="rounded-lg"/>

                </div>

                <div className="w-full h-auto flex flex-col gap-2">

                    <button onClick={onConfirm} className="bg-green-500 hover:bg-green-600 transition-all ease-in text-white font-medium rounded-xl px-4 py-2 hover:cursor-pointer">
                        Confirm
                    </button>

                    <button onClick={onClose} className="bg-red-500 hover:bg-red-600 transition-all ease-in text-white font-medium rounded-xl px-4 py-2 hover:cursor-pointer">
                        Cancel
                    </button>

                </div>

            </div>

        </div>

    );

}