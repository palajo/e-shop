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
                                                    Total:
                                                </th>
                                                <td>
                                                    $2997
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    Shipment:
                                                </th>
                                                <td>
                                                    $50
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    Total to pay:
                                                </th>
                                                <td>
                                                    $3047
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
                                                    Full Name
                                                </th>
                                                <td>
                                                    Voloshyn Volodymyr
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    E-mail
                                                </th>
                                                <td>
                                                    admin@leadbranding.net
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    Phone number
                                                </th>
                                                <td>
                                                    +38 (000) 00 00 000
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    City
                                                </th>
                                                <td>
                                                    Lviv
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>
                                                    Department Nova Poshta
                                                </th>
                                                <td>
                                                    #64
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
