import React, { Component } from 'react';

export default class Pepsi extends Component {
    renderPepsi() {
        // var Wrap="url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRKJZK82tdIUdmhZMHQFYKFHUm9u3stm8vyijQSx3Te9qEgrC7VDV0fmYw-iw')-";
        var Wrap ="url('../../public/images/pepsi.png')-";
        var coverURLs = [];
        var rotorDegrees = [];
        var d = 0;
        for (var i=0;i<360;i+=2.5) {
            d += 3.5;
            coverURLs.push(Wrap+d+"px center / cover");
            rotorDegrees.push(i);
        }
        var k = -1;
        return rotorDegrees.map((i) => {
            k += 1;
            return (
                <div className="rotor" style={{transform: 'rotateY('+i+'deg)'}} key={"rotor" + k}>
                    <div className="axis">
                        <div className="cover" style={{background: coverURLs[k]}} ></div>
                    </div>
                </div>
            );
        });
    }
    
    render() {
        return (
            <div id="pepsi-container" className="container">
                <a id="pepsi-note" data-toggle="collapse" href="#collapsePepsi">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h4 className="panel-title">Thirsty? Have a beverage!</h4>
                            <span className="glyphicon glyphicon-menu-down"></span>
                        </div>
                        <div id="collapsePepsi" className="panel-collapse collapse">
                            <div id="anim">
                                <div className="stator">
                                    <div className="top">
                                        <p className='ptop'>Edan</p>
                                    </div>
                                    <div className="bottom"></div>
                                    {this.renderPepsi()}
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}