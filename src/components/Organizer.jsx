import React from 'react';

const organizerImg = '/organizer/robocore.png'; // Update with your image path

function Organizer() {
    return (
        <section className="bg-gradient-to-r from-slate-50 to-blue-100 rounded-xl p-8 text-center shadow-lg max-w-5xl mx-auto my-8">
            <h2 className="text-3xl font-semibold mb-6 text-slate-900 font-serif">
                Our <span className='text-orange-500'>Organizing Partner</span>
            </h2>
            <img
                src={organizerImg}
                alt="Organizing Partner Logo"
                className="max-w-xl w-full h-auto rounded-lg   p-4 mx-auto"
            />
        </section>
    );
}

export default Organizer;
