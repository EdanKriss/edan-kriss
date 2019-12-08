import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div id="remove-fade-in-1dot5s" className="fade-in-1dot5s">
                <div id="contactSpacer">
                    <div id="lead-down">
                        <span onClick={() => { window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: "smooth" }); }}>
                            <i className="fa fa-chevron-down" aria-hidden="true"></i>
                        </span>
                    </div>
                    <br/><br/><br/>
                </div>

                <div id="contact">
                    <h2>Get in Touch</h2>
                    <div id="contact-form">
                        <form method="POST" action="https://formspree.io/edan_kriss@outlook.com">
                            <input type="hidden" name="_subject" value="Contact request from personal website" />
                            <input type="email" name="_replyto" placeholder="Your email" required />
                            <textarea name="message" placeholder="Your message" required></textarea>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>

                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 copyright">
                                <p>
                                    Copyright &copy; 2017 Edan Kriss
                                </p>
                            </div>
                            <div className="col-sm-2 top">
                                <span id="to-top">
                                    <i className="fa fa-chevron-up" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="col-sm-5 social">
                                <ul>
                                    <li>
                                        <a href="https://github.com/" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://stackoverflow.com/" target="_blank"><i className="fa fa-stack-overflow" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="https://plus.google.com/" target="_blank"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}