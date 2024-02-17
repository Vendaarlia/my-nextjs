import Image from "next/image";


function About() {
  return (
    <div className="about-container">
        <h2>About Me</h2>
        <div className="flex-about">
            <div className="about-text">
                <p>
                A quarter of a century after singer/guitarist Aðalbjörn “Addi” Tryggvason co-founded atmospheric Icelandic metal quartet Sólstafir, they continue to follow their cardinal rule – that there are no rules. For them, writing an epic 10-minute song without a traditional verse/chorus trade-off feels natural. While they have done two albums in English, he mainly sings in their native tongue and his vocals are as much an instrument as a vessel for words. Their videos equally showcase the band and their Icelandic world that they commune with.
                </p>
                <br />
                <p>
                And their music flows however it pleases. “Having been a metal band for a long time and gone through shoegaze, atmospheric black metal, and post rock, I just feel privileged being able to mix all my favorite genres and get away with it,” says Tryggvason. In the world of Sólstafir, artists as varied as The Beatles, Kraftwerk, Darkthrone, Ennio Morricone, and Billy Corgan swirl inside their heads, and such influences seep into their musical ether. Funnily enough, the cover for the group’s latest album Endless Twilight of Codependent Love might remind one of a famous Smashing Pumpkins album cover.
                </p>
            </div>
            <div className="about-img">
                <Image src='/images/new release.jpg' className='profilr-img' width={600} height={500} alt="new release" />
            </div>
        </div>
    </div>
  )
}

export default About