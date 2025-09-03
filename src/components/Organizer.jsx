import React from 'react';

const organizerImg = '/organizer/robocore.png'; // Update with your image path
const academicImg = '/organizer/luc.png'; 
function Organizer() {
    return (<>
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 p-4  max-w-7xl mx-auto'>
 <section className="bg-gradient-to-tl from-slate-50 to-blue-100 rounded-xl p-8 text-center shadow-lg max-w-5xl mx-auto my-8">
            <h2 className="text-3xl font-semibold mb-6 text-slate-900 font-serif">
                Our <span className='text-orange-500'>Organizing Partner</span>
            </h2>
            <img
                src={organizerImg}
                alt="Organizing Partner Logo"
                className="max-w-xl w-full h-auto rounded-lg   p-4 mx-auto"
                />
        </section>


         <section className="bg-gradient-to-r from-slate-50 to-blue-100 rounded-xl p-8 text-center shadow-lg max-w-5xl mx-auto my-8">
            <h2 className="text-3xl font-semibold mb-6 text-slate-900 font-serif">
                Our <span className='text-orange-500'>Academic partner</span>
            </h2>
            <img
                src={academicImg}
                alt="Organizing Partner Logo"
                className="max-w-xl w-full h-auto rounded-lg   p-4 mx-auto "
                />
        </section>
    </div>
       
                </>
    );
}

export default Organizer;
