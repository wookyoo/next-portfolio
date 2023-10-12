import Image from 'next/image'

export default function AboutMe() {

    const imgUrl = '/wookyoo_kang_photo_update.jpg'

    return (
        <main className="flex min-h-screen flex-col items-center justify-between about-me-bg-left">
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="business-card">
                        <div className="business-card-photo">
                            <Image 
                            src={imgUrl} className="rounded-full"
                            unoptimized alt="" width={600} height={400}/>
                        </div>
                        <h1 className="business-card-name">Wookyoo<br/>Kang</h1>
                        <div className="business-card-dash"></div>
                        <div className="business-card-up business-card-occupation">JAVA DEVELOPER</div>
                        <div className="business-card-bottom">
                            <div className="business-card-icons">
                            </div>
                        </div>
                    </div>
                    <div className="about-me-message ml-20">
                        <p className='text-3xl mb-10'><b>01001011101110010101110101</b></p>
                        <p className='text-2xl mb-4'>10 years experienced Full-Stack Java developer with a passion for crafting robust web solutions & Yes, I do programming.</p>
                        <p className='text-base mb-3'>My background covers both front-end and back-end development, with proficiency in Java, JavaScript, Java enterprise, and a range of other tools and frameworks under Agile methodologies for efficient development.</p>
                        <p className='text-base mb-3'>I love programming, coffee, and my family.</p>
                        <p className='text-base mb-3'><code>Problem-solving / Adaptability / Listener</code></p>
                    </div>
                </div>
            </section>
        </main>
    );
}