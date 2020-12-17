import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { CheckCircle, XSquareFill } from "react-bootstrap-icons";
import { Link, Redirect, useLocation } from "react-router-dom";
import "../../../css/RedirectLoader.css";

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const PaymentRedirect = ({ success }) => {
    const query = useQuery();
    const [redirect, setRedirect] = useState(false);

    const finalTask = () => {
        localStorage.removeItem("couponId");
        localStorage.removeItem("discount");
        setTimeout(() => setRedirect(true), 2000);
    };

    useEffect(() => {
        let isMounted = true;
        if (success) {
            const method = query.get("method").toLowerCase();
            const applicant_id = query.get("applicant_id");
            if (method === "stripe")
                axios
                    .put(`/api/applicants/${applicant_id}`, {
                        payment_made: true
                    })
                    .then(() => {
                        axios
                            .post("/api/stripe/session", {
                                sessionId: query.get("session_id")
                            })
                            .then(res => {
                                const details = res.data;
                                const data = {
                                    method,
                                    amount: details.amount_total / 100,
                                    applicant_id,
                                    period: query.get("period")
                                };
                                axios
                                    .post("/api/payments/", data)
                                    .then(() => {
                                        if (isMounted) finalTask();
                                    })
                                    .catch(
                                        err => "Error while creating payments!"
                                    );
                            })
                            .catch(err =>
                                console.log("Error while retrieving session!")
                            );
                    })
                    .catch(err =>
                        console.log("Error while updating applicant!")
                    );
        } else {
            if (isMounted) finalTask();
        }
        return () => {
            isMounted = false;
        };
    }, [query]);

    return redirect ? (
        <Redirect to="/home" />
    ) : (
        <div style={{ textAlign: "center", margin: "250px 0" }}>
            <p
                style={{
                    fontSize: "25px"
                }}
            >
                {success
                    ? "Your payment was successful!"
                    : "Your payment was cancelled!"}{" "}
                {success ? (
                    <CheckCircle
                        color="green"
                        size={25}
                        style={{
                            marginTop: "-5px"
                        }}
                    />
                ) : (
                    <XSquareFill
                        color="red"
                        size={25}
                        style={{
                            marginTop: "-5px"
                        }}
                    />
                )}
            </p>
            <small>
                <span>
                    <Spinner
                        animation="border"
                        role="status"
                        className="redirectLoader"
                    >
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </span>{" "}
                Redirecting to homepage... <Link to="/">Go home</Link>
            </small>
        </div>
    );
};

export default PaymentRedirect;
