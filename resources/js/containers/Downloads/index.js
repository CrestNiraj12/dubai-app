import React, { useEffect, useState } from "react";
import { Container, Jumbotron, Row } from "react-bootstrap";
import "../../../css/Page.css";
import PageLoadSpinner from "../../components/PageLoadSpinner";

const Downloads = () => {
    const [loading, setLoading] = useState(false);
    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios
            .get("/api/files")
            .then(res => {
                setFiles(res.data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            {loading ? (
                <PageLoadSpinner />
            ) : (
                <Container fluid style={{ padding: 0 }}>
                    <Container className="page-container">
                        <Jumbotron>
                            <h1>Downloads</h1>
                            <p>
                                Download various brochures and infos about
                                courses and stuffs related to The Woolwich
                                Institute
                            </p>
                        </Jumbotron>
                        <Row>
                            <table
                                className="table table-bordered"
                                style={{ margin: "10px 25px" }}
                            >
                                <thead style={{ color: "#fff" }}>
                                    <tr className="bg-primary">
                                        <th>
                                            <strong>Id</strong>
                                        </th>
                                        <th>
                                            <strong>Category</strong>
                                        </th>
                                        <th>
                                            <strong>File Name</strong>
                                        </th>
                                        <th style={{ width: "10%" }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {files && files.length > 0 ? (
                                        files.map(
                                            (
                                                {
                                                    name,
                                                    file_path,
                                                    file_category: {
                                                        title: category
                                                    }
                                                },
                                                index
                                            ) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{category}</td>
                                                    <td>{name}</td>
                                                    <td
                                                        style={{
                                                            textAlign: "center"
                                                        }}
                                                    >
                                                        <a
                                                            href={`/storage/${file_path}`}
                                                        >
                                                            <div className="btn btn-xs btn-success">
                                                                Download
                                                            </div>
                                                        </a>
                                                    </td>
                                                </tr>
                                            )
                                        )
                                    ) : (
                                        <tr>
                                            <td colspan={4}>
                                                No files available to download!
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </Row>
                    </Container>
                </Container>
            )}
        </>
    );
};

export default Downloads;
