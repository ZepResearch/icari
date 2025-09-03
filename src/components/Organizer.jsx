import React from 'react';

const robocore = '/organizer/robocore.png'; // Update with your image path
const luc = '/organizer/luc.png'; 
const rit = '/organizer/rit.png'; 

function Organizer() {
    return (<>
   
 <section className="bg-gradient-to-tl from-slate-50 to-blue-100 rounded-xl p-8 text-center shadow-lg max-w-5xl mx-auto my-8">
            <h2 className="text-3xl font-semibold mb-6 text-slate-900 font-serif">
                Our <span className='text-orange-500'>Organizing Partner</span>
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>

            <img
                src={robocore}
                alt="Organizing Partner Logo"
                className="max-w-xl w-full h-auto rounded-lg   p-4 mx-auto"
                />
            <img
                src={luc}
                alt="lui"
                className="max-w-xl w-full h-auto rounded-lg   p-4 mx-auto "
                />
                <img
                src={rit}
                alt="rito"
                className="max-w-xl  h-auto rounded-lg  w-40  p-4 mx-auto "
                />
            </div>
        </section>


         {/* <section className="bg-gradient-to-r from-slate-50 to-blue-100 rounded-xl p-8 text-center shadow-lg max-w-5xl mx-auto my-8">
            <h2 className="text-3xl font-semibold mb-6 text-slate-900 font-serif">
                Our <span className='text-orange-500'>Academic partner</span>
            </h2>

        </section> */}
    
       
                </>
    );
}

export default Organizer;
