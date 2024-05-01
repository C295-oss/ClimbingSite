import './index.css';

export default function Contact() {
    return (
    <>
    <section id="Contact" className='bg-lightBlack w-full h-1/3 flex flex-row justify-between px-8 py-8'>
        
        <div>
            <h3>Need more info?</h3>
            
            <p><u>Email</u>: 1234@email.com</p>

            <p>[Board Member 1 Email]</p>
            <p>[Board Member 2 Email]</p>
            <p>[Board Member 3 Email]</p>
            <p>[Board Member 4 Email]</p>

        </div>


        <div>
            <h3>Follow Us</h3>

            <a href="#">TikTok<br/></a>
            <a href="#">Facebook<br/></a>
            <a href="#">Youtube<br/></a>
            <a href="#">Instagram<br/></a>
        </div>


        <div>
            <h3>Club Resources</h3>
            
            <a href="#"><u>Online Waiver</u><br/></a>
            <a href="#"><u>GroupMe</u><br/></a>
        </div>

    </section>
    </>
    );
}