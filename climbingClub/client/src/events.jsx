import './index.css'


// TODO: MAKE THIS A FUNCTIONAL THING!!!! NOT JUST TEXT

export default function Events()
{
    return (
    <>
        <section className="w-full bg-opacity-1 bg-white/30">

            <h2 className="text-lightBlack font-bold my-4 lg:text-5xl md:text-4xl sm:text-3xl">Next Meeting</h2>
            <p className="text-base md:text-lg sm:text-md">
                This is a placeholder!!! It will most likely not be text but instead something that will update!!!
            </p>

            <h2 className="text-lightBlack font-bold my-4 lg:text-5xl md:text-4xl sm:text-3xl">Upcoming Events</h2>
            <p className="text-base md:text-lg sm:text-md">
                This is a placeholder!!! It will most likely not be text but instead something that will update!!!
            </p>


            <h2><br/>[Note:We should be able to integrate google calendar with node.js and express.js]</h2>
        </section>
    </>
    );
}