import './main.css';

export default function MiniMap(){
    const mapStyles = {
        border: '0',
        width: '45%',
        height: '30vw',
      };

    return(
        <div className='info-cont'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.8704465371011!2d51.37348621388191!3d51.20133075989536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4171bafeefaa6621%3A0x8be0db5f257418c9!2z0JDQvdC00LDRgQ!5e0!3m2!1sru!2skz!4v1704388445265!5m2!1sru!2skz" 
                    style={mapStyles}
                    allowfullscreen=""
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Google Map"></iframe>
            <div>
                <p>​Улица Кайрата Жумагалиева, 20/1</p>
            </div>
            
        </div>
    );
}
