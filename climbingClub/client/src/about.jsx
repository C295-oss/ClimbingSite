import mountain from './assets/mountain-unsplash.jpg';
import './index.css';

export default function About() {
    return (
        <>
            <section className="bg-CreamWhite flex flex-row py-8">
                <div className="hidden md:flex items-center w-1/2">
                    {/* Hidden on small screens, visible on medium and larger screens */}
                    <img className="px-8 h-3/4" src={mountain} alt="man climbing mountain" />
                </div>

                <div className="py-8 w-full md:w-1/2 text-center">
                    <div className="h-4/5 flex flex-col justify-between">
                        <div className="py-8">
                            <h2 className="text-lightBlack font-semibold my-4 lg:text-4xl md:text-3xl sm:text-2xl">About The Club</h2>
                            <p className="text-base md:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim at augue eget tincidunt. Pellentesque dictum ligula quis dolor interdum, vel rhoncus sem semper. Aenean interdum a nulla id consectetur.
                                <br /><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim at augue eget tincidunt. Pellentesque dictum ligula quis dolor interdum, vel rhoncus sem semper. Aenean interdum a nulla id consectetur.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-lightBlack font-semibold my-4 lg:text-4xl md:text-3xl sm:text-2xl">Requirements</h2>
                            <p className="text-base md:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim at augue eget tincidunt. Pellentesque dictum ligula quis dolor interdum, vel rhoncus sem semper. Aenean interdum a nulla id consectetur.
                                <br /><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dignissim at augue eget tincidunt. Pellentesque dictum ligula quis dolor interdum, vel rhoncus sem semper. Aenean interdum a nulla id consectetur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
