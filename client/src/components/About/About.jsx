import React from 'react'
import s from './About.module.css'

function About() {
    return (
       
        <div>

        <div className={s.aboutContainer}>
        <h1 className={s.title}>About us</h1>

        <div className={s.text}>
        <p className={s.text}> 
        Hello! We're <b>CACTUSSHOES</b>. This e-commerce was developed with the combined effort of eight  
        <a href='https://www.soyhenry.com'> HENRY</a> students and the support of our TL (). In this bootcamp over 
        the last four months, we were intensively taught, over +800 hours of study, the basics of several 
        state-of-the-art technologies such as <span style={{color:'#52B9D4',fontWeight:'bold'}}>React</span>, 
        <span style={{color:'#7649BB',fontWeight:'bold'}}> Redux</span>, 
        <span style={{color:'#8BC74B',fontWeight:'bold'}}> Express</span>, 
        <span style={{color:'#8BC74B',fontWeight:'bold'}}> Node.js</span>, 
        <span style={{color:'#03AEEE',fontWeight:'bold'}}> Sequelize</span>, among many others.
        Over the last month, our group has been putting all this knowledge into practice and also familiarising 
        ourselves with agile methodologies such as <span style={{color:'#40586F',fontWeight:'bold'}}>SCRUM</span>. 
        HENRY's ultimate goal is to enable us to start our careers in this exciting field that is becoming 
        more and more important in everyone's daily life.
        </p>
        </div>

        </div>

        <h1 className={s.title}>Our team</h1>

        <div className={s.teamsContainer}>


            <div className={s.box}>

                <div>
                    <img className={s.imgBox} alt="team" 
                    src="https://media-exp1.licdn.com/dms/image/D4D35AQF6LqgZbf89EA/profile-framedphoto-shrink_800_800/0/1636570124483?e=1638039600&v=beta&t=e4iL5PeuZ7w08VbG2IP9PmvgubxCU5_1P9GZawU767s"/>
                </div>
                <div className={s.infoBox}>   
                    <h3>Alan Castillo</h3>
                    <h4>Full-Stack Developer</h4>
                    <span className="links-container">
                        <a href='https://www.linkedin.com/in/alancastillofullstackdeveloper/' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                            alt="" width="20px" height="20px" />
                        </a>
                        <a  href='https://github.com/AlanMauricioCastillo' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png" 
                            alt="" width="20px" height="20px"/>
                        </a>
                        <a  href='https://www.twitter.com/@AlanCas94011193' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/twitter.svg" 
                            alt="" width="20px" height="20px"/>
                        </a>
                    </span>
                </div>
            
            </div>
            <div className={s.box}>

                <div>
                    <img className={s.imgBox} alt="team" 
                    src="https://media-exp1.licdn.com/dms/image/D4E35AQG2Q2k1ulE90g/profile-framedphoto-shrink_800_800/0/1637213863692?e=1638039600&v=beta&t=x9e7vOQFUaxDT-EC00rCt03YMVBKaIVvf4gShYhnZ6A"/>
                </div>
                <div className={s.infoBox}>   
                    <h3>Francisco Berthet</h3>
                    <h4>Full-Stack Developer</h4>
                    <span className="links-container">
                        <a href='https://www.linkedin.com/in/franciscoberthet/' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                            alt="" width="20px" height="20px" />
                        </a>
                        <a  href='https://github.com/frann11' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png" 
                            alt="" width="20px" height="20px"/>
                        </a>
                    </span>
                </div>
            
            </div>
            
            <div className={s.box}>

                <div>
                    <img className={s.imgBox} alt="team" 
                    src="https://media-exp1.licdn.com/dms/image/D4E35AQGhpKjMbkBH0Q/profile-framedphoto-shrink_800_800/0/1631331160885?e=1638043200&v=beta&t=vPpQ0oQ6MLD-uz21dEa_E4c8sBIvW2kTBnTAXwVwt-o"/>
                </div>
                <div className={s.infoBox}>   
                    <h3>Sergio Grimaldo</h3>
                    <h4>Full-Stack Developer</h4>
                    <span className="links-container">
                        <a href='https://www.linkedin.com/in/sergio-grimaldo-desarrollador-junior/' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                            alt="" width="20px" height="20px" />
                        </a>
                        <a  href='https://github.com/sergiogrimaldo' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png" 
                            alt="" width="20px" height="20px"/>
                        </a>
                    </span>
                </div>
            
            </div>

            <div className={s.box}>

                <div>
                    <img className={s.imgBox} alt="team" 
                    src="https://media-exp1.licdn.com/dms/image/D4D35AQHhOZ1OOnbq1A/profile-framedphoto-shrink_800_800/0/1627405840576?e=1638039600&v=beta&t=cWd8RTbCWSMSpCREPYI4iwreq7bCoJZGA9fWxPBVHyI"/>
                </div>
                <div className={s.infoBox}>   
                    <h3>Fernando Ruiz</h3>
                    <h4>Full-Stack Developer</h4>
                    <span className="links-container">
                        <a href='https://www.linkedin.com/in/fernando-ruiz-68660279/' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                            alt="" width="20px" height="20px" />
                        </a>
                        <a  href='https://github.com/FernandoRuizParietti' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png" 
                            alt="" width="20px" height="20px"/>
                        </a>
                    </span>
                </div>
            
            </div>

            <div className={s.box}>

                <div>
                    <img className={s.imgBox} alt="team" 
                    src="https://media-exp1.licdn.com/dms/image/C4D03AQFGEWpMwJE2cg/profile-displayphoto-shrink_800_800/0/1637532847243?e=1643241600&v=beta&t=usjz-loQuKTEcmHFYp9x0Nghu6hRO1MWFCoeV3UohHA"/>
                </div>
                <div className={s.infoBox}>   
                    <h3>Leonardo Marussig</h3>
                    <h4>Full-Stack Developer</h4>
                    <span className="links-container">
                        <a href='https://www.linkedin.com/in/leonardo-marussig-dev/' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                            alt="" width="20px" height="20px" />
                        </a>
                        <a  href='https://github.com/elmaruz' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png" 
                            alt="" width="20px" height="20px"/>
                        </a>
                    </span>
                </div>
            
            </div>

            <div className={s.box}>

                <div>
                    <img className={s.imgBox} alt="team" 
                    src="https://media-exp1.licdn.com/dms/image/D4E35AQGjyqk7I_W7Hg/profile-framedphoto-shrink_200_200/0/1637954819745?e=1638043200&v=beta&t=NiOodJ2flNeASPLTDrGDnlaXIIBVeAT6mWMZQW4MGYs"/>
                </div>
                <div className={s.infoBox}>   
                    <h3>Florencia Lodosa</h3>
                    <h4>Full-Stack Developer</h4>
                    <span className="links-container">
                        <a href='https://www.linkedin.com/in/florencia-lodosa/' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                            alt="" width="20px" height="20px" />
                        </a>
                        <a  href='https://github.com/florlodosa' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png" 
                            alt="" width="20px" height="20px"/>
                        </a>
                    </span>
                </div>
            
            </div>

            <div className={s.box}>

                <div>
                    <img className={s.imgBox} alt="team" 
                    src="https://media-exp1.licdn.com/dms/image/D5635AQGduhJzTsSkQA/profile-framedphoto-shrink_800_800/0/1637332293828?e=1638043200&v=beta&t=q4U2H8qvqpWwei8yJnssgr4XZXSOTOb4vV2PpzeQcdI"/>
                </div>
                <div className={s.infoBox}>   
                    <h3>Joaquín Trovato</h3>
                    <h4>Full-Stack Developer</h4>
                    <span className="links-container">
                        <a href='https://www.linkedin.com/in/joaquintrovato/' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                            alt="" width="20px" height="20px" />
                        </a>
                        <a  href='https://github.com/JoacoTrovato' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png" 
                            alt="" width="20px" height="20px"/>
                        </a>
                    </span>
                </div>
            
            </div>

            <div className={s.box}>

                <div>
                    <img className={s.imgBox} alt="team" 
                    src="https://media-exp1.licdn.com/dms/image/C5603AQHdp4i2Mw3rUA/profile-displayphoto-shrink_800_800/0/1593207810606?e=1643241600&v=beta&t=sATxb0YwU-II0m2QIB9zOjb0TFejQLFBc9GO9aJOl_U"/>
                </div>
                <div className={s.infoBox}>   
                    <h3>Cristian Reyes</h3>
                    <h4>Full-Stack Developer</h4>
                    <span className="links-container">
                        <a href='https://www.linkedin.com/in/cristian-reyes-parra-developer/' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/stikersDeContacto/linked-in-alt.svg" 
                            alt="" width="20px" height="20px" />
                        </a>
                        <a  href='https://github.com/careyesp95' target="_blank">
                            <img 
                            src="https://raw.githubusercontent.com/AlanMauricioCastillo/Portfolio/master/public/GitHubImg.png" 
                            alt="" width="20px" height="20px"/>
                        </a>
                    </span>
                </div>
            
            </div>

            
        </div>

    </div>
    )
}

export default About
