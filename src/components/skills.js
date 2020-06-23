import React from 'react';
import { Tag } from 'antd';

export default (props) => {
    return (
        <div id="skills">
            <h2 className="heading">Core Technologies</h2>
            <ul>
                {/* <li className="flip-in-x-2s">JavaScript</li>
                <li className="flip-in-x-2s">React</li>
                <li className="flip-in-x-2s">Bootstrap</li>
                <li className="flip-in-x-2s">Webpack</li>
                <li className="flip-in-x-2s">NGINX</li>
                <li className="flip-in-x-2s">Node.js</li>
                <li className="flip-in-x-2s">Express</li>
                <li className="flip-in-x-2s">Tomcat/Jetty</li>
                <li className="flip-in-x-2s">Heroku/AWS</li>
                <li className="flip-in-x-2s">VirtualBox</li>
                <li className="flip-in-x-2s">Git</li>
                <li className="flip-in-x-2s">Bash</li>
                <li className="flip-in-x-2s">Linux</li>
                <li className="flip-in-x-2s">Active Directory</li>
                <li className="flip-in-x-2s">AWS</li> */}
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}}><li>JavaScript</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}}><li>Git</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}}><li>Bash</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}}><li>Linux</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}}><li>MacOS</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}}><li>Windows/WSL</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}}><li>VirtualBox</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}}><li>Docker</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}}><li>VS Code</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}}><li>Postman</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}}><li>Docker</li></Tag>
            </ul>
            <br/><br/>

            <h2 className="heading">Front-End</h2>
            <ul>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>React</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>Webpack</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>Redux/Context/MobX/Hooks</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>Webpack</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>Material UI</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>Reactify</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>Ant Design</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>MDB React</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>moment.js</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>axios.js</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>AWS SDK</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>Twilio SDK</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>Full Calendar</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>electron.js</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.4s", margin: "0.5em"}}><li>Flutter</li></Tag>
            </ul>
            <br/><br/>

            <h2 className="heading">Back-End</h2>
            <ul>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>express.js</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>PostgreSQL</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>SQL Server</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>Mongo DB</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>REDIS</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>NGINX</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>Mirth Connect</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>SystemD</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>Ubuntu Server</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>AWS EC2/RDS/S3/Lambda</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>bcrypt</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>passport.js</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>JWT for stateless session</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "0.9s", margin: "0.5em"}}><li>Node.js cluster module</li></Tag>
            </ul>
            <br/><br/>

            <h2 className="heading">Networking</h2>
            <ul>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>TCP</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>UDP</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>SSH</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>TLS/SSL</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>HL7</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>XMPP</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>WebSockets</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>TELNET</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>IMAP</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>SMTP</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>RDP</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>LDAP</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>Active Directory</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>O Auth</li></Tag>
            </ul>
            <br/><br/>
            <h2 className="heading">Some Exposure</h2>
            <ul>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>Android Studio</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>Java</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>Ruby on Rails</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>MySQL</li></Tag>
                <Tag color="#64C7CC" className="flip-in-x-2s" style={{margin: "0.5em"}} style={{animationDelay: "1.4s", margin: "0.5em"}}><li>Python</li></Tag>
            </ul>
            <br/>
        </div>
    );
}