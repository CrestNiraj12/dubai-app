import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { CheckCircle, XSquareFill } from "react-bootstrap-icons";
import { Link, Redirect } from "react-router-dom";
import "../../../css/RedirectLoader.css";
import qs from "query-string";

const PaymentRedirect = ({ location, success }) => {
    const query = qs.parse(location.search);
    const [redirect, setRedirect] = useState(false);

    const finalTask = () => {
        localStorage.removeItem("couponId");
        localStorage.removeItem("discount");
        setTimeout(() => setRedirect(true), 2000);
    };

    useEffect(() => {
        var mounted = true;
        if (success) {
            const method = query.method.toLowerCase();
            if (method === "stripe") {
                const applicant_id = query.applicant_id;
                if (mounted)
                    axios
                        .put(`/api/applicants/${applicant_id}`, {
                            payment_made: true
                        })
                        .then(() =>
                            axios.post("/api/stripe/session", {
                                sessionId: query.session_id
                            })
                        )
                        .then(res => {
                            const details = res.data;
                            const data = {
                                method,
                                amount: details.amount_total / 100,
                                applicant_id,
                                period: query.period
                            };

                            return axios.post("/api/payments/", data);
                        })
                        .then(() => {
                            console.log("Payment successful!");
                            finalTask();
                        })
                        .catch(err => console.log(err));
            }
        } else finalTask();
        return () => {
            mounted = false;
        };
    }, []);

    return redirect ? (
        <Redirect to="/" />
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
