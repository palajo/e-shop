import React from 'react'
import { CSSTransition } from 'react-transition-group'

import { OrderTableRow } from '../../routes/SuccessPage'

export default function OrderModal({ showOrderModal, toggleOrderModal }) {
    return (
        <CSSTransition 
            in={showOrderModal}
            timeout={400}
            classNames="modal-animation"
            unmountOnExit
        >
            <div className="modal order-modal">
                <div className="modal-overlay" onClick={toggleOrderModal}></div>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                Order #247
                            </div>
                            <div className="modal-close">
                                <div className="icon close" onClick={toggleOrderModal}></div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <section className="success-container">
                                <div className="success-container-row">
                                    <table className="order-details">
                                        <tbody>
                                            <OrderTableRow />
                                            <OrderTableRow />
                                            <OrderTableRow />
                                            <OrderTableRow />
                                            <OrderTableRow />
                                        </tbody>
                                    </table>
                                </div>
                                <div className="success-container-row">
                                    <h4 className="success-container-row-title">
                                        Payment details:
                                    </h4>
                                    <table className="success-informative-table">
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <div>
                                                        Total
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        $2997
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div>
                                                        Shipment
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        $50
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div>
                                                        Total to pay
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        $3047
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="success-container-row">
                                    <h4 className="success-container-row-title">
                                        Client's details:
                                    </h4>
                                    <table className="success-informative-table">
                                        <tbody>
                                            <tr>
                                                <th>
                                                    <div>
                                                        Full Name
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        Voloshyn Volodymyr
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div>
                                                        E-mail
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        admin@leadbranding.net
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div>
                                                        Phone number
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        +38 (000) 00 00 000
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div>
                                                        City
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        Lviv
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    <div>
                                                        Department Nova Poshta
                                                    </div>
                                                </th>
                                                <td>
                                                    <div>
                                                        #64
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}
