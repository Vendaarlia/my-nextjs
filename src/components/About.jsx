import Image from "next/image";


function About() {
  return (
    <div className="abou-container">
        <h2>About Me</h2>
        <div className="flex-about">
            <div className="about-text">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi temporibus hic alias, debitis, ipsum distinctio incidunt quasi optio fugit at et aut repellendus ipsa necessitatibus. Molestiae nam repudiandae aliquid eos.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta sint, unde ratione ducimus deleniti distinctio delectus! Eligendi id ratione ab sed aperiam praesentium commodi, quidem harum, error, reprehenderit culpa rem!
                </p>
            </div>
            <div className="about-img">
                <Image src='/images/sbout.jpeg' className='profilr-img' width={300} height={500} />
            </div>
        </div>
    </div>
  )
}

export default About