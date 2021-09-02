import {Component} from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class AddNewItem extends Component {
    showModal = false;

    handleClose = () => this.showModal = false;
    handleShow = () => this.showModal = true;

    render() {
        return (<section className="addnewitem" id="addnewitem">
            <div className="section-header"><strong> Add item</strong></div>
            <div className="item">
                <div className="item-container container">
                    <div className="item-image"><img src="shoes-photos/Abstract_Add_1-copy.jpg" alt="" className="item-photo-img" /></div>
                    <ul className="item-description">
                        <li className="item-name"><a>Name</a></li>
                        <li className="item-size"><a><select name="size">
                            <optgroup label="Men's Sizes">
                                <option> 3 UK / 35,5 EU/ 5 US</option>
                                <option>6,5 UK / 40 EU/ 7,5 US</option>
                                <option selected>7 UK / 40,5 EU/ 8 US</option>
                                <option>7,5 UK / 41 EU/ 8,5 US</option>
                                <option>8 UK / 42 EU/ 9 US</option>
                                <option>8,5 UK / 42,5 EU/ 9,5 US</option>
                                <option>9 UK / 43 EU/ 10 US</option>
                                <option>9,5 UK / 44 EU/ 10,5 US</option>
                                <option>10 UK / 44,5 EU/ 11 US</option>
                                <option>10,5 UK / 45 EU/ 11,5 US</option>
                                <option>11 UK / 45,5 EU/ 12 US</option>
                                <option>11,5 UK / 46 EU/ 12,5 US</option>
                                <option>12 UK / 47 EU/ 13 US</option>
                                <option>12,5 UK / 47,5 EU/ 13,5 US</option>
                            </optgroup>
                        </select></a></li>
                        <li className="item-amount"><a><select name="amount">
                            <optgroup label="Amount">
                                <option> 1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </optgroup>
                        </select></a></li>
                        <li className="item-info">
                            <button className="accordion" onClick={this.handleShow}>Description</button>
                            <Modal show={this.showModal} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={this.handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <div className="panel">
                                <p></p>
                            </div>
                        </li>
                        <li className="item-processing"><a><select name="amount">
                            <optgroup label="State">
                                <option selected> Choose state</option>
                                <option> To Buy</option>
                                <option>Bought</option>
                                <option>Sale In Progress</option>
                                <option>Sold</option>
                            </optgroup>
                        </select></a></li>
                    </ul>
                </div>
            </div>
        </section>);
    }


}

export default AddNewItem;