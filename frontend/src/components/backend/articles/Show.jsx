import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../common/Footer';
import Sidebar from '../../common/Sidebar';
import Header from '../../common/Header';
import { apiUrl, token } from '../../common/http';

const Show = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const res = await fetch(apiUrl + 'articles', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token()}`,
      },
    });

    const result = await res.json();
    console.log(result); // Check the result to verify the structure
    setArticles(result.errors); // Assuming articles are inside 'errors' array in the response
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3">
              {/* Sidebar */}
              <Sidebar />
            </div>
            <div className="col-md-9">
              {/* Dashboard */}
              <div className="card shadow border-0">
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between">
                    <h4 className="h5">Articles</h4>
                    <Link to="/admin/articles/create" className="btn btn-primary">
                      Create
                    </Link>
                  </div>
                  <hr />
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {articles.length === 0 ? (
                        <tr>
                          <td colSpan="4">No articles available</td>
                        </tr>
                      ) : (
                        articles.map((article) => (
                          <tr key={`article-${article.id}`}>
                            <td>{article.id}</td>
                            <td>{article.title}</td>
                            <td>{article.slug}</td>
                            <td>{article.status === 1 ? 'Active' : 'Block'}</td>
                            <td>
                              <Link
                                to={`/admin/articles/edit/${article.id}`}
                                className="btn btn-primary btn-sm"
                              >
                                Edit
                              </Link>
                              <Link
                                onClick={() => deleteArticle(article.id)}
                                className="btn btn-secondary btn-sm ms-2"
                              >
                                Delete
                              </Link>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Show;

