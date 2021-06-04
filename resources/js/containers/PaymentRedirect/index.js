import React, { useEffect, useState } from "react";
import { CheckCircle, XSquareFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../../../css/RedirectLoader.css";
import qs from "query-string";

const PaymentRedirect = ({ location, success }) => {
    const query = qs.parse(location.search);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        if (redirect) window.location.href = "/";
    }, [redirect]);

    const finalTask = () => {
        localStorage.clear();
        setTimeout(() => setRedirect(true), 0);
    };

    useEffect(() => {
        var mounted = true;
        if (success) {
            const method = query.method.toLowerCase();
            if (method === "stripe") {
                const applicant_id = query.applicant_id;
                if (mounted)
                    axios
                        .post("/api/stripe/session", {
                            sessionId: query.session_id
                        })
                        .then(async res => {
                            const details = res.data;
                            const data = {
                                method,
                                amount: details.amount_total / 100,
                                applicant_id
                            };

                            return await axios.post("/api/payments", data);
                        })
                        .then(
                            async () =>
                                await axios.put(
                                    `/api/applicants/${applicant_id}`,
                                    {
                                        payment_made: true
                                    }
                                )
                        )
                        .then(() => {
                            console.log("Payment successful!");
                            finalTask();
                        })
                        .catch(err => console.log(err.response));
            } else finalTask();
        } else finalTask();
        return () => {
            mounted = false;
        };
    }, []);

    return (
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
                Redirecting to homepage... <Link to="/">Go home</Link>
            </small>
        </div>
    );
};

export default PaymentRedirect;
